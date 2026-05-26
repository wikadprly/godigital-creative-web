import React from "react";
import { team } from "@/data/team";

const teamStyles = [
  { bg: "#A5C8F2", headBg: "#0A2558", role: "Graphic Designer", desc: "Mengubah ide menjadi visual yang menarik dan berkesan." },
  { bg: "#F3E5D8", headBg: "#0A2558", role: "Brand Strategist", desc: "Merancang strategi brand yang kuat dan tepat sasaran.", star: true },
  { bg: "#E8F2ED", headBg: "#FFC700", role: "Content & Social Media", desc: "Membuat konten yang engaging dan relevan untuk audiens." },
  { bg: "#FFF9C4", headBg: "#0A2558", role: "Motion Designer", desc: "Menghidupkan ide melalui motion dan animasi kreatif." },
];

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-800 pb-20 relative overflow-hidden">
      
      {/* ============ BACKGROUND DOODLES ============ */}
      {/* Flower Top Left */}
      <svg className="absolute top-16 -left-12 w-48 h-48 text-[#FFC700] pointer-events-none opacity-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M50 50 Q60 10 70 40 Q50 50 50 50 M50 50 Q90 60 60 70 M50 50 Q40 90 30 70 M50 50 Q10 40 30 30" fill="none"/>
        <circle cx="50" cy="50" r="4" fill="#FFC700" />
      </svg>
      {/* Yo-yo Hand Right */}
      <svg className="absolute top-10 right-0 w-80 h-80 text-[#FFC700] hidden lg:block opacity-90 pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M180 20 Q140 30 120 60" stroke="#FFC700" />
        <circle cx="120" cy="60" r="15" fill="#FFFFFF" stroke="#FFC700" />
        <path d="M120 75 L120 150" strokeDasharray="4 4" stroke="#FFC700" />
        <circle cx="120" cy="150" r="10" stroke="#FFC700" fill="#FFFFFF" />
        <circle cx="120" cy="150" r="3" fill="#FFC700" />
      </svg>

      <div className="max-w-[1300px] mx-auto px-6 pt-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-16">
        
        {/* ================= 1. HEADER (Kiri Atas) ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          {/* Creative Design Text Doodle */}
          <div className="absolute -top-10 left-10 lg:static lg:-mt-10 mb-6 transform -rotate-6">
            <p className="text-[#FFC700] font-bold text-lg leading-tight">
              Creative<br/>Design<br/>That Works.
            </p>
          </div>
          
          <span className="bg-[#0A2558] text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit mb-6">
            Tentang Kami
          </span>
          
          <h1 className="text-4xl lg:text-5xl font-black text-[#0A2558] leading-[1.1] mb-6">
            KREATIF, STRATEGIS,<br/>DAN BERDAMPAK<br/>
            <span className="text-[#FFC700]">UNTUK BRAND KAMU.</span>
          </h1>
          
          <p className="text-sm text-gray-600 leading-relaxed pr-4">
            Go Digital Creative hadir untuk membantu bisnis lokal berkembang di era digital. 
            Kami percaya desain yang baik <span className="font-bold text-[#0A2558]">bukan hanya soal estetika</span>, 
            tapi juga solusi yang tepat untuk menyampaikan pesan, membangun identitas, dan meningkatkan kepercayaan audiens.
          </p>
        </div>

        {/* ================= 2. SCRAPBOOK COLLAGE (Kanan Atas) ================= */}
        <div className="lg:col-span-7 relative min-h-[400px] hidden sm:block">
          
          {/* Blue Flower Doodle Behind */}
          <svg className="absolute top-0 left-0 w-32 h-32 text-[#0A2558]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M50 50 Q60 20 70 40 Q50 50 50 50 M50 50 Q80 60 60 70 M50 50 Q40 80 30 70 M50 50 Q20 40 30 30" />
            <circle cx="50" cy="50" r="5" fill="#0A2558" />
          </svg>

          {/* Photo 1: Workspace / Laptop */}
          <div className="absolute top-4 left-12 w-64 h-64 bg-white p-3 shadow-xl transform -rotate-3 z-10 border border-gray-100">
            <div className="w-8 h-3 bg-[#FFC700]/80 absolute -top-1 left-1/2 -translate-x-1/2 rotate-2"></div> {/* Tape */}
            <div className="w-full h-full bg-[#E5E7EB] relative overflow-hidden flex items-center justify-center">
               {/* Dummy Image Content */}
               <div className="w-full h-full bg-gray-200 absolute"></div>
               <div className="z-10 bg-[#0A2558] text-white font-black text-xl p-4 text-center border-4 border-gray-800">
                 GO<br/>DIGITAL<br/>CREATIVE
               </div>
            </div>
          </div>

          {/* Photo 2: Blue Quote Card */}
          <div className="absolute top-10 right-16 w-52 h-52 bg-[#0A2558] p-6 shadow-2xl transform rotate-3 z-20 flex items-center justify-center text-center">
            <div className="w-10 h-4 bg-[#FFC700] absolute -top-2 left-1/2 -translate-x-1/2 -rotate-3"></div> {/* Tape */}
            <p className="text-white font-bold text-xl leading-snug italic">
              "We don't just<br/>make design,<br/>we build<br/>connections."
            </p>
          </div>

          {/* Photo 3: Sketch Card */}
          <div className="absolute bottom-4 left-[35%] w-48 h-48 bg-white p-4 shadow-lg transform rotate-2 z-30 border border-gray-200">
            <div className="w-full h-full border border-dashed border-[#0A2558]/30 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]">
               <svg className="w-20 h-20 text-[#0A2558] mb-2" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M40 70 C 40 80, 60 80, 60 70 L 60 50 C 60 40, 40 40, 40 50 Z" />
                 <path d="M50 40 L50 20 M40 25 L50 20 L60 25 M45 15 A 5 5 0 1 1 55 15" />
               </svg>
               <p className="text-[#0A2558] font-bold text-lg text-center leading-tight italic">
                 Ideas<br/>Create<br/>Impact
               </p>
            </div>
          </div>
        </div>

        {/* ================= 3. NILAI KAMI (Kiri Tengah) ================= */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-bold text-[#0A2558] italic">Nilai Kami</h2>
            <svg className="w-6 h-6 text-[#0A2558]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.5 5.5L20 8.5l-4 4 1 6L12 15.5 7 18.5l1-6-4-4 5.5-1L12 2z"/></svg>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            {/* Background Line for desktop */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-[1px] border-t border-dashed border-gray-300 -z-10"></div>
            
            {/* Value 1 */}
            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 rounded-full bg-[#0A2558] text-white flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Kreativitas</h3>
              <p className="text-[10px] text-gray-500 leading-tight">Kami selalu mencari ide baru untuk menghasilkan desain yang unik dan berkesan.</p>
            </div>
            
            {/* Value 2 */}
            <div className="flex flex-col items-center text-center px-2 border-l border-dashed border-gray-200">
              <div className="w-12 h-12 rounded-full bg-[#FFC700] text-gray-900 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Strategi</h3>
              <p className="text-[10px] text-gray-500 leading-tight">Setiap desain kami dasari dengan strategi yang tepat dan tujuan yang jelas.</p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col items-center text-center px-2 border-l border-dashed border-gray-200">
              <div className="w-12 h-12 rounded-full bg-[#0A2558] text-white flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Kolaborasi</h3>
              <p className="text-[10px] text-gray-500 leading-tight">Kami mendengarkan kebutuhanmu dan bekerja bersama untuk hasil terbaik.</p>
            </div>

            {/* Value 4 */}
            <div className="flex flex-col items-center text-center px-2 border-l border-dashed border-gray-200">
              <div className="w-12 h-12 rounded-full bg-[#FFC700] text-gray-900 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">Berdampak</h3>
              <p className="text-[10px] text-gray-500 leading-tight">Desain kami bukan hanya bagus, tapi juga memberi dampak nyata untuk brand kamu.</p>
            </div>
          </div>
        </div>

        {/* ================= 4. STATS CARD (Kanan Tengah - Overlapping) ================= */}
        <div className="lg:col-span-5 lg:-mt-32 z-40 relative">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <h3 className="text-gray-900 font-bold mb-6 text-sm">
              Bersama banyak brand<br/>menuju versi terbaiknya ✨
            </h3>
            
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex items-center gap-3">
                <div className="text-[#FFC700]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <div className="font-black text-xl text-[#0A2558]">150+</div>
                  <div className="text-[10px] text-gray-500 font-bold leading-tight">Brand<br/>Telah Dibantu</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-[#FFC700]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div>
                  <div className="font-black text-xl text-[#0A2558]">500+</div>
                  <div className="text-[10px] text-gray-500 font-bold leading-tight">Proyek<br/>Selesai</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-[#FFC700]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="font-black text-xl text-[#0A2558]">98%</div>
                  <div className="text-[10px] text-gray-500 font-bold leading-tight">Klien<br/>Puas</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-[#FFC700]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="font-black text-xl text-[#0A2558]">2+</div>
                  <div className="text-[10px] text-gray-500 font-bold leading-tight">Tahun<br/>Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 5. OUR STORY (Tengah Bawah) ================= */}
        <div className="lg:col-start-7 lg:col-span-6 relative mt-10 lg:mt-0">
          <div className="bg-[#0A2558] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative">
            <div className="w-12 h-5 bg-[#FFC700] absolute -top-2.5 right-10 rotate-3 rounded-sm"></div> {/* Tape */}
            
            <h2 className="text-[#FFC700] text-3xl font-bold italic mb-4">Our Story <span className="text-xl">✨</span></h2>
            <div className="flex flex-col sm:flex-row gap-6 items-end">
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-4">
                <p>
                  Berawal dari passion di dunia desain dan digital marketing, Go Digital Creative tumbuh dengan satu tujuan: 
                  membantu brand dan bisnis lokal tampil lebih profesional, konsisten, dan menarik di dunia digital.
                </p>
                <p>
                  Kami percaya setiap brand punya cerita unik. Tugas kami adalah mengemas cerita itu menjadi visual yang kuat, menarik, dan mudah diingat.
                </p>
              </div>
              
              {/* Potted Flower Doodle */}
              <div className="shrink-0 w-24 h-24">
                <svg viewBox="0 0 100 100" fill="none" stroke="#FFC700" strokeWidth="2" strokeLinecap="round">
                  <path d="M40 70 L60 70 L55 90 L45 90 Z" />
                  <path d="M50 70 L50 40 M50 55 L35 45 M50 50 L65 40" />
                  <circle cx="50" cy="30" r="10" />
                  <circle cx="50" cy="20" r="4" />
                  <circle cx="50" cy="40" r="4" />
                  <circle cx="40" cy="30" r="4" />
                  <circle cx="60" cy="30" r="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 6. TIM KAMI (Kiri Bawah) ================= */}
        <div className="lg:col-span-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#0A2558] italic mb-2">Tim di Balik<br/>Go Digital Creative</h2>
            <p className="text-xs text-gray-500 max-w-xs">
              Tim kecil dengan semangat besar untuk membantu brand kamu naik level.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, i) => {
              const s = teamStyles[i % teamStyles.length];
              return (
              <div key={member.name} className="flex flex-col">
                {s.star && <svg className="absolute -top-4 -right-2 w-6 h-6 text-[#FFC700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.5 5.5L20 8.5l-4 4 1 6L12 15.5 7 18.5l1-6-4-4 5.5-1L12 2z"/></svg>}
                <div className="w-full aspect-square rounded-3xl mb-3 overflow-hidden" style={{ backgroundColor: s.bg }}>
                  <div className="w-full h-full flex items-end justify-center pt-4">
                    <div className="w-20 h-20 rounded-t-full" style={{ backgroundColor: s.headBg }}></div>
                  </div>
                </div>
                <h3 className="font-bold text-[#0A2558] text-sm">{member.name}</h3>
                <p className="text-[10px] font-bold text-gray-600 mb-1">{s.role}</p>
                <p className="text-[9px] text-gray-500 leading-tight">{s.desc}</p>
              </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}