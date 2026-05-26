import Link from "next/link";

const serviceList = [
  {
    title: "Social Media Design",
    desc: "Desain feed, story, dan konten sosial media yang aesthetic dan konsisten dengan brand.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="4" y="8" width="40" height="32" rx="6" fill="#DBEAFE" />
        <rect x="8" y="14" width="32" height="20" rx="4" fill="white" />
        <circle cx="24" cy="24" r="6" fill="#0d3b66" />
        <circle cx="36" cy="14" r="5" fill="#FFD166" />
        <path d="M10 38h28" stroke="#0d3b66" strokeWidth="2" strokeLinecap="round" />
        <circle cx="15" cy="38" r="2" fill="#FFD166" />
        <circle cx="33" cy="38" r="2" fill="#FFD166" />
      </svg>
    ),
  },
  {
    title: "Branding Kit",
    desc: "Panduan visual brand lengkap — logo, palet warna, font, dan identitas merek.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="6" y="6" width="36" height="36" rx="8" fill="#FFD166" />
        <rect x="12" y="12" width="24" height="24" rx="4" fill="white" />
        <path d="M18 24h12M24 18v12" stroke="#0d3b66" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="30" cy="14" r="4" fill="#0d3b66" />
        <path d="M8 40l4-4" stroke="#DBEAFE" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 8l-4 4" stroke="#DBEAFE" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Product Design",
    desc: "Desain produk dan katalog yang menarik untuk meningkatkan daya jual bisnis Anda.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="4" y="10" width="40" height="28" rx="5" fill="#DBEAFE" />
        <rect x="10" y="16" width="12" height="16" rx="3" fill="white" />
        <rect x="26" y="16" width="12" height="8" rx="3" fill="#0d3b66" />
        <rect x="26" y="28" width="12" height="4" rx="2" fill="#FFD166" />
        <path d="M4 14h40" stroke="#0d3b66" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="3" fill="#FFD166" />
      </svg>
    ),
  },
  {
    title: "Video & Motion",
    desc: "Video reels, TikTok, dan animasi motion grafis untuk engagement maksimal.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="4" y="8" width="40" height="32" rx="6" fill="#0d3b66" />
        <polygon points="20,16 20,32 34,24" fill="#FFD166" />
        <circle cx="38" cy="10" r="6" fill="#DBEAFE" />
        <path d="M36 8l4 4M38 10h2" stroke="#0d3b66" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="8" y="36" width="8" height="2" rx="1" fill="#FFD166" />
        <rect x="32" y="36" width="8" height="2" rx="1" fill="#FFD166" />
      </svg>
    ),
  },
  {
    title: "Website & Landing Page",
    desc: "Landing page dan website profesional yang dioptimalkan untuk konversi bisnis.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <rect x="4" y="6" width="40" height="36" rx="4" fill="#DBEAFE" />
        <rect x="8" y="12" width="32" height="26" rx="3" fill="white" />
        <rect x="8" y="12" width="32" height="6" rx="3" fill="#0d3b66" />
        <circle cx="14" cy="15" r="1.5" fill="#FFD166" />
        <circle cx="19" cy="15" r="1.5" fill="#FFD166" />
        <circle cx="24" cy="15" r="1.5" fill="#FFD166" />
        <rect x="12" y="24" width="10" height="8" rx="2" fill="#FFD166" />
        <rect x="26" y="22" width="10" height="10" rx="2" fill="#0d3b66" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="layanan" className="bg-[#FAFAFA] px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Layanan{" "}
            <span className="text-brand-blue">Kami</span>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {serviceList.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-center text-sm font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-center text-xs leading-relaxed text-gray-500">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-shrink-0 flex-col items-start self-center lg:ml-4">
            <p className="max-w-[160px] text-base italic leading-snug text-brand-blue">
              Solusi lengkap untuk brand kamu!
            </p>
            <svg
              className="mt-2 h-8 w-20 text-brand-yellow"
              viewBox="0 0 80 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path d="M2 30 Q30 28 50 16 Q65 8 78 2" />
              <path d="M70 8 l8-6 4 8" />
            </svg>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue transition-colors hover:text-blue-700"
          >
            Lihat semua layanan &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
