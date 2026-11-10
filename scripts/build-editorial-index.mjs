import fs from 'node:fs';
import path from 'node:path';
import {approvedSourcePhoto} from './source-photo.mjs';
const root=process.cwd();
const readJSON=(p,d={})=>fs.existsSync(p)?JSON.parse(fs.readFileSync(p,'utf8')):d;
const decode=s=>(s||'').replace(/\\u([0-9a-f]{4})/gi,(m,h)=>{const n=parseInt(h,16);return n>=0x80?String.fromCharCode(n):m}).replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const meta=(html,key)=>decode(html.match(new RegExp('<meta[^>]+(?:name|property)="'+key+'"[^>]+content="([^"]*)"','i'))?.[1]);
const prior=readJSON(path.join(root,'operations/prior-posts.json'),[]);
const manifest=readJSON(path.join(root,'public/journal/published.json'),[]);
const media=new Map(manifest.map(x=>[x.slug,x]));
const pipeline=new Map(readJSON(path.join(root,'operations/publisher-state.json'),{articles:[]}).articles.map(x=>[x.slug,x]));
const oldSources=new Map(prior.map(x=>[x.slug,x.sourceUrls]));
// Explicit editorial taxonomy, grounded in the existing property features.
const extra={
 'grant-ranch-oklahoma-working-land':['acreage'],
 'muddy-creek-ranch-working-map':['acreage'],
 'red-rock-ranch-oklahoma-working-land':['acreage'],
 'rooi-els-oceanfront-courtyard':['beach-properties'],
 'te-whau-waiheke-island-home':['beach-properties'],
 'black-point-honolulu-oceanfront':['beach-properties'],
 'diamond-head-oceanfront-connected-rooms':['beach-properties'],
};
const knownPrimary={'the-pod-severna-park-waterfront':'waterfront','hanapepe-loop-oahu-island-home':'waterfront','diamond-head-oceanfront-connected-rooms':'waterfront'};
const articles=[];
for(const dir of fs.readdirSync(path.join(root,'public/journal'),{withFileTypes:true}).filter(x=>x.isDirectory())){
 const file=path.join(root,'public/journal',dir.name,'index.html');if(!fs.existsSync(file))continue;
 const html=fs.readFileSync(file,'utf8'),slug=dir.name,record=media.get(slug),article=html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/i)?.[1]||html;
 const collection=record?.collection||article.match(/href="\/collections\/([a-z-]+)"[^>]*>Explore the/i)?.[1]||knownPrimary[slug];
 if(!collection)throw new Error('Missing reviewed taxonomy for '+slug);
 const publishedAt=html.match(/"datePublished"\s*:\s*"([^"]+)"/)?.[1]||prior.find(x=>x.slug===slug)?.datePublished;
 if(!publishedAt)throw new Error('Missing original publication date for '+slug);
 const title=decode(article.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g,''));
 const sourceUrls=oldSources.get(slug)||(pipeline.get(slug)?.source?.url?[pipeline.get(slug).source.url]:[]);
 const sourceImage=record?.sourceImage||pipeline.get(slug)?.sourceImage;
 const sourceDerived=sourceUrls.length>0||slug.startsWith('we-love-');
 const approved=Boolean(approvedSourcePhoto(sourceImage,sourceUrls));
 const figure=article.match(/<figure\b[^>]*>([\s\S]*?)<\/figure>/i)?.[1]||'';
 const originalImage=figure.match(/<img[^>]+src="([^"]+)"/)?.[1];
 const image=approved?sourceImage.imageUrl:!sourceDerived?originalImage||null:null;
 const watch=article.match(/https:\/\/(?:www\.)?youtube\.com\/watch\?v=[\w-]+/)?.[0]||((article.match(/youtube\.com\/embed\/([\w-]+)/)?.[1])? 'https://www.youtube.com/watch?v='+article.match(/youtube\.com\/embed\/([\w-]+)/)[1]:null);
 const caption=decode(figure.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i)?.[1].replace(/<[^>]+>/g,'')||'');
 const canonical=html.match(/rel="canonical"[^>]+href="https:\/\/(?:www\.)?loveourlistings\.com([^"#]+)"/)?.[1]||'/journal/'+slug+'/';
 articles.push({slug,title,deck:meta(html,'description'),publishedAt,dateLabel:new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:publishedAt.length===10?'UTC':'America/Vancouver'}).format(new Date(publishedAt)),collection,collections:[...new Set([collection,...(extra[slug]||[])])],canonicalPath:canonical,image,imageAlt:approved?(sourceImage.sourceImageAlt||title):caption,imageCredit:approved?sourceImage.credit:caption,watchUrl:watch,sourceDerived,sourceImageStatus:approved?'approved':sourceDerived?'not-verified':'original-editorial',tourCredit:watch?(caption.match(/Original film: ([^.]+)\./)?.[1]||caption.match(/Original listing tour from ([^,]+),/)?.[1]||'Original publisher tour'):null,sourceImageEvidence:approved?sourceImage.rightsEvidence:null});
}
articles.sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt));
fs.mkdirSync(path.join(root,'src/data'),{recursive:true});
fs.writeFileSync(path.join(root,'src/data/articleIndex.json'),JSON.stringify(articles,null,2)+'\n');
const slugs=['waterfront','mansions','penthouses','ranches','acreage','beach-properties'];
const preferred={acreage:'grant-ranch-oklahoma-working-land','beach-properties':'rooi-els-oceanfront-courtyard'};
const coverage=slugs.map(collection=>{const suitable=articles.filter(a=>a.collections.includes(collection));if(!suitable.length)throw new Error('No genuine existing feature for '+collection);const a=suitable.find(x=>x.slug===preferred[collection])||suitable[0];return {collection,articleSlug:a.slug,title:a.title,publishedAt:a.publishedAt,permittedPhoto:a.sourceImageStatus==='approved',sourceImageStatus:a.sourceImageStatus,articleCount:suitable.length,selection:'Existing genuine suitable feature; retain original publication date, never claim it is newly published today'};});
fs.mkdirSync(path.join(root,'operations'),{recursive:true});fs.writeFileSync(path.join(root,'operations/seo-category-coverage.json'),JSON.stringify({generatedAt:new Date().toISOString(),articleCount:articles.length,collections:coverage},null,2)+'\n');
console.log('Built editorial index:',articles.length,'existing articles and6genuine category features; permitted photos:',coverage.filter(x=>x.permittedPhoto).length);
