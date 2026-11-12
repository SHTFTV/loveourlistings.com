import fs from 'node:fs';import crypto from 'node:crypto';import {execFileSync} from 'node:child_process';
const {chromium}=await import('/tmp/lol-visual/node_modules/playwright/index.mjs');
const root=process.cwd(),sotBytes=fs.readFileSync('operations/site-sop.json'),sop=JSON.parse(sotBytes),out='work/roles/visual';fs.mkdirSync(out,{recursive:true});
const report={schemaVersion:1,site:'loveourlistings.com',role:'visual',checkerSha256:crypto.createHash('sha256').update(fs.readFileSync(new URL(import.meta.url))).digest('hex'),checkedAt:new Date().toISOString(),runUrl:`https://github.com/SHTFTV/loveourlistings.com/actions/runs/${process.env.GITHUB_RUN_ID}`,trigger:process.env.GITHUB_EVENT_NAME,runtimeVerified:process.env.GITHUB_ACTIONS==='true',unattendedExecution:JSON.parse(fs.readFileSync('work/roles/automatic-origin.json')).verified,automaticOriginProof:JSON.parse(fs.readFileSync('work/roles/automatic-origin.json')),sotLoad:{version:sop.version,sha256:crypto.createHash('sha256').update(sotBytes).digest('hex'),sourceCommit:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),canonicalSource:'https://github.com/SHTFTV/loveourlistings.com/blob/main/operations/site-sop.json'},checks:[],findings:[],verified:false,status:'unknown',scope:'Actual Chromium desktop/phone rendering, loaded images/cards, DOM readability/overflow, metadata and screenshots. Does not grant the separate protected illustration QA approval.'};
let browser;
try{
 const manifest=await(await fetch('https://www.loveourlistings.com/journal/published.json')).json();const article=manifest[0];if(!article)throw Error('No actual published article manifest');report.article={slug:article.slug,publishedAt:article.publishedAt,image:article.image};
 browser=await chromium.launch();
 // A new feature must not make a known undersized archive image disappear from evidence.
 const archive=await browser.newPage();await archive.goto('https://www.loveourlistings.com/journal/',{waitUntil:'domcontentloaded',timeout:45000});
 report.archiveImageChecks=await archive.evaluate(async rows=>Promise.all(rows.map(async a=>{
  if(!a.image?.startsWith('/images/'))return {slug:a.slug,status:'invalid-local-image-reference'};
  const im=new Image();im.src=a.image;try{await Promise.race([im.decode(),new Promise((_,reject)=>setTimeout(()=>reject(Error('image-timeout')),12000))]);return {slug:a.slug,image:a.image,width:im.naturalWidth,height:im.naturalHeight,status:im.naturalWidth>=1600&&im.naturalHeight>=900?'passed':'native-below1600x900'};}catch{return {slug:a.slug,image:a.image,status:'image-load-failed'};}
 })),manifest.slice(0,200));await archive.close();for(const image of report.archiveImageChecks)if(image.status!=='passed')report.findings.push('published-archive/'+image.slug+': '+image.status);

 for(const viewport of [{name:'desktop',width:1440,height:1000},{name:'phone',width:390,height:844}]){
  const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,isMobile:viewport.name==='phone',hasTouch:viewport.name==='phone'});
  for(const [name,path] of [['home','/'],['journal','/journal/'],['article','/journal/'+article.slug+'/']]){
   const page=await context.newPage();const url='https://www.loveourlistings.com'+path;const check={page:name,url,viewport:viewport.name,width:viewport.width,height:viewport.height,findings:[]};
   try{
    const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000});check.http=response?.status();if(check.http!==200)check.findings.push('non-200-page');await page.waitForLoadState('networkidle',{timeout:10000}).catch(()=>{});await page.evaluate(()=>Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,10000))]));
    if(name==='home'){await page.screenshot({path:out+'/'+viewport.name+'-home-top.jpg',type:'jpeg',quality:70,animations:'disabled'});check.topScreenshot=viewport.name+'-home-top.jpg';}
    if(name!=='article'){const card=page.locator('.lol-story-card, main article').first();if(await card.count())await card.scrollIntoViewIfNeeded();}
    await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.filter(i=>{const r=i.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight;}).map(i=>i.decode().catch(()=>{}))));
    const m=await page.evaluate(()=>{
     const meta=(key)=>document.querySelector(`meta[property="${key}"],meta[name="${key}"]`)?.content||null;
     const visible=e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&r.bottom>0&&r.top<innerHeight;};
     return {title:document.title,h1:document.querySelector('h1')?.innerText,canonical:document.querySelector('link[rel="canonical"]')?.href,description:meta('description'),ogTitle:meta('og:title'),ogDescription:meta('og:description'),ogImage:meta('og:image'),twitterTitle:meta('twitter:title'),twitterDescription:meta('twitter:description'),twitterImage:meta('twitter:image'),favicon:document.querySelector('link[rel~="icon"]')?.href,overflow:document.documentElement.scrollWidth>innerWidth+2,visibleImages:[...document.images].filter(visible).map(i=>({src:i.currentSrc,alt:i.alt,native:[i.naturalWidth,i.naturalHeight],loaded:i.complete&&i.naturalWidth>0,rendered:[Math.round(i.width),Math.round(i.height)],fit:getComputedStyle(i).objectFit})),captionFontSizes:[...document.querySelectorAll('.lol-listing-photo-credit')].filter(visible).map(e=>parseFloat(getComputedStyle(e).fontSize)),bodyFontSizes:[...document.querySelectorAll('.lol-journal-body p:not(.lol-note), .lol-story-card-copy > p:not(.lol-mag-kicker):not(.lol-listing-photo-credit)')].filter(visible).map(e=>parseFloat(getComputedStyle(e).fontSize))};
    });check.metrics=m;
    if(m.overflow)check.findings.push('horizontal-overflow');if(!m.h1)check.findings.push('heading-missing');
    for(const key of ['title','canonical','description','ogTitle','ogDescription','ogImage','twitterTitle','twitterDescription','twitterImage','favicon'])if(!m[key])check.findings.push('missing-'+key);
    if(m.canonical!==url)check.findings.push('canonical-does-not-match-page');if(m.visibleImages.some(i=>!i.loaded))check.findings.push('visible-image-failed');if(!m.visibleImages.length)check.findings.push('no-loaded-visible-image');if(m.visibleImages.some(i=>i.src.includes('/images/source-properties/')&&i.fit==='fill'&&Math.abs(i.rendered[0]/i.rendered[1]-i.native[0]/i.native[1])>0.05))check.findings.push('visible-property-photo-distorted');if(m.bodyFontSizes.some(n=>n<14))check.findings.push('body-text-below14px');if(m.captionFontSizes.some(n=>n<12))check.findings.push('photo-credit-below12px');if(m.visibleImages.some(i=>i.src.includes('/images/source-properties/')&&(i.native[0]<1600||i.native[1]<900)))check.findings.push('visible-property-photo-native-below1600x900');
    if(name==='article'){
     const hero=page.locator('figure img[src="'+article.image+'"]').first();await hero.scrollIntoViewIfNeeded();await hero.evaluate(i=>i.decode());const h=await hero.evaluate(i=>({src:i.getAttribute('src'),width:i.naturalWidth,height:i.naturalHeight,alt:i.alt}));check.articleHero=h;if(h.src!==article.image||h.width<1600||h.height<900||!h.alt)check.findings.push('published-article-image-mismatch-or-quality');
     const body=await page.locator('body').innerText();if(!body.includes('Want to see your property here?'))check.findings.push('feature-CTA-missing');
    }
    const file=`${viewport.name}-${name}.jpg`;await page.screenshot({path:out+'/'+file,type:'jpeg',quality:70,animations:'disabled'});check.screenshot=file;check.screenshotSha256=crypto.createHash('sha256').update(fs.readFileSync(out+'/'+file)).digest('hex');
    if(name==='article'){
     const body=page.locator('.lol-journal-body section p').first();await body.scrollIntoViewIfNeeded();
     const fonts=await page.locator('.lol-journal-body section p').evaluateAll(ps=>ps.filter(p=>{const r=p.getBoundingClientRect();return r.height>0&&r.top<innerHeight&&r.bottom>0;}).map(p=>({fontSize:parseFloat(getComputedStyle(p).fontSize),lineHeight:getComputedStyle(p).lineHeight,textLength:p.innerText.length})));
     check.bodyTextMetrics=fonts;if(!fonts.length||fonts.some(p=>p.fontSize<14))check.findings.push('article-body-readability-missing-or-below14px');
     check.bodyScreenshot=viewport.name+'-article-body.jpg';await page.screenshot({path:out+'/'+check.bodyScreenshot,type:'jpeg',quality:70,animations:'disabled'});
    }

   }catch(e){check.findings.push('render-check-error:'+e.message.slice(0,180));}
   report.checks.push(check);for(const issue of check.findings)report.findings.push(`${viewport.name}/${name}: ${issue}`);await page.close();
  }await context.close();
 }
}catch(e){report.findings.push('browser-role-error:'+e.message.slice(0,180));}
finally{if(browser)await browser.close();report.verified=report.findings.length===0&&report.checks.length===6;report.status=report.verified?'passed':'failed';fs.writeFileSync(out+'/receipt.json',JSON.stringify(report,null,2));console.log(JSON.stringify({runUrl:report.runUrl,status:report.status,findings:report.findings}));}
