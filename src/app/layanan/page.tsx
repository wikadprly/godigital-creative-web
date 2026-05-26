import React from "react";
import { services } from "@/data/services";

const serviceTags: Record<string, string[]> = {
  "Branding Kit": ["Logo", "Color Palette", "Guideline"],
  "Feed Design": ["Feed", "Grid", "Carousel"],
  "Interactive Stories": ["Polling", "Q&A", "Quiz"],
  "Copywriting & Hashtag": ["Caption", "Storytelling", "Hashtag"],
};

const serviceIllustrationId: Record<string, string> = {
  "Branding Kit": "branding",
  "Feed Design": "social",
  "Interactive Stories": "social",
  "Copywriting & Hashtag": "marketing",
};

// --- KOMPONEN ILUSTRASI CUSTOM ---
// Dibuat semirip mungkin dengan gambar referensi menggunakan SVG murni
const ServiceIllustration = ({ id }: { id: string }) => {
  const blobBg = <circle cx="50" cy="50" r="45" fill="#E8F0FE" />;

  switch (id) {
    case "social":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          {blobBg}
          {/* Phone */}
          <rect x="25" y="15" width="50" height="70" rx="6" fill="#0A2558" />
          <rect x="30" y="25" width="40" height="50" rx="2" fill="#FFFFFF" />
          {/* Post Image */}
          <rect x="35" y="30" width="30" height="20" rx="2" fill="#A5C8F2" />
          <path d="M35 45 L45 35 L65 50" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <circle cx="55" cy="35" r="3" fill="#FFFFFF" />
          {/* Text lines */}
          <rect x="35" y="55" width="25" height="3" rx="1.5" fill="#E2E8F0" />
          <rect x="35" y="62" width="15" height="3" rx="1.5" fill="#E2E8F0" />
          {/* Heart Bubble */}
          <path d="M 65 55 Q 85 55 85 70 Q 85 85 65 85 L 60 90 L 60 80 Q 50 80 50 70 Q 50 55 65 55 Z" fill="#FFC700" />
          <path d="M 67.5 65 C 67.5 65 65 62.5 62.5 65 C 60 67.5 67.5 75 67.5 75 C 67.5 75 75 67.5 72.5 65 C 70 62.5 67.5 65 67.5 65 Z" fill="#FFFFFF" />
        </svg>
      );
    case "branding":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          {blobBg}
          {/* Book */}
          <path d="M25 30 L45 25 L75 30 L60 80 L25 80 Z" fill="#0A2558" />
          <path d="M25 30 L45 25 L45 75 L25 80 Z" fill="#1E3A8A" />
          <text x="35" y="45" fill="#FFFFFF" fontSize="6" fontWeight="bold" transform="rotate(-5, 35, 45)">BRAND</text>
          <text x="33" y="53" fill="#FFFFFF" fontSize="6" fontWeight="bold" transform="rotate(-5, 33, 53)">GUIDELINE</text>
          {/* Aa Bubble */}
          <rect x="55" y="60" width="25" height="20" rx="4" fill="#FFC700" />
          <text x="59" y="74" fill="#0A2558" fontSize="12" fontWeight="bold">Aa</text>
        </svg>
      );
    case "product":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          {blobBg}
          {/* Pouch */}
          <path d="M30 25 L55 25 L55 75 L30 75 Z" fill="#0A2558" />
          <rect x="30" y="30" width="25" height="5" fill="#1E3A8A" />
          <rect x="35" y="40" width="15" height="25" fill="#FFFFFF" rx="2" />
          <path d="M42 45 Q37 55 42 60 Q47 55 42 45" stroke="#4ADE80" strokeWidth="1.5" fill="none" />
          {/* Jar */}
          <path d="M50 75 L50 65 Q50 60 60 60 L70 60 Q80 60 80 65 L80 75 Z" fill="#FFFFFF" />
          <rect x="50" y="65" width="30" height="5" fill="#0A2558" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          {blobBg}
          {/* Board */}
          <rect x="20" y="40" width="60" height="40" rx="4" fill="#0A2558" />
          <polygon points="40,50 60,60 40,70" fill="#FFC700" />
          {/* Clapper stick */}
          <path d="M20 35 L75 25 L80 32 L25 42 Z" fill="#FFFFFF" />
          <path d="M30 33 L35 29 L40 37 L35 40 Z" fill="#0A2558" />
          <path d="M50 29 L55 25 L60 33 L55 36 Z" fill="#0A2558" />
        </svg>
      );
    case "website":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          {blobBg}
          {/* Browser */}
          <rect x="20" y="30" width="60" height="45" rx="3" fill="#FFFFFF" stroke="#0A2558" strokeWidth="3" />
          <rect x="20" y="30" width="60" height="10" fill="#0A2558" />
          <circle cx="26" cy="35" r="1.5" fill="#FFC700" />
          <circle cx="31" cy="35" r="1.5" fill="#FFFFFF" />
          <circle cx="36" cy="35" r="1.5" fill="#FFFFFF" />
          {/* Content */}
          <rect x="25" y="45" width="20" height="20" fill="#A5C8F2" rx="2" />
          <path d="M25 55 L32 48 L45 60" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <rect x="50" y="45" width="25" height="3" fill="#E2E8F0" rx="1.5" />
          <rect x="50" y="52" width="20" height="3" fill="#E2E8F0" rx="1.5" />
          <rect x="50" y="59" width="15" height="3" fill="#E2E8F0" rx="1.5" />
          {/* Cursor */}
          <path d="M 60 70 L 60 90 L 65 85 L 70 95 L 73 93 L 68 82 L 75 80 Z" fill="#FFC700" stroke="#0A2558" strokeWidth="1.5" />
        </svg>
      );
    case "marketing":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-auto">
          {blobBg}
          {/* Chart */}
          <rect x="40" y="45" width="45" height="35" rx="2" fill="#FFFFFF" stroke="#0A2558" strokeWidth="2" />
          <rect x="65" y="60" width="5" height="15" fill="#0A2558" />
          <rect x="75" y="50" width="5" height="25" fill="#FFC700" />
          <circle cx="50" cy="65" r="7" fill="#A5C8F2" />
          <path d="M50 65 L50 58 A7 7 0 0 1 57 65 Z" fill="#FFC700" />
          {/* Megaphone */}
          <path d="M25 45 L45 35 L50 55 L25 55 Z" fill="#FFC700" />
          <rect x="45" y="33" width="5" height="24" fill="#0A2558" />
          <rect x="25" y="45" width="4" height="10" fill="#0A2558" />
          <path d="M35 55 L35 65 L30 65 L30 55 Z" fill="#0A2558" />
        </svg>
      );
    default:
      return null;
  }
};

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-800 pb-24 relative overflow-hidden">
      
      {/* ============ BACKGROUND DOODLES ============ */}
      {/* Flower Left */}
      <svg className="absolute top-10 -left-10 w-32 h-32 text-[#0A2558] opacity-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M50 50 Q60 20 70 40 Q50 50 50 50 M50 50 Q80 60 60 70 M50 50 Q40 80 30 70 M50 50 Q20 40 30 30" fill="none"/>
        <circle cx="50" cy="50" r="5" fill="#0A2558" />
      </svg>
      
      {/* Yo-yo Hand Right */}
      <svg className="absolute -top-10 right-0 w-80 h-80 text-[#FFC700] hidden lg:block opacity-90" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M180 20 Q140 30 120 60" stroke="#FFC700" />
        <circle cx="120" cy="60" r="15" fill="#FFFFFF" stroke="#FFC700" />
        <path d="M120 75 L120 150" strokeDasharray="4 4" stroke="#FFC700" />
        <circle cx="120" cy="150" r="10" stroke="#FFC700" fill="#FFFFFF" />
        <circle cx="120" cy="150" r="4" fill="#FFC700" />
      </svg>

      {/* Ribbon Bottom Left */}
      <svg className="absolute bottom-10 -left-10 w-64 h-64 text-[#0A2558] pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M 0 150 C 50 150, 50 50, 100 100 C 150 150, 150 200, 200 180" />
      </svg>
      
      {/* Flower Bottom Right */}
      <svg className="absolute bottom-20 -right-16 w-48 h-48 text-[#FFC700] pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M50 50 Q60 10 70 40 Q50 50 50 50 M50 50 Q90 60 60 70 M50 50 Q40 90 30 70 M50 50 Q10 40 30 30" fill="none"/>
        <circle cx="50" cy="50" r="4" fill="#FFC700" />
      </svg>

      {/* ============ HEADER SECTION ============ */}
      <section className="px-6 pt-20 pb-12 max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A2558] flex items-center gap-4 mb-6">
            Layanan 
            <span className="text-[#FFC700] italic font-medium relative">
              Kami
              {/* Blue underline doodle */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#0A2558]" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M5 5 Q50 8 95 2" />
              </svg>
              {/* Yellow sparkles */}
              <svg className="absolute -top-6 -right-6 w-10 h-10 text-[#FFC700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2v4m0 12v4M4 12H2m20 0h-2m-2.5-7.5L16 6m-8 12l-1.5 1.5" />
              </svg>
            </span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Solusi lengkap untuk kebutuhan brand dan bisnis kamu.<br />
            Desain profesional, hasil maksimal, harga terjangkau.
          </p>
        </div>

        {/* Floating Text Doodle (Creative design that works!) */}
        <div className="absolute top-16 right-[30%] hidden lg:block transform -rotate-6">
          <p className="text-[#0A2558] font-bold text-lg leading-tight text-center">
            Creative design<br/>that works!
          </p>
          <svg className="w-16 h-16 text-[#FFC700] absolute -right-12 top-4" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 40 Q30 40 40 10" />
            <path d="M35 15 L40 10 L45 15" />
          </svg>
        </div>
      </section>

      {/* ============ GRID CONTENT ============ */}
      <section className="px-6 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const illusId = serviceIllustrationId[service.title] || "branding";
            const tags = serviceTags[service.title] || service.features.slice(0, 3).map(f => f.split(" ")[0]);
            return (
            <div key={service.title} className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all relative flex flex-col h-full overflow-hidden">
              
              {/* Arrow Button (Absolute Bottom Right) */}
              <button className="absolute bottom-6 right-6 w-8 h-8 bg-[#FFC700] rounded-full flex items-center justify-center text-[#0A2558] group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <div className="flex gap-4 lg:gap-5 flex-grow">
                {/* Left: Illustration */}
                <div className="w-24 sm:w-28 flex-shrink-0 relative">
                  <ServiceIllustration id={illusId} />
                  {/* Small decorative sparkle on illustration */}
                  <svg className="absolute -top-2 right-2 w-4 h-4 text-[#FFC700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4 12H2M22 12h-2M6.34 6.34l-2.83-2.83" /></svg>
                </div>
                
                {/* Right: Text & Tags */}
                <div className="flex flex-col pb-10">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A2558] mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="bg-[#F1F5F9] text-[#0A2558]/70 text-[9px] font-bold px-2.5 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}