export function approvedSourcePhoto(media,sourceUrls){
 if(media?.status!=='verified-public-source'||!media.imageUrl?.startsWith('/images/source-properties/')||!media.credit||!/^https:\/\//.test(media.originalImageUrl||'')||!/^[a-f0-9]{64}$/i.test(media.imageSha256||'')||media.width<480||media.height<250)return null;
 const key=u=>u?.replace(/\/$/,'');
 if(!sourceUrls.some(u=>key(u)===key(media.sourceUrl)))return null;
 if(/logo|favicon|placeholder|shutterstock|adobestock|istock/i.test(new URL(media.originalImageUrl).pathname))return null;
 return media;
}
