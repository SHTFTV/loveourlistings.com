import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
const siteLogo = '/images/love-logo-v4.webp';
import heroVideo from '@/assets/hero-video.mp4.asset.json';
import './listing-home.css';

const ListingHero = () => {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update(); preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (!video.current) return;
    if (paused || reducedMotion) video.current.pause();
    else void video.current.play().catch(() => setVideoFailed(true));
  }, [paused, reducedMotion]);
  // The original URL returns 404. Keep its source manifest for restoration,
  // and enable it only after the actual clip has been restored and checked.
  const media = heroVideo as { url: string; available?: boolean };
  const showVideo = media.available === true && !reducedMotion && !videoFailed;
  return <section className={`lol-hero${paused ? ' is-paused' : ''}`} aria-label="Love Our Listings introduction">
    <div className="lol-hero-media">
      <img src="/images/love-listings-hero-v3.webp" width="1672" height="941" fetchPriority="high" alt="Conceptual coastal estate at twilight with a red heart-shaped sign" />
      {showVideo && <video ref={video} autoPlay muted loop playsInline preload="metadata" poster="/images/love-listings-hero-v3.webp" src={media.url} onError={() => setVideoFailed(true)} aria-hidden="true" />}
    </div>
    <div className="lol-hero-shade" />
    <header className="lol-header">
      <a className="lol-brand" href="/" aria-label="Love Our Listings home"><img src={siteLogo} alt=""/><span>LOVE OUR LISTINGS<small>PROPERTY. PEOPLE. POSSIBILITY.</small></span></a>
      <nav aria-label="Main navigation"><a href="/realtors">Markets</a><a href="/celebrity" className="lol-extra-nav">The spotlight</a><a href="/#journal" className="lol-extra-nav">Journal</a><a className="lol-nav-apply" href="/pricing">For agents <ArrowUpRight size={14}/></a></nav>
    </header>
    <div className="lol-hero-copy"><p className="lol-eyebrow">EXTRAORDINARY PLACES. A MORE PERSONAL PERSPECTIVE.</p><h1>Remarkable homes.<br/><em>A story worth telling.</em></h1><p className="lol-hero-intro">The places that draw you in. The people who know them. Explore luxury markets, property stories and the world beyond the front door.</p><div className="lol-hero-actions"><a className="lol-button" href="/realtors">Explore the markets <ArrowUpRight size={18}/></a><a className="lol-text-link" href="/pricing">Give your brand a place here <span aria-hidden="true">→</span></a></div></div>
    <div className="lol-hero-bottom"><span>THE LOVE OUR LISTINGS EDIT</span><a href="#discover">Find your next chapter ↓</a><button onClick={() => setPaused(!paused)} aria-label={paused ? 'Resume hero motion' : 'Pause hero motion'}>{paused ? <Play size={13}/> : <Pause size={13}/>} {paused ? 'Resume motion' : 'Pause motion'}</button></div>
    <p className="lol-image-credit">AI-generated estate concept with our heart-sign motif. Illustrative brand scene; not a property offered for sale.</p>
  </section>;
};
export default ListingHero;
