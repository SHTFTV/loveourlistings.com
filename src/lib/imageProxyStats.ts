const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;

export type ProxyStats = {
  hits: number;
  misses: number;
  errors: number;
  hostHits: Record<string, number>;
  hostMisses: Record<string, number>;
  recentFailures: Array<{ url: string; host: string; status: number; ts: number; reason: string }>;
  cacheSize: number;
  cacheMax: number;
  allowList: string[];
  uptimeMs: number;
};

export async function fetchProxyStats(): Promise<ProxyStats | null> {
  if (!SUPABASE_URL) return null;
  try {
    const r = await fetch(`${SUPABASE_URL}/functions/v1/image-proxy?stats=1`, { cache: 'no-store' });
    if (!r.ok) return null;
    return (await r.json()) as ProxyStats;
  } catch {
    return null;
  }
}

export function hitRate(s: Pick<ProxyStats, 'hits' | 'misses'>): number {
  const total = s.hits + s.misses;
  return total === 0 ? 0 : s.hits / total;
}