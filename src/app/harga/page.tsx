import React from "react";
import { individualDesign, kitDesign } from "@/data/pricing";

const kitDesignTop = kitDesign.filter(k => k.name.includes("Social") || k.name.includes("Ultimate") || k.name.includes("All-in-One") || k.name.includes("Starter"));
const kitDesignBottom = kitDesign.filter(k => !kitDesignTop.includes(k));

const kitIconMap: Record<string, string> = {
  "Starter Social Kit": "rocket",
  "Growth Social Kit": "chart",
  "Ultimate Grid Kit": "crown",
  "All-in-One Branding Suite": "star",
  "Essential Branding Kit": "briefcase",
  "YouTube Starter Kit": "youtube",
  "Event Branding Kit": "calendar",
  "Website Starter Kit": "monitor",
  "Micro-Influencer Media Kit": "user",
};

const kitBonusMap: Record<string, string> = {
  "Starter Social Kit": "Thank You Card",
  "Growth Social Kit": "Highlight Icon",
  "Ultimate Grid Kit": "Template Canva",
  "All-in-One Branding Suite": "Konsultasi 30 Menit",
};

const guaranteeItems = [
  { label: "Desain Profesional", icon: "pen" },
  { label: "Hasil Berkualitas", icon: "badge" },
  { label: "Harga Bersahabat", icon: "wallet" },
  { label: "Revisi Sampai Puas", icon: "refresh" },
];

// --- ICONS MAP ---
const iconAlias: Record<string, string> = {
  grid: "mobile", cover: "clapper", poster: "poster", logo: "pen",
  twibbon: "ribbon", video: "play", carousel: "carousel",
  catalog: "book", idcard: "id", certificate: "cert",
};

const iconMap: Record<string, React.ReactNode> = {
  mobile: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  clapper: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 8h20M6 4v4M10 4v4M14 4v4M18 4v4" /></svg>,
  poster: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>,
  pen: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 2l2.5 5.5L20 8.5l-4 4 1 6L12 15.5 7 18.5l1-6-4-4 5.5-1L12 2z" /></svg>,
  ribbon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 2l3 6 6 .5-4.5 4.5 1 6L12 16l-5.5 3 1-6L3 8.5 9 8l3-6z" /></svg>,
  play: <svg fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>,
  carousel: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M8 6V4h8v2M8 18v2h8v-2" /></svg>,
  book: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
  id: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="4" width="20" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M15 12h4M15 16h4M5 16h6" /></svg>,
  cert: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  rocket: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 2l3 6 6 .5-4.5 4.5 1 6L12 16l-5.5 3 1-6L3 8.5 9 8l3-6z" /></svg>,
  chart: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M3 3v18h18M7 14l5-5 4 4 5-5" /></svg>,
  crown: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M2 17L3 5l5 4 4-6 4 6 5-4 1 12H2z" /></svg>,
  star: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3 6 6 .5-4.5 4.5 1 6L12 16l-5.5 3 1-6L3 8.5 9 8l3-6z" /></svg>,
  briefcase: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>,
  youtube: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02V8.48L15.5 11.75l-5.75 3.27z"/></svg>,
  calendar: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
  monitor: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  user: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" /></svg>,
  badge: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  wallet: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12a2 2 0 002 2h14v-8H4z"/></svg>,
  refresh: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
};

export default function HargaPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans overflow-x-hidden text-gray-800 pb-20">
      
      {/* ============ HEADER SECTION ============ */}
      <section className="relative px-6 pt-16 pb-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="z-10 max-w-xl">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#0A2558] flex flex-col gap-2">
            <span>Harga</span>
            <span className="text-[#FFC700] italic font-medium relative w-fit">
              Terjangkau
              <svg className="absolute -bottom-2 -right-6 w-12 h-12 text-[#FFC700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M15 5l7 7-7 7" /></svg>
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 font-medium leading-relaxed">
            Desain profesional, <span className="text-[#0A2558] font-bold">hasil maksimal, harga bersahabat!</span><br />
            Paket fleksibel yang bisa disesuaikan dengan kebutuhan brand & bisnis kamu.
          </p>
        </div>

        {/* Sticky Note & Hand Doodle */}
        <div className="relative mt-10 md:mt-0 right-0 md:right-10 flex flex-col items-center">
          <div className="bg-[#FFE169] rotate-3 px-6 py-4 shadow-lg rounded-sm relative z-20 w-64 border border-yellow-300">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-sm opacity-90 -mt-5 -ml-12 rotate-[-5deg]" />
            <p className="text-[#0A2558] font-bold text-center leading-snug">
              Investasi kecil,<br />dampak besar untuk<br />brand kamu!
            </p>
            <svg className="absolute -bottom-6 -right-6 w-16 h-16 text-[#FFC700] -rotate-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 2l2.5 5.5L20 8.5l-4 4 1 6L12 15.5 7 18.5l1-6-4-4 5.5-1L12 2z" /></svg>
          </div>
          {/* Decorative Hand Doodle (Placeholder Shape) */}
          <svg className="hidden md:block absolute -top-10 -right-40 w-64 h-64 text-[#0A2558]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M150 20 Q120 40 100 80 T80 140" strokeDasharray="4 4" /><circle cx="80" cy="140" r="15" fill="#FFC700" stroke="none" /></svg>
        </div>
      </section>

      {/* ============ MAIN CONTENT LAYOUT ============ */}
      <section className="px-6 max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-10">
        
        {/* ===== LEFT: INDIVIDUAL DESIGN ===== */}
        <div className="xl:col-span-5 flex flex-col items-center xl:items-start">
          {/* Section Badge */}
          <div className="bg-[#0A2558] text-white rounded-full px-6 py-2 text-sm font-bold tracking-widest shadow-md flex items-center gap-3 mb-8">
            <span className="text-[#FFC700]">•</span> INDIVIDUAL DESIGN <span className="text-[#FFC700]">• •</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-4 w-full">
            {individualDesign.map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="flex flex-col gap-3 h-full">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 text-[#0A2558] flex items-center justify-center bg-gray-50 rounded-xl">
                      <div className="w-6 h-6">{iconMap[iconAlias[item.icon] || item.icon]}</div>
                    </div>
                  </div>
                  <h3 className="text-sm font-extrabold text-gray-900 leading-tight">{item.name}</h3>
                  <div className="relative w-fit mt-1">
                    <span className="text-2xl font-black text-[#0A2558] relative z-10">{item.price.split(' ')[0]}</span>
                    {item.price.includes('/') && <span className="text-xs text-[#0A2558] font-bold ml-1">{item.price.replace(item.price.split(' ')[0], '')}</span>}
                    <div className="absolute bottom-1 left-0 right-0 h-2.5 bg-[#FFE169] rounded-full -z-10 -rotate-1"></div>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT: KIT DESIGN ===== */}
        <div className="xl:col-span-7 flex flex-col items-center xl:items-start">
          {/* Section Badge */}
          <div className="bg-[#0A2558] text-white rounded-full px-6 py-2 text-sm font-bold tracking-widest shadow-md flex items-center gap-3 mb-8 relative">
            <span className="text-[#FFC700]">•</span> KIT DESIGN <span className="text-[#FFC700]">•</span>
            <svg className="absolute -right-8 -top-6 w-12 h-12 text-[#FFC700]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          {/* Row 1: Top Kits (4 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-4">
            {kitDesignTop.map((kit, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm relative flex flex-col h-full">
                {kit.popular && <div className="absolute -top-3 right-4 bg-[#FFC700] text-[#0A2558] text-[10px] font-black px-3 py-1 rounded shadow-sm">POPULAR</div>}
                {kit.bestValue && <div className="absolute -top-3 right-4 bg-[#FFC700] text-[#0A2558] text-[10px] font-black px-3 py-1 rounded shadow-sm">BEST VALUE</div>}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0A2558] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5">{iconMap[kitIconMap[kit.name]]}</div>
                  </div>
                  <h3 className="text-sm font-black text-[#0A2558] leading-tight">{kit.name}</h3>
                </div>
                
                <div className="text-3xl font-black text-[#0A2558] mb-4">{kit.price}</div>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {kit.features.map((ft, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-gray-700 font-medium">
                      <svg className="w-4 h-4 text-[#0A2558] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {ft}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-4 border-t border-dashed border-gray-200 flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4M4 6v12a2 2 0 002 2h14v-8H4z" /></svg>
                  <span className="text-[10px] text-gray-500 font-semibold">Bonus:<br/><span className="text-[#0A2558]">{kitBonusMap[kit.name]}</span></span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Bottom Kits (5 columns) */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 w-full">
            {kitDesignBottom.map((kit, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col h-full">
                <div className="flex flex-col gap-2 mb-3">
                  <div className="w-8 h-8 bg-[#0A2558] text-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4">{iconMap[kitIconMap[kit.name]]}</div>
                  </div>
                  <h3 className="text-xs font-black text-[#0A2558] leading-tight">{kit.name}</h3>
                </div>
                
                <div className="text-xl font-black text-[#0A2558] mb-3">{kit.price}</div>
                
                <ul className="space-y-1.5 flex-grow">
                  {kit.features.map((ft, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[10px] text-gray-600 font-medium">
                      <svg className="w-3 h-3 text-[#0A2558] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {ft}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}