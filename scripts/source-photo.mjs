export function approvedSourcePhoto(media,sourceUrls){
 if(media?.status!=='approved'||!media.imageUrl||!media.credit||!/^https:\/\//.test(media.rightsEvidence||'')||!/^https:\/\//.test(media.imageUrl)||!/^[a-f0-9]{64}$/i.test(media.imageSha256||''))return null;
 const key=u=>u?.replace(/\/$/,'');
 if(!sourceUrls.some(u=>key(u)===key(media.sourceUrl)))return null;
 if(/logo|favicon|placeholder|default[-_]og/i.test(new URL(media.imageUrl).pathname))return null;
 return media;
}
