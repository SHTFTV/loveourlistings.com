import fs from 'node:fs';import path from 'node:path';
const root=process.cwd(),origin='https://www.loveourlistings.com';
const registry=JSON.parse(fs.readFileSync(path.join(root,'operations/property-media.json'),'utf8')).articles;
const esc=s=>String(s||'').replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
let count=0;
for(const [slug,m] of Object.entries(registry)){
 if(m.status!=='verified-public-source')continue;
 const file=path.join(root,'public/journal',slug,'index.html');if(!fs.existsSync(file))continue;
 let h=fs.readFileSync(file,'utf8');
 h=h.replace(/<!-- SOURCE_PROPERTY_HERO_START -->[\s\S]*?<!-- SOURCE_PROPERTY_HERO_END -->/g,'');
 // Remove only generated featured art from source-derived stories, keeping the original tour/body.
 h=h.replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi,f=>(/illustration|editorial fact card|conceptual|not a (?:listing|property) photograph/i.test(f)||f.includes(m.imageUrl))&&!/<iframe/i.test(f)?'':f);
 const hero='<!-- SOURCE_PROPERTY_HERO_START --><figure class="lol-source-property-hero" style="max-width:'+Math.min(1600,m.width)+'px"><div class="lol-source-media-brand"><img src="/images/love-logo-clean-v6.webp" alt="" width="20" height="26"><span>WE LOVE THIS LISTING</span></div><img src="'+esc(m.imageUrl)+'" alt="'+esc(m.sourceImageAlt||slug.replaceAll('-',' '))+'" width="'+m.width+'" height="'+m.height+'" style="width:100%;height:auto;object-fit:contain" fetchpriority="high"><figcaption><a href="'+esc(m.sourceUrl)+'" rel="noopener noreferrer">'+esc(m.credit)+(m.isTourPreview?' · Original tour preview':' · Property image source')+' ↗</a></figcaption></figure><!-- SOURCE_PROPERTY_HERO_END -->';
 // Article deck and original dateline stay before the photo when present.
 const bodyMarker=/<div class="lol-journal-body"/;
 if(bodyMarker.test(h))h=h.replace(bodyMarker,hero+'<div class="lol-journal-body"');
 else h=h.replace(/(<article\b[^>]*>[\s\S]*?<h1\b[^>]*>[\s\S]*?<\/h1>)/i,'$1'+hero);
 for(const key of ['og:image','twitter:image']){const re=new RegExp('<meta[^>]+(?:property|name)="'+key+'"[^>]*>','i');const tag='<meta '+(key==='og:image'?'property':'name')+'="'+key+'" content="'+origin+m.imageUrl+'">';h=re.test(h)?h.replace(re,tag):h.replace('</head>',tag+'</head>');}
 h=h.replace(/<meta[^>]+property="og:image:(?:width|height|type|alt)"[^>]*>/gi,'');
 h=h.replace(/<link[^>]+href="\/source-property-media.css"[^>]*>/g,'');
 h=h.replace('</head>','<meta property="og:image:width" content="'+m.width+'"><meta property="og:image:height" content="'+m.height+'"><link rel="stylesheet" href="/source-property-media.css"></head>');
 h=h.replace(/"image"\s*:\s*"[^"]+"/, '"image":"'+origin+m.imageUrl+'"');
 fs.writeFileSync(file,h);count++;
}
console.log('Applied exact-property headers with provenance:',count);
