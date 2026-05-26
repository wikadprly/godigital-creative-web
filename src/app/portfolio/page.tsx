import { portfolioDetail } from "@/data/portfolios";

const categories = [
  "Semua",
  "Social Media",
  "Branding",
  "Product Design",
  "Video",
  "Website",
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-blue px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white/90">
            Karya Terbaik
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Portofolio{" "}
            <span className="relative text-brand-yellow">
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
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            Beberapa karya terbaik kami dalam membantu brand dan UMKM
            bertransformasi secara digital melalui desain yang estetis dan
            profesional.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 z-30 border-b border-gray-200 bg-white/95 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                cat === "Semua"
                  ? "bg-brand-blue text-white"
                  : "border border-gray-200 text-gray-600 hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioDetail.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image placeholder */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue/5 to-brand-yellow/5">
                  <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-blue text-white transition-colors group-hover:bg-brand-yellow group-hover:text-black">
                        <span className="text-2xl font-bold">
                          {item.title[0]}
                        </span>
                      </div>
                      <p className="text-base font-semibold text-gray-700">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div>
                      <span className="rounded-full bg-brand-yellow px-2.5 py-0.5 text-[10px] font-semibold text-black">
                        {item.category}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
