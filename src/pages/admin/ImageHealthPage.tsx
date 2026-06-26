import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchProxyStats, hitRate, type ProxyStats } from "@/lib/imageProxyStats";
import { subscribeImageFailures, type ImageFailure } from "@/lib/imageProxy";
import { IMAGE_RETRY_EVENT, retryImage } from "@/components/SmartImage";
import { supabase } from "@/integrations/supabase/client";

const GOLD = "#b38f4a";
const BG = "#0d0d0d";
const PANEL = "#161616";
const BORDER = "rgba(179,143,74,0.25)";

const Stat = ({ label, value }: { label: string; value: string | number }) => (
  <div style={{ background: PANEL, border: `1px solid ${BORDER}`, padding: "18px 20px" }}>
    <div style={{ color: GOLD, fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}>{label}</div>
    <div style={{ color: "#fff", fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700 }}>{value}</div>
  </div>
);

type AlertConfig = {
  id?: string;
  miss_rate_threshold: number;
  error_rate_threshold: number;
  min_sample_size: number;
  webhook_url: string | null;
  alert_email: string | null;
  cooldown_minutes: number;
  enabled: boolean;
};

const ImageHealthPage = () => {
  const [stats, setStats] = useState<ProxyStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [localFailures, setLocalFailures] = useState<ImageFailure[]>([]);
  const [windowMinutes, setWindowMinutes] = useState<number>(60);
  const [config, setConfig] = useState<AlertConfig | null>(null);
  const [savingCfg, setSavingCfg] = useState(false);
  const [cfgMsg, setCfgMsg] = useState<string | null>(null);
  const [testingAlerts, setTestingAlerts] = useState(false);
  const [retestMsg, setRetestMsg] = useState<string | null>(null);
  const [retryingUrls, setRetryingUrls] = useState<Record<string, boolean>>({});

  const retryOne = (url: string) => {
    setRetryingUrls((m) => ({ ...m, [url]: true }));
    retryImage(url);
    // Optimistically clear from local failures so the row updates immediately;
    // if it fails again, SmartImage will re-report and it will reappear.
    setLocalFailures((prev) => prev.filter((f) => f.url !== url));
    window.setTimeout(() => {
      setRetryingUrls((m) => { const n = { ...m }; delete n[url]; return n; });
    }, 2500);
  };

  useEffect(() => {
    let alive = true;
    const refresh = async () => {
      const s = await fetchProxyStats();
      if (!alive) return;
      setStats(s);
      setLoading(false);
    };
    refresh();
    const iv = window.setInterval(refresh, 5000);
    const unsub = subscribeImageFailures((f) =>
      setLocalFailures((prev) => [f, ...prev].slice(0, 100)),
    );
    return () => { alive = false; window.clearInterval(iv); unsub(); };
  }, []);

  useEffect(() => {
    supabase.from("image_alert_config").select("*").limit(1).maybeSingle()
      .then(({ data }) => { if (data) setConfig(data as AlertConfig); });
  }, []);

  const saveConfig = async () => {
    if (!config) return;
    setSavingCfg(true); setCfgMsg(null);
    const { error } = await supabase.from("image_alert_config").update({
      miss_rate_threshold: config.miss_rate_threshold,
      error_rate_threshold: config.error_rate_threshold,
      min_sample_size: config.min_sample_size,
      webhook_url: config.webhook_url || null,
      alert_email: config.alert_email || null,
      cooldown_minutes: config.cooldown_minutes,
      enabled: config.enabled,
      updated_at: new Date().toISOString(),
    }).eq("id", config.id!);
    setSavingCfg(false);
    setCfgMsg(error ? `Error: ${error.message}` : "Saved.");
  };

  const runAlertCheck = async () => {
    setTestingAlerts(true); setCfgMsg(null);
    try {
      const { data, error } = await supabase.functions.invoke("check-image-alerts");
      setCfgMsg(error ? `Error: ${error.message}` : `Checked. ${JSON.stringify(data)}`);
    } finally { setTestingAlerts(false); }
  };

  const retestImages = () => {
    window.dispatchEvent(new CustomEvent(IMAGE_RETRY_EVENT));
    setLocalFailures([]);
    setRetestMsg("Re-test triggered. Previously failed images will retry now.");
    setTimeout(() => setRetestMsg(null), 4000);
  };

  const exportCsv = () => {
    const cutoff = Date.now() - windowMinutes * 60_000;
    const rows: string[][] = [["source", "when_iso", "host", "status", "reason", "url", "attempts", "context"]];
    (stats?.recentFailures ?? [])
      .filter((f) => f.ts >= cutoff)
      .forEach((f) => rows.push(["server", new Date(f.ts).toISOString(), f.host, String(f.status), f.reason, f.url, "", ""]));
    localFailures
      .filter((f) => f.timestamp >= cutoff)
      .forEach((f) => rows.push(["client", new Date(f.timestamp).toISOString(), "", "", f.reason, f.url, String(f.attempts), f.context ?? ""]));
    if (stats) {
      rows.push([]);
      rows.push(["# proxy stats snapshot"]);
      rows.push(["hits", String(stats.hits)]);
      rows.push(["misses", String(stats.misses)]);
      rows.push(["errors", String(stats.errors)]);
      rows.push(["cache_size", `${stats.cacheSize}/${stats.cacheMax}`]);
      rows.push(["hit_rate", `${(hitRate(stats) * 100).toFixed(2)}%`]);
      Object.entries(stats.hostHits).forEach(([h, n]) => rows.push([`host_hits:${h}`, String(n)]));
      Object.entries(stats.hostMisses).forEach(([h, n]) => rows.push([`host_misses:${h}`, String(n)]));
    }
    const csv = rows.map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `image-health-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-")}.csv`;
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  };

  const hostsByVolume = stats
    ? Object.entries(
        [...Object.keys(stats.hostHits), ...Object.keys(stats.hostMisses)].reduce(
          (acc, h) => {
            acc[h] = (stats.hostHits[h] ?? 0) + (stats.hostMisses[h] ?? 0);
            return acc;
          },
          {} as Record<string, number>,
        ),
      ).sort((a, b) => b[1] - a[1])
    : [];

  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <Navbar />
      <main className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <header className="mb-10">
          <p style={{ color: GOLD, letterSpacing: 3, fontSize: 11 }} className="uppercase mb-2">Admin · Diagnostics</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 style={{ color: "#fff", fontFamily: "Georgia, serif" }} className="text-4xl md:text-5xl font-bold">Image Health</h1>
              <p style={{ color: "rgba(255,255,255,0.6)" }} className="mt-3 text-sm">
                Live proxy cache stats, allow-list usage, and failed image URLs.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={windowMinutes}
                onChange={(e) => setWindowMinutes(Number(e.target.value))}
                className="px-3 py-2 text-xs uppercase tracking-widest bg-transparent"
                style={{ border: `1px solid ${GOLD}55`, color: "#fff" }}
              >
                <option value={15} style={{ color: "#000" }}>Last 15 min</option>
                <option value={60} style={{ color: "#000" }}>Last 1 hour</option>
                <option value={360} style={{ color: "#000" }}>Last 6 hours</option>
                <option value={1440} style={{ color: "#000" }}>Last 24 hours</option>
              </select>
              <button onClick={retestImages}
                className="px-4 py-2 text-xs uppercase tracking-widest font-bold"
                style={{ border: `1px solid ${GOLD}`, color: GOLD, background: "transparent" }}>
                ↻ Re-test failed
              </button>
              <button onClick={exportCsv}
                className="px-4 py-2 text-xs uppercase tracking-widest font-bold"
                style={{ background: GOLD, color: BG }}>
                ⬇ Export CSV
              </button>
              <button onClick={() => supabase.auth.signOut().then(() => window.location.reload())}
                className="px-4 py-2 text-xs uppercase tracking-widest"
                style={{ border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.7)" }}>
                Sign out
              </button>
            </div>
          </div>
          {retestMsg && <p className="mt-4 text-xs" style={{ color: GOLD }}>{retestMsg}</p>}
        </header>

        {loading && <p style={{ color: "#fff" }}>Loading stats…</p>}

        {config && (
          <section className="mb-12" style={{ background: PANEL, border: `1px solid ${BORDER}` }}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 style={{ color: GOLD, letterSpacing: 2 }} className="uppercase text-xs">Alert Thresholds</h2>
                <label className="text-xs uppercase tracking-widest flex items-center gap-2" style={{ color: "#fff" }}>
                  <input type="checkbox" checked={config.enabled}
                    onChange={(e) => setConfig({ ...config, enabled: e.target.checked })} />
                  Enabled
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <label className="block" style={{ color: "#fff" }}>
                  <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>Miss-rate threshold (0-1)</span>
                  <input type="number" step="0.05" min={0} max={1} value={config.miss_rate_threshold}
                    onChange={(e) => setConfig({ ...config, miss_rate_threshold: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-transparent" style={{ border: `1px solid ${BORDER}` }} />
                </label>
                <label className="block" style={{ color: "#fff" }}>
                  <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>Error-rate threshold (0-1)</span>
                  <input type="number" step="0.05" min={0} max={1} value={config.error_rate_threshold}
                    onChange={(e) => setConfig({ ...config, error_rate_threshold: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-transparent" style={{ border: `1px solid ${BORDER}` }} />
                </label>
                <label className="block" style={{ color: "#fff" }}>
                  <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>Min sample size</span>
                  <input type="number" min={1} value={config.min_sample_size}
                    onChange={(e) => setConfig({ ...config, min_sample_size: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-transparent" style={{ border: `1px solid ${BORDER}` }} />
                </label>
                <label className="block" style={{ color: "#fff" }}>
                  <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>Cooldown (minutes)</span>
                  <input type="number" min={1} value={config.cooldown_minutes}
                    onChange={(e) => setConfig({ ...config, cooldown_minutes: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-transparent" style={{ border: `1px solid ${BORDER}` }} />
                </label>
                <label className="block md:col-span-2" style={{ color: "#fff" }}>
                  <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>Webhook URL (Slack/Discord/Zapier)</span>
                  <input type="url" placeholder="https://hooks.slack.com/…" value={config.webhook_url ?? ""}
                    onChange={(e) => setConfig({ ...config, webhook_url: e.target.value })}
                    className="w-full px-3 py-2 bg-transparent" style={{ border: `1px solid ${BORDER}` }} />
                </label>
                <label className="block" style={{ color: "#fff" }}>
                  <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: GOLD }}>Alert email</span>
                  <input type="email" placeholder="admin@example.com" value={config.alert_email ?? ""}
                    onChange={(e) => setConfig({ ...config, alert_email: e.target.value })}
                    className="w-full px-3 py-2 bg-transparent" style={{ border: `1px solid ${BORDER}` }} />
                </label>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <button onClick={saveConfig} disabled={savingCfg}
                  className="px-5 py-2 text-xs uppercase tracking-widest font-bold"
                  style={{ background: GOLD, color: BG, opacity: savingCfg ? 0.6 : 1 }}>
                  {savingCfg ? "Saving…" : "Save Thresholds"}
                </button>
                <button onClick={runAlertCheck} disabled={testingAlerts}
                  className="px-5 py-2 text-xs uppercase tracking-widest"
                  style={{ border: `1px solid ${GOLD}`, color: GOLD, opacity: testingAlerts ? 0.6 : 1 }}>
                  {testingAlerts ? "Checking…" : "Run alert check now"}
                </button>
                {cfgMsg && <span className="text-xs" style={{ color: GOLD }}>{cfgMsg}</span>}
              </div>
              <p className="text-[11px] mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                Email alerts require the <code>RESEND_API_KEY</code> secret. Webhook fires immediately when configured. Cooldown prevents repeat alerts on the same metric.
              </p>
            </div>
          </section>
        )}

        {stats && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <Stat label="Hit Rate" value={`${(hitRate(stats) * 100).toFixed(0)}%`} />
              <Stat label="Cache Hits" value={stats.hits} />
              <Stat label="Cache Misses" value={stats.misses} />
              <Stat label="Upstream Errors" value={stats.errors} />
              <Stat label="Cache Size" value={`${stats.cacheSize} / ${stats.cacheMax}`} />
              <Stat label="Allow-list Hosts" value={stats.allowList.length} />
              <Stat label="Uptime" value={`${Math.floor(stats.uptimeMs / 60000)}m`} />
              <Stat label="Local Client Failures" value={localFailures.length} />
            </div>

            <section className="mb-12">
              <h2 style={{ color: GOLD, letterSpacing: 2 }} className="uppercase text-xs mb-3">Allow-list Hits by Host</h2>
              <div style={{ background: PANEL, border: `1px solid ${BORDER}` }}>
                <table className="w-full text-sm" style={{ color: "#fff" }}>
                  <thead style={{ color: GOLD, fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
                    <tr>
                      <th className="text-left p-3">Host</th>
                      <th className="text-right p-3">Hits</th>
                      <th className="text-right p-3">Misses</th>
                      <th className="text-right p-3">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hostsByVolume.length === 0 && (
                      <tr><td className="p-3" colSpan={4} style={{ opacity: 0.6 }}>No proxy traffic recorded yet.</td></tr>
                    )}
                    {hostsByVolume.map(([host, total]) => (
                      <tr key={host} style={{ borderTop: `1px solid ${BORDER}` }}>
                        <td className="p-3 font-mono text-xs">{host}</td>
                        <td className="p-3 text-right">{stats.hostHits[host] ?? 0}</td>
                        <td className="p-3 text-right">{stats.hostMisses[host] ?? 0}</td>
                        <td className="p-3 text-right">{total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 style={{ color: GOLD, letterSpacing: 2 }} className="uppercase text-xs mb-3">Recent Upstream Failures (server)</h2>
              <div style={{ background: PANEL, border: `1px solid ${BORDER}` }}>
                <table className="w-full text-sm" style={{ color: "#fff" }}>
                  <thead style={{ color: GOLD, fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
                    <tr>
                      <th className="text-left p-3">When</th>
                      <th className="text-left p-3">Host</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Reason</th>
                      <th className="text-left p-3">URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentFailures.length === 0 && (
                      <tr><td className="p-3" colSpan={5} style={{ opacity: 0.6 }}>No failures recorded.</td></tr>
                    )}
                    {stats.recentFailures.map((f, i) => (
                      <tr key={i} style={{ borderTop: `1px solid ${BORDER}` }}>
                        <td className="p-3 text-xs">{new Date(f.ts).toLocaleTimeString()}</td>
                        <td className="p-3 font-mono text-xs">{f.host}</td>
                        <td className="p-3" style={{ color: f.status >= 400 ? "#ef4444" : "#fff" }}>{f.status}</td>
                        <td className="p-3 text-xs uppercase" style={{ color: GOLD, letterSpacing: 1 }}>{f.reason}</td>
                        <td className="p-3 text-xs" style={{ wordBreak: "break-all" }}>{f.url}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        <section className="mb-12">
          <h2 style={{ color: GOLD, letterSpacing: 2 }} className="uppercase text-xs mb-3">Recent Client Failures (browser session)</h2>
          <div style={{ background: PANEL, border: `1px solid ${BORDER}` }}>
            <table className="w-full text-sm" style={{ color: "#fff" }}>
              <thead style={{ color: GOLD, fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
                <tr>
                  <th className="text-left p-3">When</th>
                  <th className="text-left p-3">Reason</th>
                  <th className="text-left p-3">Attempts</th>
                  <th className="text-left p-3">Context</th>
                  <th className="text-left p-3">URL</th>
                  <th className="text-right p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {localFailures.length === 0 && (
                  <tr><td className="p-3" colSpan={6} style={{ opacity: 0.6 }}>None this session. Visit /celebrity to populate.</td></tr>
                )}
                {localFailures.map((f, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${BORDER}` }}>
                    <td className="p-3 text-xs">{new Date(f.timestamp).toLocaleTimeString()}</td>
                    <td className="p-3 text-xs uppercase" style={{ color: GOLD, letterSpacing: 1 }}>{f.reason}</td>
                    <td className="p-3">{f.attempts}</td>
                    <td className="p-3 text-xs">{f.context ?? "-"}</td>
                    <td className="p-3 text-xs" style={{ wordBreak: "break-all" }}>{f.url}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => retryOne(f.url)}
                      disabled={!!retryingUrls[f.url]}
                      className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold"
                      style={{ border: `1px solid ${GOLD}`, color: GOLD, background: "transparent", opacity: retryingUrls[f.url] ? 0.6 : 1, whiteSpace: "nowrap" }}
                    >
                      {retryingUrls[f.url] ? (
                        <>
                          <span style={{ display: "inline-block", width: 10, height: 10, border: `2px solid ${GOLD}`, borderTopColor: "transparent", borderRadius: "50%", animation: "lol-spin 0.7s linear infinite", marginRight: 6, verticalAlign: "-1px" }} />
                          Retrying
                        </>
                      ) : "↻ Retry"}
                    </button>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ImageHealthPage;