import { useEffect, useState } from "react";
import { subscribeImageFailures, type ImageFailure } from "@/lib/imageProxy";
import { fetchProxyStats, hitRate, type ProxyStats } from "@/lib/imageProxyStats";

const GOLD = "#b38f4a";

/**
 * Temporary on-screen overlay that lists failed images and their reason.
 * Enable with ?debug=images in the URL (or localStorage.LOL_IMG_DEBUG = "1").
 */
const ImageDebugOverlay = () => {
  const [enabled, setEnabled] = useState(false);
  const [failures, setFailures] = useState<ImageFailure[]>([]);
  const [open, setOpen] = useState(true);
  const [stats, setStats] = useState<ProxyStats | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const flag = params.get("debug") === "images" || localStorage.getItem("LOL_IMG_DEBUG") === "1";
    setEnabled(flag);
    if (!flag) return;
    const unsub = subscribeImageFailures((f) => setFailures((prev) => [f, ...prev].slice(0, 50)));
    let alive = true;
    const poll = async () => {
      const s = await fetchProxyStats();
      if (alive && s) setStats(s);
    };
    poll();
    const iv = window.setInterval(poll, 5000);
    return () => { alive = false; window.clearInterval(iv); unsub(); };
  }, []);

  if (!enabled) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 12,
        left: 12,
        zIndex: 9999,
        width: 360,
        maxHeight: "60vh",
        background: "rgba(10,10,10,0.95)",
        border: `1px solid ${GOLD}`,
        color: "#fff",
        fontFamily: "ui-monospace, monospace",
        fontSize: 11,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          background: GOLD,
          color: "#0d0d0d",
          padding: "6px 10px",
          textAlign: "left",
          letterSpacing: 2,
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        Image Debug · {failures.length} failed {open ? "▾" : "▸"}
      </button>
      {open && (
        <div style={{ overflowY: "auto", padding: 8, gap: 6, display: "flex", flexDirection: "column" }}>
          {stats && (
            <div style={{ borderBottom: `1px solid ${GOLD}`, paddingBottom: 6, marginBottom: 4 }}>
              <div style={{ color: GOLD, textTransform: "uppercase", letterSpacing: 1 }}>
                Proxy Cache · {(hitRate(stats) * 100).toFixed(0)}% hit rate
              </div>
              <div>Hits {stats.hits} · Misses {stats.misses} · Errors {stats.errors}</div>
              <div style={{ opacity: 0.7 }}>Cache {stats.cacheSize}/{stats.cacheMax}</div>
            </div>
          )}
          {failures.length === 0 && <div style={{ opacity: 0.6 }}>No failures yet.</div>}
          {failures.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(179,143,74,0.25)", paddingBottom: 6 }}>
              <div style={{ color: GOLD, textTransform: "uppercase", letterSpacing: 1 }}>
                {f.reason} · {f.attempts} tries · {f.context ?? "-"}
              </div>
              <div style={{ wordBreak: "break-all", opacity: 0.85 }}>{f.url}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageDebugOverlay;