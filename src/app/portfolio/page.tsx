"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioDetail as dataPortfolio } from "@/data/portfolios";

const categories = [
  "Semua",
  "Branding",
  "Social Media",
  "Product Design",
  "Video",
  "Website",
];

const portfolioStyles = [
  { tagBg: "bg-blue-50", tagText: "text-blue-600", imageBg: "bg-[#0A2558]", imageText: "GRAND OPENING", textColor: "text-white" },
  { tagBg: "bg-blue-50", tagText: "text-blue-600", imageBg: "bg-[#E0F2F1]", imageText: "Skincare for Healthy Skin", textColor: "text-teal-900" },
  { tagBg: "bg-yellow-50", tagText: "text-yellow-700", imageBg: "bg-[#0A2558]", imageText: "GO DIGITAL CREATIVE", textColor: "text-white" },
  { tagBg: "bg-green-50", tagText: "text-green-700", imageBg: "bg-[#F1F8E9]", imageText: "Product Launch", textColor: "text-green-900" },
  { tagBg: "bg-purple-50", tagText: "text-purple-700", imageBg: "bg-[#0A2558]", imageText: "EVENT POSTER", textColor: "text-white" },
  { tagBg: "bg-teal-50", tagText: "text-teal-700", imageBg: "bg-[#1B3320]", imageText: "CATALOG", textColor: "text-green-100" },
  { tagBg: "bg-indigo-50", tagText: "text-indigo-600", imageBg: "bg-[#0A2558]", imageText: "Story Templates", textColor: "text-[#FFC700]" },
  { tagBg: "bg-yellow-50", tagText: "text-yellow-700", imageBg: "bg-[#0A2558]", imageText: "PRODUCT CATALOG", textColor: "text-white" },
  { tagBg: "bg-indigo-50", tagText: "text-indigo-600", imageBg: "bg-[#0A2558]", imageText: "Video Reels", textColor: "text-[#FFC700]" },
  { tagBg: "bg-orange-50", tagText: "text-orange-700", imageBg: "bg-[#F9FAFB]", imageText: "Company Profile", textColor: "text-[#0A2558]" },
];

const portfolioDetail = dataPortfolio.slice(0, 10).map((item, i) => ({
  id: i + 1,
  ...item,
  ...portfolioStyles[i],
  client: item.category,
}));

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPortfolios = activeCategory === "Semua" 
    ? portfolioDetail 
    : portfolioDetail.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-800 pb-24 relative overflow-hidden">
      
      {/* ============ HEADER SECTION ============ */}
      <section className="px-6 pt-16 pb-6 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl relative">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2558] flex items-center gap-3 mb-4">
            Portofolio
            <span className="text-[#FFC700] italic font-medium relative text-5xl md:text-6xl -mt-2">
              Kami
              {/* Doodle Sparkle / Lines around 'Kami' */}
              <svg className="absolute -top-1 -right-6 w-8 h-8 text-[#FFC700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v4m0 12v4M4 12H2m20 0h-2m-2.5-7.5L16 6m-8 12l-1.5 1.5M6 6l1.5 1.5m10.5 10.5L16.5 16.5" /></svg>
            </span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            Beberapa hasil karya yang telah kami buat untuk berbagai brand dan kebutuhan digital.
          </p>
        </div>

        {/* Top Right Button & Doodle */}
        <div className="relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[#0A2558] px-6 py-2.5 text-sm font-semibold text-[#0A2558] hover:bg-blue-50 transition-colors relative z-10 bg-white"
          >
            Lihat semua portofolio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          
          {/* Yellow Flower Doodle */}
          <svg className="absolute -top-12 -right-8 w-24 h-24 text-[#FFC700] z-0 opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path d="M50 50 Q60 20 70 40 Q50 50 50 50 M50 50 Q80 60 60 70 M50 50 Q40 80 30 70 M50 50 Q20 40 30 30" fill="none"/>
             <circle cx="50" cy="50" r="5" fill="#FFC700" />
          </svg>
        </div>
      </section>

      {/* ============ FILTER SECTION ============ */}
      <section className="sticky top-0 z-30 bg-[#FDFDFD]/95 backdrop-blur-sm px-6 py-4 mb-6 border-b border-gray-100">
        <div className="mx-auto flex max-w-[1400px] overflow-x-auto scrollbar-hide items-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-[#0A2558] text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ============ GRID CONTENT ============ */}
      <section className="px-6 max-w-[1400px] mx-auto relative z-10 min-h-[500px]">
        {filteredPortfolios.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {filteredPortfolios.map((item) => (
              <div key={item.id} className="group flex flex-col h-full">
                
                {/* Card Image Area (Placeholder) */}
                <div className={`w-full aspect-[4/3] rounded-2xl ${item.imageBg} mb-4 flex items-center justify-center p-6 text-center relative overflow-hidden shadow-sm transition-transform group-hover:-translate-y-1`}>
                  <h3 className={`text-xl font-black ${item.textColor} leading-tight`}>{item.imageText}</h3>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>

                {/* Card Content Area */}
                <div className="flex flex-col flex-grow px-1">
                  {/* Tag Kategori */}
                  <span className={`w-fit inline-block px-3 py-1 rounded-full text-[9px] font-bold mb-3 ${item.tagBg} ${item.tagText}`}>
                    {item.category}
                  </span>
                  
                  {/* Judul & Arrow Button */}
                  <div className="flex items-start justify-between gap-2 mt-auto">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-snug">{item.title}</h4>
                      <p className="text-[11px] text-gray-500 mt-1">{item.client}</p>
                    </div>
                    
                    {/* Arrow Button */}
                    <button className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 group-hover:border-[#0A2558] group-hover:text-[#0A2558] group-hover:bg-blue-50 transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5v10M19 5H9" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <p>Belum ada portofolio untuk kategori ini.</p>
          </div>
        )}
      </section>

    </div>
  );
}