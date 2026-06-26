import { useEffect, useRef, useState } from "react";
import { classifyFailure, reportImageFailure } from "@/lib/imageProxy";

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
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setAttempt(0);
    setFailed(false);
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current); };
  }, [src]);

  const handleError = () => {
    if (attempt < maxRetries) {
      const next = attempt + 1;
      const backoff = 300 * Math.pow(2, attempt); // 300ms, 600ms, 1200ms
      timerRef.current = window.setTimeout(() => setAttempt(next), backoff);
      return;
    }
    reportImageFailure({
      url: src,
      reason: classifyFailure(src),
      attempts: attempt + 1,
      timestamp: Date.now(),
      context,
    });
    setFailed(true);
  };

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center w-full h-full ${className ?? ""}`}
        style={{ backgroundColor: bgColor }}
        aria-label={alt}
      >
        <span
          style={{ color: goldColor, fontFamily: "Georgia, serif", letterSpacing: "3px" }}
          className="text-2xl font-bold"
        >
          {fallbackInitials}
        </span>
      </div>
    );
  }

  // Cache-bust on retries only; first attempt keeps the original URL hot in caches.
  const finalSrc = attempt === 0 ? src : `${src}${src.includes("?") ? "&" : "?"}_r=${attempt}`;

  return (
    <img
      key={attempt}
      src={finalSrc}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={handleError}
      className={imgClassName ?? className}
    />
  );
};

export default SmartImage;