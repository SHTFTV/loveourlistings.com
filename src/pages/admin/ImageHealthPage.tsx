import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchProxyStats, hitRate, type ProxyStats } from "@/lib/imageProxyStats";
import { subscribeImageFailures, type ImageFailure } from "@/lib/imageProxy";

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

const ImageHealthPage = () => {
  const [stats, setStats] = useState<ProxyStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [localFailures, setLocalFailures] = useState<ImageFailure[]>([]);

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
          <h1 style={{ color: "#fff", fontFamily: "Georgia, serif" }} className="text-4xl md:text-5xl font-bold">Image Health</h1>
          <p style={{ color: "rgba(255,255,255,0.6)" }} className="mt-3 text-sm">
            Live proxy cache stats, allow-list usage, and failed image URLs across RSS and thumbnail loads.
          </p>
        </header>

        {loading && <p style={{ color: "#fff" }}>Loading stats…</p>}

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
                </tr>
              </thead>
              <tbody>
                {localFailures.length === 0 && (
                  <tr><td className="p-3" colSpan={5} style={{ opacity: 0.6 }}>None this session. Visit /celebrity to populate.</td></tr>
                )}
                {localFailures.map((f, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${BORDER}` }}>
                    <td className="p-3 text-xs">{new Date(f.timestamp).toLocaleTimeString()}</td>
                    <td className="p-3 text-xs uppercase" style={{ color: GOLD, letterSpacing: 1 }}>{f.reason}</td>
                    <td className="p-3">{f.attempts}</td>
                    <td className="p-3 text-xs">{f.context ?? "-"}</td>
                    <td className="p-3 text-xs" style={{ wordBreak: "break-all" }}>{f.url}</td>
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