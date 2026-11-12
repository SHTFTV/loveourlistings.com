export function approvedOriginalIllustration(media,sourceUrls){
 if(media?.status!=='verified-original-illustration'||media.isIllustration!==true||media.releaseReady!==true||!['image','desktop','phone'].every(k=>media.visualQa?.[k]===true)||!media.imageUrl?.startsWith('/images/editorial-illustrations/')||media.width!==1600||media.height!==900||!/^[a-f0-9]{64}$/i.test(media.imageSha256||'')||media.label!=='Original illustration — not the property'||!media.credit?.toLowerCase().includes('not the property')||!sourceUrls.some(u=>u.replace(/\/$/,'')===media.sourceUrl?.replace(/\/$/,'')))return null;
 return media;
}
export function approvedSourcePhoto(media,sourceUrls,reviewed){
 if(media?.status!=='verified-public-source'||!media.imageUrl?.startsWith('/images/source-properties/')||!media.credit||!/^https:\/\//.test(media.originalImageUrl||'')||!/^[a-f0-9]{64}$/i.test(media.imageSha256||'')||media.width<480||media.height<250)return null;
 const key=u=>u?.replace(/\/$/,'');
 const direct=sourceUrls.some(u=>key(u)===key(media.sourceUrl));
 if(!direct){
  const r=reviewed?.record,s=reviewed?.source,m=r?.media;
  if(!m||!s||!r.reviewedAt||!r.reviewBasis||r.summaryHash!==s.summaryHash||(r.propertyId??null)!==(s.propertyId??null)||!sourceUrls.some(u=>key(u)===key(s.url))||key(media.pairedNewsSource)!==key(s.url)||media.sourceUrl!==m.sourceUrl||media.originalImageUrl!==m.originalImageUrl||media.originalWidth!==m.nativeWidth||media.originalHeight!==m.nativeHeight||media.width!==1600||media.height!==900||JSON.stringify(media.cropBox??null)!==JSON.stringify(m.cropBox??null)||!/^[a-f0-9]{64}$/i.test(media.originalImageSha256||'')||!/^[a-f0-9]{64}$/i.test(media.sourcePageSha256||''))return null;
  if(r.item&&key(r.item.url)!==key(s.url))return null;
  let width=media.originalWidth,height=media.originalHeight;
  if(m.cropBox){const [l,t,rr,b]=m.cropBox;if(m.cropBox.length!==4||!m.cropBox.every(Number.isInteger)||!(0<=l&&l<rr&&rr<=width&&0<=t&&t<b&&b<=height))return null;width=rr-l;height=b-t;}
  if(width<1600||height<900)return null;
 }
 if(/logo|favicon|placeholder|shutterstock|adobestock|istock/i.test(new URL(media.originalImageUrl).pathname))return null;
 return media;
}

