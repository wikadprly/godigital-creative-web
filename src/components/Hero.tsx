import Link from "next/link";
import { socials } from "@/config/socials";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-brand-blue">
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center px-6 md:flex-row md:px-8">
        {/* ===== LEFT COLUMN (50%) ===== */}
        <div className="flex flex-1 flex-col items-center pt-16 text-center md:items-start md:pr-10 md:text-left lg:pt-0">
          <span className="mb-4 inline-flex rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white/90">
            Solusi Digital untuk Brand yang Ingin Naik Level
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            MENTRANSFORMASI MITRA AGAR UNGGUL SECARA{" "}
            <span className="text-brand-yellow">DIGITAL</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Kami membantu bisnis lokal berkembang di era digital — dengan
            layanan profesional, desain estetis, dan harga yang terjangkau.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href={socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-yellow px-7 text-sm font-semibold text-black transition-colors hover:bg-yellow-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi Gratis
            </a>
            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center gap-1 rounded-full border border-white px-7 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Lihat Portofolio &rarr;
            </Link>
          </div>

          {/* Flower doodle — bottom-left */}
          <div className="absolute bottom-8 left-8 hidden text-brand-yellow/60 md:block">
            <svg
              width="56"
              height="56"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="32" cy="32" r="5" fill="currentColor" />
              <path d="M32 18c2 4 6 7 8 12" />
              <path d="M32 46c-2-4-6-7-8-12" />
              <path d="M18 32c4-2 7-6 12-8" />
              <path d="M46 32c-4 2-7 6-12 8" />
              <path d="M25 25c4 3 7 6 11 5" />
              <path d="M39 39c-4-3-7-6-11-5" />
            </svg>
          </div>
        </div>

        {/* ===== RIGHT COLUMN (50%) — Overlapping Visuals ===== */}
        <div className="relative mt-12 flex w-full flex-shrink-0 items-center justify-center pb-16 md:mt-0 md:w-1/2 md:pb-0">
          <div className="relative h-[400px] w-[320px] sm:h-[500px] sm:w-[380px]">
            {/* Yellow sticky note (behind, top-left) */}
            <div className="absolute left-0 top-4 z-10 -rotate-6 rounded-sm bg-brand-yellow px-4 py-2.5 shadow-lg sm:left-2 sm:top-6">
              <p className="whitespace-nowrap text-sm font-bold text-black">
                Creative Design That Works.
              </p>
            </div>

            {/* Blue polaroid (right side) */}
            <div className="absolute right-0 top-16 z-10 -rotate-3 rounded-sm bg-[#0f4a7a] p-2 shadow-md sm:right-2 sm:top-20">
              <div className="flex h-16 w-20 items-center justify-center rounded-sm bg-white/15">
                <svg
                  className="h-6 w-6 text-brand-yellow/80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <circle cx="9" cy="9" r="7" />
                  <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.5 4.5l1.5 1.5M13.5 13.5l1.5 1.5M4.5 13.5l1.5-1.5M13.5 4.5l1.5 1.5" />
                </svg>
              </div>
              <p className="mt-1 text-center text-[10px] font-medium text-white">
                Coming Soon
              </p>
            </div>

            {/* Phone mockup (center, z-20) */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rotate-6">
              <div className="relative h-[380px] w-[190px] rounded-[2.5rem] border-[3px] border-[#1a1a1a] bg-black shadow-2xl sm:h-[440px] sm:w-[215px]">
                <div className="absolute left-1/2 top-2.5 z-30 h-5 w-14 -translate-x-1/2 rounded-full bg-black" />
                <div className="mx-auto mt-[18px] h-[calc(100%-22px)] w-[calc(100%-4px)] overflow-hidden rounded-[2.2rem]">
                  <div className="relative h-full w-full bg-black">
                    <img
                      src="/instagram.jpeg"
                      alt="Instagram @go.dcreative"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* White checklist card (front, bottom-right, z-30) */}
            <div className="absolute -bottom-1 right-0 z-30 rounded-xl bg-white p-4 shadow-xl sm:-bottom-2">
              <ul className="space-y-2">
                {[
                  "Desain Aesthetic",
                  "Proses Terstruktur",
                  "Harga Terjangkau",
                  "Hasil Maksimal",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-medium text-gray-800"
                  >
                    <svg
                      className="h-3.5 w-3.5 flex-shrink-0 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Doodle ornaments */}
            <svg
              className="absolute -right-2 top-2 h-5 w-5 text-brand-yellow/50"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-brand-yellow/40" />
            <div className="absolute bottom-1/2 left-1/3 h-1.5 w-1.5 rounded-full bg-brand-yellow/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
