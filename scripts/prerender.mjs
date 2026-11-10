import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const root=process.cwd(),dist=path.join(root,'dist');
const {renderRoute,propertyCollections}=await import(pathToFileURL(path.join(root,'.seo-render/seo-render.js')).href);
const template=fs.readFileSync(path.join(dist,'index.html'),'utf8');
const articles=JSON.parse(fs.readFileSync(path.join(root,'src/data/articleIndex.json'),'utf8'));
const origin='https://www.loveourlistings.com';
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const graph={'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':origin+'/#organization',name:'Love Our Listings',url:origin+'/',logo:origin+'/images/love-logo-clean-v6.webp',description:'Independent luxury property and lifestyle editorial'},{'@type':'WebSite','@id':origin+'/#website',url:origin+'/',name:'Love Our Listings',alternateName:'LoveOurListings',publisher:{'@id':origin+'/#organization'}}]};
const ld=x=>'<script type="application/ld+json">'+JSON.stringify(x).replaceAll('<','\\u003c')+'</script>';
function setMeta(html,key,value,attr='name'){
 const pattern=new RegExp('<meta[^>]+'+attr+'="'+key+'"[^>]*>','i');const tag='<meta '+attr+'="'+key+'" content="'+escape(value)+'">';return pattern.test(html)?html.replace(pattern,tag):html.replace('</head>',tag+'</head>');
}
function document(html,{title,description,canonical,markup,extra}){
 html=html.replace(/<title>[\s\S]*?<\/title>/i,'<title>'+escape(title)+'</title>');html=setMeta(html,'description',description);html=setMeta(html,'og:title',title,'property');html=setMeta(html,'og:description',description,'property');html=setMeta(html,'og:url',canonical,'property');html=setMeta(html,'twitter:title',title);html=setMeta(html,'twitter:description',description);
 html=html.replace(/<link[^>]+rel="canonical"[^>]*>/i,'<link rel="canonical" href="'+canonical+'">');
 if(markup!==undefined)html=html.replace(/<div id="root">[\s\S]*?<\/div>\s*<\/body>/,'<div id="root">'+markup+'</div></body>');
 // Vite's empty root has no nested divs; scripts live in the head after bundling.
 if(markup!==undefined&&html.includes('<div id="root"></div>'))html=html.replace('<div id="root"></div>','<div id="root">'+markup+'</div>');
 html=html.replace('</head>',ld(graph)+(extra?ld(extra):'')+'<link rel="alternate" type="application/rss+xml" href="/journal/feed.xml" title="Love Our Listings journal"></head>');return html;
}
// Keep existing React-only city, country, listing and account routes operational.
fs.writeFileSync(path.join(dist,'spa.html'),template);
fs.writeFileSync(path.join(dist,'index.html'),document(template,{title:'Love Our Listings | Luxury Homes, People & Places',description:'Explore extraordinary homes, waterfront living, country estates, interesting people and thoughtful design in the Love Our Listings luxury property magazine.',canonical:origin+'/',markup:renderRoute('/')}));
for(const p of propertyCollections){
 const route='/collections/'+p.slug,canonical=origin+route;const related=articles.filter(a=>a.collections.includes(p.slug));
 const extra={'@context':'https://schema.org','@graph':[{'@type':'CollectionPage','@id':canonical+'#page',url:canonical,name:p.title+' & Luxury Property Guides | Love Our Listings',description:p.copy,isPartOf:{'@id':origin+'/#website'},mainEntity:{'@type':'ItemList',numberOfItems:related.length,itemListElement:related.map((a,i)=>({'@type':'ListItem',position:i+1,url:origin+a.canonicalPath,name:a.title}))}},{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Love Our Listings',item:origin+'/'},{'@type':'ListItem',position:2,name:p.title,item:canonical}]}]};
 const file=path.join(dist,route.slice(1),'index.html');fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,document(template,{title:p.title+' & Luxury Property Guides | Love Our Listings',description:p.copy,canonical,markup:renderRoute(route),extra}));
}
// Preserve every original static journal body/date/image decision; add brand and breadcrumb metadata only.
for(const a of articles){
 const file=path.join(dist,'journal',a.slug,'index.html');let html=fs.readFileSync(file,'utf8');
 html=html.replaceAll('https://loveourlistings.com','https://www.loveourlistings.com');
 // Repair literal escaped punctuation in visible legacy HTML without altering datePublished.
 html=html.replace(/\\u([0-9a-f]{4})/gi,(m,h)=>{const n=parseInt(h,16);return n>=0x80?String.fromCharCode(n):m});
 const breadcrumb={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Love Our Listings',item:origin+'/'},{'@type':'ListItem',position:2,name:a.collection.replaceAll('-',' '),item:origin+'/collections/'+a.collection},{'@type':'ListItem',position:3,name:a.title,item:origin+a.canonicalPath}]};
 html=html.replace('</head>',ld(graph)+ld(breadcrumb)+'</head>');fs.writeFileSync(file,html);
}
let sitemap=fs.readFileSync(path.join(dist,'sitemap.xml'),'utf8').replaceAll('https://loveourlistings.com','https://www.loveourlistings.com');
for(const p of propertyCollections){const url=origin+'/collections/'+p.slug;if(!sitemap.includes('<loc>'+url+'</loc>'))sitemap=sitemap.replace('</urlset>','<url><loc>'+url+'</loc></url></urlset>');}
fs.writeFileSync(path.join(dist,'sitemap.xml'),sitemap);
fs.writeFileSync(path.join(dist,'robots.txt'),'User-agent: *\nAllow: /\n\nSitemap: '+origin+'/sitemap.xml\n');
fs.writeFileSync(path.join(dist,'404.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>Page not found | Love Our Listings</title><link rel="stylesheet" href="/magazine-article-v1.css"></head><body><main><p>LOVE OUR LISTINGS</p><h1>Page not found</h1><p>The address may have changed. Explore the magazine or choose a collection.</p><a href="/">Return to Love Our Listings</a><nav>'+propertyCollections.map(p=>'<a href="/collections/'+p.slug+'">'+escape(p.title)+'</a>').join(' · ')+'</nav></main></body></html>');
console.log('Prerendered existing homepage and6collection routes; preserved',articles.length,'static journal articles; normalized canonical host and sitemap.');
