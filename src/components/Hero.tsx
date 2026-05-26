import Link from "next/link";
import { socials } from "@/config/socials";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-24 pt-16 lg:flex-row lg:pb-32 lg:pt-20">
        {/* ===== Left column ===== */}
        <div className="relative flex-1 text-center lg:text-left">
          {/* Badge */}
          <span className="mb-5 inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white/90">
            {siteConfig.tagline}
          </span>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            MENTRANSFORMASI MITRA AGAR UNGGUL SECARA{" "}
            <span className="text-brand-yellow">DIGITAL</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {siteConfig.heroDescription}
          </p>

          {/* Button group */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={socials.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 text-sm font-semibold text-black transition-colors hover:bg-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
              className="inline-flex h-11 items-center justify-center gap-1 rounded-full border border-white/30 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Lihat Portofolio &rarr;
            </Link>
          </div>

          {/* Decorative flower doodle — bottom-left */}
          <div className="absolute -bottom-20 left-0 hidden text-brand-yellow/60 lg:block">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="32" cy="32" r="6" fill="currentColor" />
              <path d="M32 18c0 4 6 8 6 14" />
              <path d="M32 46c0-4-6-8-6-14" />
              <path d="M18 32c4 0 8-6 14-6" />
              <path d="M46 32c-4 0-8 6-14 6" />
              <path d="M24 24c6 2 10 6 16 4" />
              <path d="M40 40c-6-2-10-6-16-4" />
            </svg>
          </div>
        </div>

        {/* ===== Right column — overlapping visual ===== */}
        <div className="relative flex-shrink-0">
          <div className="relative h-[480px] w-[320px] sm:h-[540px] sm:w-[380px]">
            {/* Yellow sticky note (behind phone, top-left) */}
            <div className="absolute left-0 top-6 z-0 -rotate-6 rounded-sm bg-brand-yellow px-3 py-2 text-sm font-medium text-black shadow-md">
              Creative Design That Works.
            </div>

            {/* Blue polaroid (behind phone, bottom-left) */}
            <div className="absolute bottom-16 left-4 z-0 rotate-3 rounded-sm bg-brand-blue p-2 shadow-md">
              <div className="h-16 w-20 rounded-sm bg-white/20" />
              <p className="mt-1 text-center text-[10px] font-medium text-white">
                Coming Soon
              </p>
            </div>

            {/* Phone mockup (main element, slightly rotated) */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rotate-6">
              <div className="h-[400px] w-[200px] rounded-[2.5rem] border-[4px] border-white/30 bg-white/5 shadow-2xl backdrop-blur-sm sm:h-[460px] sm:w-[220px]">
                <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-white/20" />
                <div className="mx-auto mt-4 flex h-[calc(100%-3rem)] w-[88%] flex-col items-center rounded-xl bg-white/10 p-4 text-center">
                  <div className="mb-2 h-14 w-14 rounded-full bg-gradient-to-br from-brand-yellow to-orange-400 ring-2 ring-white/30" />
                  <div className="mb-1 h-3 w-3/4 rounded bg-white/20" />
                  <div className="mb-4 h-2 w-1/2 rounded bg-white/10" />
                  <div className="grid grid-cols-3 gap-1">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-sm bg-white/15"
                      />
                    ))}
                  </div>
                  <div className="mt-auto flex w-full justify-around">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <div className="h-1.5 w-6 rounded-full bg-white/30" />
                    <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* White checklist card (in front, bottom-right) — PDF Value */}
            <div className="absolute -bottom-2 right-0 z-20 rounded-xl bg-white p-4 shadow-xl">
              <ul className="space-y-2">
                {["Profesional", "Estetis", "Terjangkau"].map((item) => (
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

            {/* Scattered doodle ornaments */}
            <svg
              className="absolute -right-4 top-4 h-5 w-5 text-brand-yellow/60"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="absolute right-8 top-1/3 h-7 w-7 text-brand-yellow/40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="absolute -left-2 top-1/2 h-2 w-2 rounded-full bg-brand-yellow/50" />
            <div className="absolute bottom-1/3 left-1/4 h-1.5 w-1.5 rounded-full bg-brand-yellow/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
