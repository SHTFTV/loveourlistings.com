import articleIndex from '../data/articleIndex.json';
import { ArticleFeatureCard } from './ArticleFeatureCard';
const sections=['waterfront','mansions','penthouses','ranches','acreage','beach-properties'];
function sourcePhotoCount(a:typeof articleIndex[number]){
 return Array.isArray(a.photos)?a.photos.length:a.image?1:0;
}
function fullestStory(collection:string){
 return articleIndex.filter(a=>a.collections.includes(collection)).reduce<typeof articleIndex[number]|undefined>((best,a)=>{
  if(!best)return a;
  const byCount=sourcePhotoCount(a)-sourcePhotoCount(best);
  if(byCount!==0)return byCount>0?a:best;
  return Date.parse(a.publishedAt)>Date.parse(best.publishedAt)?a:best;
 },undefined);
}
export function LatestPublished(){
 const newest=articleIndex[0];
 const stories=sections.map(fullestStory).filter((a):a is typeof articleIndex[number]=>Boolean(a));
 return <section className="lol-mag-section lol-daily-latest" aria-labelledby="latest-published-heading"><div className="lol-mag-section-heading"><div><p className="lol-mag-kicker">THE LATEST / INDEPENDENT EDITORIAL</p><h2 id="latest-published-heading">Fresh from the magazine.</h2></div><div><p>Latest article: <time dateTime={newest?.publishedAt}>{newest?.dateLabel}</time></p><a className="lol-mag-textlink" href="/journal/">All stories ↗</a></div></div><div className="lol-daily-grid">{stories.map(s=><ArticleFeatureCard article={s} key={s.slug}/>)}</div></section>;
}
