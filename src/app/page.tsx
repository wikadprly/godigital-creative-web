import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { companyValues } from "@/data/values";
import { portfolios } from "@/data/portfolios";
import { siteConfig } from "@/data/site";

const portfolioStyles = [
  { color: "bg-[#E8F2ED]", textColor: "text-green-800" },
  { color: "bg-[#0A2558]", textColor: "text-[#FFC700]" },
  { color: "bg-gray-900", textColor: "text-white" },
  { color: "bg-[#E0F2F1]", textColor: "text-teal-800" },
  { color: "bg-[#0A2558]", textColor: "text-white" },
  { color: "bg-[#FFC700]", textColor: "text-[#0A2558]" },
  { color: "bg-[#F3E5F5]", textColor: "text-purple-800" },
];

const featureIcons = ["badge", "sparkle", "wallet", "headset"];
const serviceIcons = ["grid", "pen", "bag", "play", "monitor"];

// --- ICONS MAP ---
const Icons: Record<string, React.ReactNode> = {
  badge: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  sparkle: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  wallet: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
  headset: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  grid: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  pen: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
  bag: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>,
  play: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  monitor: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans overflow-x-hidden text-gray-800 pb-20 relative">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A2558] text-white overflow-hidden pb-20">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 39V1H1v38h38z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-10 lg:pt-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          
          {/* Left Text */}
          <div className="flex-1 max-w-2xl relative">
            {/* Sparkle Doodles */}
            <svg className="absolute -top-10 -right-4 w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            
            <div className="inline-block border border-white/40 rounded-full px-5 py-2 text-xs md:text-sm font-medium mb-8 relative">
              {siteConfig.tagline}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white bg-[#0A2558]"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6">
              MENTRANSFORMASI MITRA<br/>
              AGAR UNGGUL SECARA <span className="text-[#FFC700]">DIGITAL</span>
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              {siteConfig.heroDescription}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#FFC700] text-[#0A2558] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                Konsultasi Gratis
              </button>
              <button className="border border-white/60 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
                Lihat Portofolio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>

            {/* Left Flower Doodle */}
            <svg className="absolute -bottom-24 -left-12 w-48 h-48 text-[#FFC700] pointer-events-none hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M50 50 Q60 20 70 40 Q50 50 50 50 M50 50 Q80 60 60 70 M50 50 Q40 80 30 70 M50 50 Q20 40 30 30" fill="#FFC700" fillOpacity="0.1"/>
              <path d="M50 50 Q40 90 20 100" />
            </svg>
          </div>

          {/* Right Visuals (Mockups & Sticky Notes) */}
          <div className="flex-1 relative w-full h-[500px] md:h-[600px] flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            
            {/* Yo-yo Hand Doodle */}
            <svg className="absolute -top-10 right-0 w-64 h-64 text-[#FFC700] hidden lg:block" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M200 20 Q160 30 140 60" stroke="white" />
              <circle cx="140" cy="60" r="15" fill="#FFC700" stroke="none" />
              <path d="M140 75 L140 150" strokeDasharray="4 4" />
              <circle cx="140" cy="150" r="10" stroke="white" />
            </svg>

            {/* Yellow Sticky Note */}
            <div className="absolute top-10 lg:top-20 right-20 lg:right-40 bg-[#FFC700] w-40 h-44 p-4 shadow-lg rotate-6 z-20">
               <div className="w-10 h-3 bg-blue-400/50 absolute -top-2 left-1/2 -translate-x-1/2 -rotate-2"></div>
               <p className="text-[#0A2558] font-black text-xl leading-tight">Creative<br/>Design<br/>That<br/>Works.</p>
            </div>

            {/* Polaroid / Blue Card */}
            <div className="absolute bottom-20 lg:bottom-10 right-0 lg:right-10 bg-[#0A2558] border-4 border-white rounded-lg p-2 w-48 h-56 -rotate-12 shadow-2xl z-20 flex flex-col items-center justify-center">
              <div className="w-full h-full border border-dashed border-white/40 flex flex-col items-center justify-center relative">
                <h3 className="text-[#FFC700] font-black text-3xl text-center leading-none">Coming<br/><span className="text-white">Soon</span></h3>
                <svg className="w-16 h-16 text-[#FFC700] mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
            </div>

            {/* Checklist Paper */}
            <div className="absolute bottom-4 right-20 lg:right-52 bg-white text-gray-800 p-4 rounded shadow-xl rotate-3 z-10 w-48 border border-gray-200">
               <ul className="space-y-2 text-[10px] font-bold">
                 <li className="flex gap-2 items-center"><span className="text-[#0A2558]">✔️</span> Desain Aesthetic</li>
                 <li className="flex gap-2 items-center"><span className="text-[#0A2558]">✔️</span> Proses Terstruktur</li>
                 <li className="flex gap-2 items-center"><span className="text-[#0A2558]">✔️</span> Harga Terjangkau</li>
                 <li className="flex gap-2 items-center"><span className="text-[#0A2558]">✔️</span> Hasil Maksimal</li>
               </ul>
            </div>

            {/* Main Phone Mockup */}
            <div className="relative z-30 w-[260px] h-[520px] rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden -rotate-6">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-40"></div>
              {/* Screen Content */}
              <div className="mt-1.5 mx-1.5 h-[calc(100%-12px)] w-[calc(100%-12px)] overflow-hidden rounded-[2.2rem]">
                <div className="relative h-full w-full bg-black">
                  <Image src="/instagram.jpeg" alt="Instagram @go.dcreative" fill className="object-cover" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= FEATURES STRIP ================= */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row flex-wrap justify-between items-center gap-6">
          {companyValues.slice(0, 4).map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#FFC700]/20 text-[#0A2558] flex items-center justify-center rounded-lg flex-shrink-0 relative overflow-hidden">
                 <div className={`absolute inset-0 opacity-20 ${i % 2 === 0 ? 'bg-[#0A2558]' : 'bg-[#FFC700]'}`}></div>
                 <div className="w-5 h-5 z-10 relative">{Icons[featureIcons[i]]}</div>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                <p className="text-xs text-gray-500 max-w-[150px] leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LAYANAN SECTION ================= */}
      <section className="bg-[#FAFAFA] py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-8 relative w-fit">
            <h2 className="text-2xl font-bold text-gray-900">
              Layanan <span className="text-[#0A2558] relative">
                Kami
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFC700]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q50 10 100 0" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 items-stretch relative">
            {services.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3 flex-1 min-w-[240px] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 text-[#0A2558] flex-shrink-0 flex items-center justify-center bg-blue-50/50 rounded-lg">
                   <div className="w-6 h-6">{Icons[serviceIcons[i]]}</div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1 leading-tight">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            
            {/* CTA Text right next to the cards */}
            <div className="hidden xl:flex items-center ml-4 relative">
              <p className="text-[#0A2558] font-bold text-sm transform -rotate-6 w-32 leading-tight">Solusi lengkap<br/>untuk brand kamu!</p>
              <svg className="absolute -left-6 top-8 w-10 h-10 text-[#FFC700] rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTOFOLIO SECTION ================= */}
      <section className="bg-white py-16 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="mb-8 relative w-fit">
            <h2 className="text-2xl font-bold text-gray-900">
              Portofolio <span className="text-[#0A2558] relative">
                Kami
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFC700]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q50 10 100 0" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
              </span>
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide">
            {portfolios.slice(0, 7).map((item, i) => (
              <div key={i} className={`flex-shrink-0 w-44 h-44 rounded-2xl p-4 flex items-center justify-center text-center ${portfolioStyles[i]?.color} ${portfolioStyles[i]?.textColor} font-black text-lg leading-tight shadow-sm border border-black/5`}>
                {item.title}
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2558] hover:text-blue-700">
              Lihat semua portofolio 
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
          
        </div>
      </section>

    </div>
  );
}