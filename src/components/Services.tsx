import Link from "next/link";
import { services } from "@/data/services";

const serviceIcons = [
  <svg key="bk" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><path d="M12 2v4m0 12v4" />
  </svg>,
  <svg key="fd" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path d="M17.5 6.5h.01" />
  </svg>,
  <svg key="is" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="14" rx="2" /><path d="M3 8h18" /><path d="M8 21h8" /><path d="M12 17v4" />
  </svg>,
  <svg key="ch" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>,
];

export function Services() {
  return (
    <section id="layanan" className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Layanan{" "}
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
        </div>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-brand-blue">
                  {serviceIcons[i]}
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-shrink-0 flex-col items-start self-center lg:ml-4">
            <p className="max-w-[180px] text-lg italic leading-snug text-brand-blue">
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
