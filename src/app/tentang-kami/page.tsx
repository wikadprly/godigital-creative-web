import { siteConfig } from "@/data/site";
import { companyValues } from "@/data/values";
import { team } from "@/data/team";
import {
  visi,
  misi,
  programKerja,
  sasaranTarget,
  targetAudiens,
  mediaPromosi,
  milestones,
} from "@/data/about";

const valueIcons = [
  <svg key="p" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18" /><path d="M3 9h18" />
  </svg>,
  <svg key="e" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
  </svg>,
  <svg key="t" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" /><path d="M12 6v2m0 8v2" />
  </svg>,
];

export default function TentangKamiPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-brand-blue px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white/90">
            Tentang Kami
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Kenali{" "}
            <span className="relative text-brand-yellow">
              GoDigital Creative
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q25,0 50,8 T100,8"
                  stroke="#ffd166"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            {siteConfig.heroDescription}
          </p>
        </div>
      </section>

      {/* ===== VISI & MISI ===== */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Visi */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Visi Kami</h2>
              <p className="mt-4 text-lg italic leading-relaxed text-brand-blue">
                &ldquo;{visi}&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Kami percaya bahwa setiap bisnis, sekecil apapun, berhak untuk
                memiliki kehadiran digital yang kuat dan mampu bersaing di pasar
                global.
              </p>
            </div>

            {/* Misi */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-black">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Misi Kami</h2>
              <ul className="mt-4 space-y-4">
                {misi.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPANY STORY ===== */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Perjalanan{" "}
              <span className="text-brand-blue">Kami</span>
            </h2>
            <p className="mt-3 text-gray-500">
              GoDigital Creative dikategorikan sebagai Solopreneur Creative
              Service — bisnis jasa yang dijalankan secara mandiri dengan fokus
              pada efisiensi biaya overhead.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 sm:left-1/2 sm:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col gap-4 sm:flex-row ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1 z-10 h-3 w-3 rounded-full border-2 border-brand-blue bg-white sm:left-1/2 sm:-translate-x-1.5" />

                  {/* Content */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <span className="text-xs font-bold text-brand-yellow">
                      {item.year}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAM KERJA ===== */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Program{" "}
              <span className="relative text-brand-blue">
                Kerja
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q25,0 50,8 T100,8"
                    stroke="#ffd166"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {programKerja.map((program) => (
              <div
                key={program.misi}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">
                  {program.misi}
                </span>
                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Value{" "}
              <span className="text-brand-blue">Kami</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {companyValues.map((value, i) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                  {valueIcons[i]}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIM ===== */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tim{" "}
              <span className="relative text-brand-blue">
                Kami
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q25,0 50,8 T100,8"
                    stroke="#ffd166"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="mt-3 text-gray-500">
              Para kreator di balik GoDigital Creative yang siap membantu
              transformasi digital bisnis Anda.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-gray-200 bg-white p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-2xl font-bold text-white transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                  {member.initials}
                </div>
                <h3 className="text-base font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-gray-400">Creative Team</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SASARAN & TARGET ===== */}
      <section className="bg-brand-blue px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sasaran &{" "}
              <span className="text-brand-yellow">Target</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60">
              Komitmen kami untuk memberikan layanan terbaik dan terukur bagi
              setiap mitra GoDigital Creative.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {sasaranTarget.map((target) => (
              <div
                key={target.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold text-white">
                  {target.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {target.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TARGET AUDIENS (PDF page 11) ===== */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Target{" "}
              <span className="relative text-brand-blue">
                Audiens
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q25,0 50,8 T100,8"
                    stroke="#ffd166"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {targetAudiens.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">
                  Target
                </span>
                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEDIA PROMOSI ===== */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Media{" "}
              <span className="text-brand-blue">Promosi</span>
            </h2>
            <p className="mt-3 text-gray-500">
              Saluran digital yang kami gunakan untuk menjangkau dan melayani
              mitra.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {mediaPromosi.map((media, i) => (
              <div
                key={media.name}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path d="M17.5 6.5h.01" /></>}
                    {i === 1 && <><rect x="3" y="3" width="18" height="14" rx="2" /><path d="M3 8h18" /><path d="M8 21h8" /><path d="M12 17v4" /></>}
                    {i === 2 && <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></>}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {media.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {media.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
