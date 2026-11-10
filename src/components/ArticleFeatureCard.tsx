import articleIndex from '../data/articleIndex.json';
import './editorial-card.css';
export type FeatureArticle = typeof articleIndex[number];
export function ArticleFeatureCard({article:a,large=false}:{article:FeatureArticle;large?:boolean}){
 return <article className={'lol-story-card lol-article-feature'+(large?' is-lead':'')} data-article-slug={a.slug}>
  {a.image&&<a className="lol-story-image" href={a.canonicalPath}><img src={a.image} alt={a.imageAlt||a.title} width="1200" height="700" loading="lazy"/></a>}
  <div className="lol-story-card-copy"><p className="lol-mag-kicker">{a.collection.replaceAll('-',' ')} / THE EDIT</p><h3><a href={a.canonicalPath}>{a.title}</a></h3><p>{a.deck}</p><time dateTime={a.publishedAt}>{a.dateLabel}</time>
   {a.image&&a.imageCredit&&<p className="lol-listing-photo-credit">{a.imageCredit}</p>}
   {a.watchUrl&&a.tourCredit&&<p className="lol-listing-photo-credit">Original tour: {a.tourCredit}</p>}
   <div className="lol-article-actions"><a href={a.canonicalPath}>Read the story ↗</a>{a.watchUrl&&<a href={a.watchUrl} target="_blank" rel="noopener noreferrer">Watch the original tour ↗</a>}</div>
  </div>
 </article>;
}
export function CollectionFeatures({collection,all=false}:{collection:string;all?:boolean}){
 const choices=articleIndex.filter(a=>a.collections.includes(collection));
 const preferred=collection==='acreage'?'grant-ranch-oklahoma-working-land':collection==='beach-properties'?'rooi-els-oceanfront-courtyard':null;
 const lead=choices.find(a=>a.slug===preferred)||choices[0];
 if(!lead)return null;
 return <section className="lol-collection-features" data-collection-feature={collection} aria-label={collection.replaceAll('-',' ')+' featured articles'}><div className="lol-mag-section-heading"><div><p className="lol-mag-kicker">FROM THE MAGAZINE</p><h3>{all?'Stories in this collection':'A home worth a closer look.'}</h3></div><a className="lol-mag-textlink" href={'/collections/'+collection}>Explore the collection ↗</a></div><div className={all?'lol-mag-three':'lol-collection-feature-card'}>{(all?choices:[lead]).map(a=><ArticleFeatureCard key={a.slug} article={a}/>)}</div></section>;
}
