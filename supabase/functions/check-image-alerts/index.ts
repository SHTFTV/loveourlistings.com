import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  try {
    const admin = createClient(SUPABASE_URL, SERVICE_KEY);

    const { data: cfg } = await admin
      .from('image_alert_config')
      .select('*')
      .limit(1)
      .maybeSingle();

    if (!cfg || !cfg.enabled) {
      return new Response(JSON.stringify({ ok: true, skipped: 'disabled' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Pull current proxy stats
    const statsRes = await fetch(`${SUPABASE_URL}/functions/v1/image-proxy?stats=1`);
    if (!statsRes.ok) {
      return new Response(JSON.stringify({ ok: false, error: 'stats unavailable' }), {
        status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const stats = await statsRes.json();
    const total = (stats.hits ?? 0) + (stats.misses ?? 0);
    const missRate = total > 0 ? stats.misses / total : 0;
    const errorRate = total > 0 ? (stats.errors ?? 0) / total : 0;

    const fired: Array<{ metric: string; value: number; threshold: number }> = [];
    if (total >= cfg.min_sample_size) {
      if (missRate > cfg.miss_rate_threshold)
        fired.push({ metric: 'miss_rate', value: missRate, threshold: cfg.miss_rate_threshold });
      if (errorRate > cfg.error_rate_threshold)
        fired.push({ metric: 'error_rate', value: errorRate, threshold: cfg.error_rate_threshold });
    }

    if (fired.length === 0) {
      return new Response(JSON.stringify({ ok: true, fired: 0, missRate, errorRate, total }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Cooldown: don't re-fire same metric within cooldown_minutes
    const since = new Date(Date.now() - cfg.cooldown_minutes * 60_000).toISOString();
    const { data: recent } = await admin
      .from('image_alert_log')
      .select('metric')
      .gte('triggered_at', since);
    const recentSet = new Set((recent ?? []).map((r: any) => r.metric));
    const toFire = fired.filter((f) => !recentSet.has(f.metric));

    const results: any[] = [];
    for (const f of toFire) {
      let webhookOk = false;
      let emailOk = false;
      const payload = {
        alert: 'image-proxy-threshold',
        metric: f.metric,
        value: Number(f.value.toFixed(4)),
        threshold: Number(f.threshold),
        stats: { hits: stats.hits, misses: stats.misses, errors: stats.errors, total },
        at: new Date().toISOString(),
      };

      if (cfg.webhook_url) {
        try {
          const r = await fetch(cfg.webhook_url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          webhookOk = r.ok;
        } catch { webhookOk = false; }
      }

      if (cfg.alert_email) {
        const resendKey = Deno.env.get('RESEND_API_KEY');
        if (resendKey) {
          try {
            const r = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
              body: JSON.stringify({
                from: 'alerts@resend.dev',
                to: [cfg.alert_email],
                subject: `[LOL] Image proxy alert: ${f.metric} ${(f.value * 100).toFixed(1)}%`,
                html: `<h2>Image proxy threshold exceeded</h2>
                  <p><b>Metric:</b> ${f.metric}<br/>
                  <b>Current:</b> ${(f.value * 100).toFixed(2)}%<br/>
                  <b>Threshold:</b> ${(f.threshold * 100).toFixed(2)}%</p>
                  <pre>${JSON.stringify(payload.stats, null, 2)}</pre>`,
              }),
            });
            emailOk = r.ok;
          } catch { emailOk = false; }
        }
      }

      await admin.from('image_alert_log').insert({
        metric: f.metric,
        value: f.value,
        threshold: f.threshold,
        delivered_email: emailOk,
        delivered_webhook: webhookOk,
        notes: !cfg.webhook_url && !cfg.alert_email ? 'no destinations configured' : null,
      });
      results.push({ ...f, webhookOk, emailOk });
    }

    return new Response(JSON.stringify({ ok: true, fired: results.length, results }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});