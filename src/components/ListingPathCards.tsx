import { ArrowUpRight } from 'lucide-react';
const estate = '/images/love-estate-card-v3.webp';
const collection = '/images/love-journal-card-v3.webp';
const brand = '/images/love-agent-card-v3.webp';

const paths = [
  { number: '01', label: 'THE PLACES', title: 'Find your place.', text: 'Explore cities, coastlines and communities through our market directory.', image: estate, alt: 'Estate and garden in warm evening light', href: '/realtors', action: 'Discover the markets' },
  { number: '02', label: 'THE PERSPECTIVE', title: 'See the story.', text: 'Property, design and the people shaping the luxury conversation.', image: collection, alt: 'Love Our Listings heart-sign artwork with waterfront home concepts', href: '/#journal', action: 'Read the journal' },
  { number: '03', label: 'THE OPPORTUNITY', title: 'Make your mark.', text: 'Explore editorial and brand opportunities for your real estate business.', image: brand, alt: 'Love Our Listings brand concept with an agent, estate and heart-shaped sign', href: '/pricing', action: 'Explore agent opportunities' },
];
const ListingPathCards = () => <section id="discover" className="lol-discover" aria-labelledby="discover-heading"><div className="lol-section-heading"><div><p className="lol-eyebrow">A DIFFERENT WAY IN</p><h2 id="discover-heading">Where would you<br/><em>like to begin?</em></h2></div><p>For the home you imagine.<br/>For the business you are building.</p></div><div className="lol-path-grid">{paths.map(path => <a className="lol-path-card" key={path.number} href={path.href}><figure><img src={path.image} alt={path.alt} loading="lazy"/><span>{path.number}</span></figure><div className="lol-path-copy"><p className="lol-eyebrow">{path.label}</p><h3>{path.title}</h3><p>{path.text}</p><strong>{path.action}<ArrowUpRight size={18}/></strong></div></a>)}</div><p className="lol-card-credit">Existing Love Our Listings editorial and brand artwork. Images illustrate a style and setting; they are not active property listings or agent endorsements.</p></section>;
export default ListingPathCards;
