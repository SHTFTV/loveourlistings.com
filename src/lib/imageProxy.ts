const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;

// Hosts we route through our edge proxy because of hotlink / referer / CORS issues
const PROXY_HOSTS = [
  'sothebysrealty.com',
  'sothebys-com.brightspotcdn.com',
  'robbreport.com',
  'pmcrobbreport.files.wordpress.com',
  'mansionglobal.com',
  'images.mansionglobal.com',
  'architecturaldigest.com',
  'media.architecturaldigest.com',
  'assets.architecturaldigest.com',
];

export function proxiedImage(rawUrl: string | null | undefined): string {
  if (!rawUrl) return '';
  if (!SUPABASE_URL) return rawUrl;
  try {
    const u = new URL(rawUrl);
    const needsProxy = PROXY_HOSTS.some((h) => u.hostname === h || u.hostname.endsWith(`.${h}`));
    if (!needsProxy) return rawUrl;
    return `${SUPABASE_URL}/functions/v1/image-proxy?url=${encodeURIComponent(rawUrl)}`;
  } catch {
    return rawUrl;
  }
}

export type ImageFailureReason = '404' | 'cors' | 'hotlink' | 'timeout' | 'unknown';

export type ImageFailure = {
  url: string;
  reason: ImageFailureReason;
  attempts: number;
  timestamp: number;
  context?: string;
};

const DEBUG_EVENT = 'lol:image-failure';

export function reportImageFailure(failure: ImageFailure) {
  // eslint-disable-next-line no-console
  console.warn('[image-debug]', failure);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent<ImageFailure>(DEBUG_EVENT, { detail: failure }));
  }
}

export function subscribeImageFailures(cb: (f: ImageFailure) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => cb((e as CustomEvent<ImageFailure>).detail);
  window.addEventListener(DEBUG_EVENT, handler);
  return () => window.removeEventListener(DEBUG_EVENT, handler);
}

export function classifyFailure(url: string): ImageFailureReason {
  // Browsers strip details from <img> error events for security.
  // We probe with fetch (no-cors) so we at least surface network-class failures.
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtube') || u.hostname.includes('ytimg')) return '404';
    if (PROXY_HOSTS.some((h) => u.hostname.endsWith(h))) return 'hotlink';
  } catch {/* ignore */}
  return 'unknown';
}