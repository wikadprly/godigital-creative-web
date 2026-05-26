import Link from "next/link";
import { portfolios } from "@/data/portfolios";

export function PortfolioGallery() {
  return (
    <section id="portfolio" className="bg-gray-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Portofolio{" "}
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5 transition-transform duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-blue text-white transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                    <span className="text-2xl font-bold">
                      {item.title[0]}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue transition-colors hover:text-blue-700"
          >
            Lihat semua portofolio &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
