await import('./apply-property-media.mjs');
await import('./build-editorial-index.mjs');
import { build } from 'vite';
await build();
await build({build:{ssr:'src/seo-render.tsx',outDir:'.seo-render',emptyOutDir:true},ssr:{noExternal:['react-router-dom']}});
await import('./prerender.mjs');
