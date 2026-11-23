import articleIndex from '../data/articleIndex.json';
import { ArticleFeatureCard } from './ArticleFeatureCard';
const sections=['waterfront','mansions','penthouses','ranches','acreage','beach-properties'];
export function LatestPublished(){
 const newest=articleIndex[0];
 const stories=sections.map(collection=>{
  const inSection=articleIndex.filter(a=>a.collections.includes(collection));
  return inSection.find(a=>a.photos.length>1)||inSection[0];
 }).filter((a):a is typeof articleIndex[number]=>Boolean(a));
 return <section className="lol-mag-section lol-daily-latest" aria-labelledby="latest-published-heading"><div className="lol-mag-section-heading"><div><p className="lol-mag-kicker">THE LATEST / INDEPENDENT EDITORIAL</p><h2 id="latest-published-heading">Fresh from the magazine.</h2></div><div><p>Latest article: <time dateTime={newest?.publishedAt}>{newest?.dateLabel}</time></p><a className="lol-mag-textlink" href="/journal/">All stories ↗</a></div></div><div className="lol-daily-grid">{stories.map(s=><ArticleFeatureCard article={s} key={s.slug}/>)}</div></section>;
}
