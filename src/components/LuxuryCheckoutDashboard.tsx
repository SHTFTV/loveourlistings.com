import React, { useState, useMemo } from 'react';
import { Shield, CheckCircle, Layers, Radio, Video, Eye, ArrowRight, Database, AlertTriangle } from 'lucide-react';

interface PricingTier {
  popLimit: number;
  displayText: string;
  slots: number;
  basePrice: number;
}

const PRICING_MATRIX: PricingTier[] = [
  { popLimit: 10000, displayText: "10,000 Pop", slots: 3, basePrice: 10 },
  { popLimit: 20000, displayText: "20,000 Pop", slots: 3, basePrice: 10 },
  { popLimit: 100000, displayText: "100,000 Pop", slots: 3, basePrice: 10 },
  { popLimit: 250000, displayText: "250,000 Pop", slots: 4, basePrice: 10 },
  { popLimit: 400000, displayText: "400,000 Pop", slots: 5, basePrice: 10 },
  { popLimit: 500000, displayText: "500,000 Pop", slots: 5, basePrice: 10 },
  { popLimit: 600000, displayText: "600,000 Pop", slots: 6, basePrice: 10 },
  { popLimit: 700000, displayText: "700,000 Pop", slots: 7, basePrice: 10 },
  { popLimit: 800000, displayText: "800,000 Pop", slots: 8, basePrice: 10 },
  { popLimit: 900000, displayText: "900,000 Pop", slots: 9, basePrice: 10 },
  { popLimit: 1000000, displayText: "1,000,000 Pop", slots: 10, basePrice: 10 },
  { popLimit: 2000000, displayText: "2,000,000 Pop", slots: 10, basePrice: 20 },
  { popLimit: 3000000, displayText: "3,000,000 Pop", slots: 10, basePrice: 30 },
  { popLimit: 4000000, displayText: "4,000,000 Pop", slots: 10, basePrice: 40 },
  { popLimit: 5000000, displayText: "5,000,000 Pop", slots: 10, basePrice: 50 },
  { popLimit: 6000000, displayText: "6,000,000 Pop", slots: 10, basePrice: 60 },
  { popLimit: 7000000, displayText: "7,000,000 Pop", slots: 10, basePrice: 70 },
  { popLimit: 8000000, displayText: "8,000,000 Pop", slots: 10, basePrice: 80 },
  { popLimit: 9000000, displayText: "9,000,000 Pop", slots: 10, basePrice: 90 },
  { popLimit: 10000000, displayText: "10,000,000 Pop", slots: 10, basePrice: 100 },
  { popLimit: 15000000, displayText: "15,000,000 Pop", slots: 10, basePrice: 150 },
  { popLimit: 20000000, displayText: "20,000,000 Pop", slots: 10, basePrice: 200 },
  { popLimit: 30000000, displayText: "30,000,000 Pop", slots: 10, basePrice: 300 },
];

const HARDCODED_FALLBACK_BLOG = Array.from({ length: 16 }, (_, i) => ({
  id: `fallback-post-${i + 1}`,
  title: `High-End Residential Architecture Developments & Luxury Design Trends — Phase ${i + 1}`,
  excerpt: `Analyzing spatial frameworks, premium building materials, and micro-market scaling strategies across modern Pacific Northwest luxury estates.`,
  date: "June 26, 2026",
  category: "Market Intelligence",
  readTime: "4 min read",
}));

export default function LuxuryCheckoutDashboard() {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(2);
  const [upgrades, setUpgrades] = useState({
    guestPost: false,
    editorialFeature: false,
    realtorProfile: false,
    homepageBanner: false,
    mainBlogPage: false,
    networkCirculation: false,
    lolPackage: false,
  });
  const [talcCount, setTalcCount] = useState<number>(0);
  const [eyeSpyrCount, setEyeSpyrCount] = useState<number>(0);
  const [territoryLock, setTerritoryLock] = useState<boolean>(false);
  const [backlinkPack, setBacklinkPack] = useState<boolean>(false);

  const activeTier = PRICING_MATRIX[selectedTierIndex];

  const checkoutTotals = useMemo(() => {
    const monthlyBase = activeTier.basePrice;
    let monthlyAddons = 0;
    let oneTimeFees = 0;
    if (upgrades.guestPost) monthlyAddons += 10;
    if (upgrades.editorialFeature) monthlyAddons += 10;
    if (upgrades.realtorProfile) monthlyAddons += 10;
    if (upgrades.homepageBanner) monthlyAddons += 10;
    if (upgrades.mainBlogPage) monthlyAddons += 10;
    if (upgrades.networkCirculation) monthlyAddons += 10;
    if (upgrades.lolPackage) oneTimeFees += 159;
    oneTimeFees += talcCount * 10;
    oneTimeFees += eyeSpyrCount * 2;
    let territoryLockFee = 0;
    if (territoryLock) territoryLockFee = activeTier.basePrice * 0.5;
    if (backlinkPack) oneTimeFees += 25;
    const totalMonthlyCombined = monthlyBase + monthlyAddons + territoryLockFee;
    return { basePrice: monthlyBase, territoryLockFee, monthlyAddons, oneTimeFees, totalMonthlyCombined };
  }, [activeTier, upgrades, talcCount, eyeSpyrCount, territoryLock, backlinkPack]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased p-4 md:p-8 selection:bg-teal-500 selection:text-slate-950">
      <header className="max-w-7xl mx-auto mb-8 border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-teal-400 mb-1">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Industry Army System Stack // LoveOur Listings
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Programmatic Territory Lock Portal</h1>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-400">
          SYS STATUS: <span className="text-emerald-400 font-bold">ACTIVE</span> | DNS: <span className="text-teal-400">150+ DOMAINS ROUTED</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-teal-400" />
                1. Select Target Market Population Tier
              </h2>
              <span className="text-xs px-2.5 py-1 bg-slate-800 rounded text-slate-400 font-mono border border-slate-700">Hardcoded Node Sync</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Base slot pricing is locked at <span className="text-white font-semibold">$10.00/mo</span> for all markets under 1,000,000 population.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[290px] overflow-y-auto pr-2">
              {PRICING_MATRIX.map((tier, idx) => {
                const isSelected = selectedTierIndex === idx;
                return (
                  <button key={tier.popLimit} type="button" onClick={() => setSelectedTierIndex(idx)}
                    className={`text-left p-3 rounded-lg border transition-all flex flex-col justify-between ${isSelected ? 'bg-teal-950/40 border-teal-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.15)]' : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'}`}>
                    <div className="font-mono text-sm font-bold flex items-center justify-between w-full">
                      <span>{tier.displayText}</span>
                      {isSelected && <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />}
                    </div>
                    <div className="mt-2 flex justify-between items-center text-xs w-full text-slate-400">
                      <span>Slots: <strong className="text-slate-200">{tier.slots}</strong></span>
                      <span className={`font-bold font-mono ${isSelected ? 'text-teal-400' : 'text-slate-300'}`}>${tier.basePrice}/mo</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal-400" />
              2. Interactive Upgrades Matrix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {([
                ['guestPost', 'Guest Post Placement', '+ $10.00 / month'],
                ['editorialFeature', 'Editorial Feature Post', '+ $10.00 / month'],
                ['realtorProfile', 'SEO Realtor Profile Page', '+ $10.00 / month'],
                ['homepageBanner', 'Pin to Homepage Banner', '+ $10.00 / month'],
                ['mainBlogPage', 'Pin to Main Editorial Blog Page', '+ $10.00 / month'],
                ['networkCirculation', 'Network Circulation Bump', 'Syndicate across 150+ domains // + $10.00 / mo'],
              ] as const).map(([key, label, sub]) => (
                <label key={key} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer select-none transition-colors ${upgrades[key] ? 'border-slate-700' : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-800'}`}>
                  <input type="checkbox" checked={upgrades[key]} onChange={(e) => setUpgrades({ ...upgrades, [key]: e.target.checked })}
                    className="mt-1 rounded border-slate-700 text-teal-500 focus:ring-teal-500 focus:ring-offset-slate-900 bg-slate-950" />
                  <div>
                    <span className="block text-sm font-medium text-slate-200">{label}</span>
                    <span className="text-xs text-slate-400 font-mono">{sub}</span>
                  </div>
                </label>
              ))}
            </div>

            <div className="pt-2">
              <label className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer select-none transition-all ${upgrades.lolPackage ? 'bg-emerald-950/20 border-emerald-500/60 text-white' : 'bg-slate-950 border-slate-800 text-slate-300'}`}>
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked={upgrades.lolPackage} onChange={(e) => setUpgrades({ ...upgrades, lolPackage: e.target.checked })}
                    className="rounded border-slate-700 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900 bg-slate-950 h-4 w-4" />
                  <div>
                    <span className="text-sm font-bold tracking-wide block">LoveOur Listings One-Time Premium Feature Package</span>
                    <span className="text-xs text-slate-400">Immediate master placement lock across directory.</span>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold text-emerald-400 shrink-0 ml-4">$159.00 flat</span>
              </label>
            </div>

            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800/60 space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">Pay-As-You-Go Micro-Purchases</h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-3">
                <div className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-blue-400" />
                  <div>
                    <span className="text-sm font-medium block text-slate-200">TALC.tv Visual Blast System</span>
                    <span className="text-xs text-slate-400">Multi-platform programmatic streaming distribution</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono ml-auto sm:ml-0">
                  <span className="text-xs text-slate-500">$10.00/post</span>
                  <div className="flex items-center bg-slate-900 rounded border border-slate-700">
                    <button type="button" onClick={() => setTalcCount(Math.max(0, talcCount - 1))} className="px-2 py-0.5 hover:bg-slate-800 text-slate-400">-</button>
                    <span className="px-3 text-sm text-white font-bold">{talcCount}</span>
                    <button type="button" onClick={() => setTalcCount(talcCount + 1)} className="px-2 py-0.5 hover:bg-slate-800 text-slate-400">+</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2.5">
                  <Eye className="w-4 h-4 text-purple-400" />
                  <div>
                    <span className="text-sm font-medium block text-slate-200">EyeSpyr Hall Visualizer Renders</span>
                    <span className="text-xs text-slate-400">AI material safety / jobsite auditor image generator</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono ml-auto sm:ml-0">
                  <span className="text-xs text-slate-500">$2.00/render</span>
                  <div className="flex items-center bg-slate-900 rounded border border-slate-700">
                    <button type="button" onClick={() => setEyeSpyrCount(Math.max(0, eyeSpyrCount - 1))} className="px-2 py-0.5 hover:bg-slate-800 text-slate-400">-</button>
                    <span className="px-3 text-sm text-white font-bold">{eyeSpyrCount}</span>
                    <button type="button" onClick={() => setEyeSpyrCount(eyeSpyrCount + 1)} className="px-2 py-0.5 hover:bg-slate-800 text-slate-400">+</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Radio className="w-5 h-5 text-teal-400" />
              3. Territory Locks & Live Toggles Panel
            </h2>
            <div className="space-y-3">
              <button type="button" onClick={() => setTerritoryLock(!territoryLock)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${territoryLock ? 'bg-amber-950/20 border-amber-500/60 text-white shadow-lg' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'}`}>
                <div>
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-200 tracking-wide">
                    <Shield className={`w-4 h-4 ${territoryLock ? 'text-amber-400 animate-pulse' : 'text-slate-500'}`} />
                    POSITION #1 ABSOLUTE TERRITORY LOCK
                  </div>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl">Blocks competitor overlays. Hardcodes your listing at top of the matrix.</p>
                </div>
                <div className="text-right font-mono shrink-0">
                  <div className="text-sm font-bold text-amber-400">+${(activeTier.basePrice * 0.5).toFixed(2)}/mo</div>
                  <div className="text-[10px] text-slate-500">(Base Price × 50%)</div>
                </div>
              </button>
              <button type="button" onClick={() => setBacklinkPack(!backlinkPack)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${backlinkPack ? 'bg-blue-950/20 border-blue-500/60 text-white shadow-lg' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'}`}>
                <div>
                  <div className="font-bold text-sm text-slate-200 tracking-wide flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />
                    HIGH-AUTHORITY BACKLINK PACK
                  </div>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl">One-time backlink injection across SEO index profiles.</p>
                </div>
                <div className="font-mono text-sm font-bold text-blue-400 shrink-0">+$25.00 <span className="text-[10px] text-slate-500 font-normal">one-time</span></div>
              </button>
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-sm font-mono tracking-wider font-bold text-slate-300 uppercase flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Stability Layer: Local Core Engine Fallback
              </h2>
              <span className="text-[10px] px-2 py-0.5 bg-rose-950 border border-rose-800 rounded text-rose-300 font-mono">CORS FETCH BLOCK PROTECTION</span>
            </div>
            <p className="text-xs text-slate-400">
              External RSS stream disconnected. Auto-rendered the hardcoded <strong>16-post internal luxury authority blog matrix</strong> below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[220px] overflow-y-auto pr-1 text-xs">
              {HARDCODED_FALLBACK_BLOG.map((post) => (
                <div key={post.id} className="p-3 bg-slate-950 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex justify-between text-[10px] font-mono text-teal-400 mb-1">
                    <span>{post.category}</span>
                    <span className="text-slate-500">{post.readTime}</span>
                  </div>
                  <h4 className="font-bold text-slate-200 line-clamp-1 mb-1">{post.title}</h4>
                  <p className="text-slate-400 line-clamp-2 text-[11px] leading-relaxed">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-5 xl:col-span-4">
          <div className="sticky top-6 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl space-y-6">
            <div>
              <h2 className="text-xl font-black text-white tracking-tight">Unified Checkout Block</h2>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Real-time Node Computations</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 border-b border-slate-900 pb-2 flex justify-between">
                <span>PARAMETER DATA NODE</span>
                <span className="text-teal-400 font-bold">LOCKED</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-slate-300">Base Territory:</span>
                <span className="font-mono text-sm text-slate-200 font-bold">{activeTier.displayText}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-slate-300">Available Slots:</span>
                <span className="font-mono text-sm text-slate-200 font-bold">{activeTier.slots}</span>
              </div>
              <hr className="border-slate-900" />
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Base Rate:</span>
                  <span className="font-mono text-slate-200">${checkoutTotals.basePrice.toFixed(2)}/mo</span>
                </div>
                {checkoutTotals.territoryLockFee > 0 && (
                  <div className="flex justify-between text-slate-400">
                    <span>Pos #1 Lock Fee:</span>
                    <span className="font-mono text-amber-400">+${checkoutTotals.territoryLockFee.toFixed(2)}/mo</span>
                  </div>
                )}
                {checkoutTotals.monthlyAddons > 0 && (
                  <div className="flex justify-between text-slate-400">
                    <span>Matrix Add-ons:</span>
                    <span className="font-mono text-slate-200">+${checkoutTotals.monthlyAddons.toFixed(2)}/mo</span>
                  </div>
                )}
                {checkoutTotals.oneTimeFees > 0 && (
                  <div className="flex justify-between text-slate-400">
                    <span>One-Time/Micro-Fees:</span>
                    <span className="font-mono text-teal-400">${checkoutTotals.oneTimeFees.toFixed(2)} flat</span>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="bg-teal-950/20 border border-teal-500/30 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold font-mono tracking-wide text-teal-400 block uppercase">Combined Subscription</span>
                  <span className="text-[10px] text-slate-400">Calculated billing cycle</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black font-mono text-white">${checkoutTotals.totalMonthlyCombined.toFixed(2)}</span>
                  <span className="text-xs text-slate-400 font-mono block">/ month</span>
                </div>
              </div>
              {checkoutTotals.oneTimeFees > 0 && (
                <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">Due Immediately (One-Time):</span>
                  <span className="font-mono font-bold text-white">${checkoutTotals.oneTimeFees.toFixed(2)}</span>
                </div>
              )}
            </div>
            <button type="button"
              onClick={() => alert(`Payload Dispatched to PayPal Endpoint!\nMonthly: $${checkoutTotals.totalMonthlyCombined.toFixed(2)}\nOne-Time: $${checkoutTotals.oneTimeFees.toFixed(2)}\nMetadata: locked-tier-${activeTier.popLimit}`)}
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-4 px-4 rounded-xl shadow-[0_4px_20px_rgba(20,184,166,0.3)] transition-all flex items-center justify-center gap-2 group tracking-wide text-sm uppercase">
              Lock Selected Territory Node
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="text-center">
              <span className="text-[10px] font-mono text-slate-500 inline-flex items-center gap-1">
                <Shield className="w-3 h-3" /> Secure Handshake via Supabase Webhook Endpoints
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}