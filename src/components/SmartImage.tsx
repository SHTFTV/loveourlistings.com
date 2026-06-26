import { useEffect, useRef, useState } from "react";
import { classifyFailure, originalImageFromProxy, reportImageFailure } from "@/lib/imageProxy";

export const IMAGE_RETRY_EVENT = "lol:image-retry-all";
export const IMAGE_RETRY_ONE_EVENT = "lol:image-retry-one";

/** Fire a targeted retry for a single image URL (matches against original or proxied src). */
export const retryImage = (url: string) => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(IMAGE_RETRY_ONE_EVENT, { detail: { url } }));
};

type Props = {
  src: string;
  alt: string;
  fallbackInitials: string;
  className?: string;
  imgClassName?: string;
  context?: string;
  maxRetries?: number;
  goldColor?: string;
  bgColor?: string;
};

/**
 * Renders an <img> with:
 * - automatic retries (3) with exponential backoff + cache-busting query
 * - onError → gold initials monogram tile fallback
 * - failure reporting to the global debug bus
 */
const SmartImage = ({
  src,
  alt,
  fallbackInitials,
  className,
  imgClassName,
  context,
  maxRetries = 3,
  goldColor = "#b38f4a",
  bgColor = "#0d0d0d",
}: Props) => {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setAttempt(0);
    setFailed(false);
    setRetrying(false);
    setLoaded(false);
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [src]);

  const doRetry = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setFailed(false);
    setLoaded(false);
    setAttempt((a) => a + 1);
    setRetrying(true);
  };

  // Listen for a global "re-test" request: only restart if we'd previously failed.
  useEffect(() => {
    const handler = () => {
      if (failed) doRetry();
    };
    const oneHandler = (e: Event) => {
      const detail = (e as CustomEvent<{ url: string }>).detail;
      if (!detail?.url) return;
      const original = originalImageFromProxy(src);
      if (detail.url === src || detail.url === original) doRetry();
    };
    if (typeof window !== "undefined") {
      window.addEventListener(IMAGE_RETRY_EVENT, handler);
      window.addEventListener(IMAGE_RETRY_ONE_EVENT, oneHandler as EventListener);
      return () => {
        window.removeEventListener(IMAGE_RETRY_EVENT, handler);
        window.removeEventListener(IMAGE_RETRY_ONE_EVENT, oneHandler as EventListener);
      };
    }
  }, [failed, src]);

  const handleError = () => {
    if (attempt < maxRetries) {
      const next = attempt + 1;
      const backoff = 300 * Math.pow(2, attempt); // 300ms, 600ms, 1200ms
      timerRef.current = window.setTimeout(() => setAttempt(next), backoff);
      return;
    }
    reportImageFailure({
      url: originalImageFromProxy(src),
      reason: classifyFailure(src),
      attempts: attempt + 1,
      timestamp: Date.now(),
      context,
    });
    setFailed(true);
    setRetrying(false);
  };

  const handleLoad = () => {
    setLoaded(true);
    setRetrying(false);
  };

  const Spinner = () => (
    <span
      aria-hidden="true"
      style={{
        width: 14,
        height: 14,
        border: `2px solid ${goldColor}`,
        borderTopColor: "transparent",
        borderRadius: "50%",
        display: "inline-block",
        animation: "lol-spin 0.7s linear infinite",
        marginRight: 6,
        verticalAlign: "-2px",
      }}
    />
  );

  if (!src || failed) {
    return (
      <div
        data-image-state="fallback"
        className={`flex items-center justify-center w-full h-full ${className ?? ""}`}
        style={{ backgroundColor: bgColor, position: "relative" }}
        aria-label={alt}
      >
        <style>{`@keyframes lol-spin{to{transform:rotate(360deg)}}`}</style>
        <span
          style={{ color: goldColor, fontFamily: "Georgia, serif", letterSpacing: "3px" }}
          className="text-2xl font-bold"
        >
          {fallbackInitials}
        </span>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); doRetry(); }}
          data-testid="smart-image-retry"
          aria-label={`Retry image ${alt}`}
          style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.7)",
            border: `1px solid ${goldColor}`,
            color: goldColor,
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            padding: "5px 10px",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          {retrying ? <><Spinner />Retrying…</> : "↻ Retry"}
        </button>
      </div>
    );
  }

  // Cache-bust on retries only; first attempt keeps the original URL hot in caches.
  const finalSrc = attempt === 0 ? src : `${src}${src.includes("?") ? "&" : "?"}_r=${attempt}`;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }} className={className}>
      <style>{`@keyframes lol-spin{to{transform:rotate(360deg)}}`}</style>
      <img
        key={attempt}
        data-image-state={loaded ? "loaded" : "loading"}
        src={finalSrc}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={handleError}
        onLoad={handleLoad}
        className={imgClassName ?? className}
      />
      {retrying && !loaded && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.45)",
            color: goldColor,
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <Spinner />Retrying…
        </div>
      )}
      </div>
    );
};

export default SmartImage;