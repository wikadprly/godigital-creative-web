const valueItems = [
  {
    title: "Desain Profesional",
    desc: "Proses terstruktur dan hasil berkualitas tinggi yang siap bersaing di pasar digital.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    title: "Hasil Aestetik",
    desc: "Desain modern, konsisten, dan menarik secara visual untuk brand Anda.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Harga Terjangkau",
    desc: "Layanan berkualitas dengan harga yang bersahabat untuk UMKM.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
        <path d="M12 6v2m0 8v2" />
      </svg>
    ),
  },
  {
    title: "Fast Response",
    desc: "Tim responsif siap membantu kebutuhan desain Anda dengan cepat.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" />
      </svg>
    ),
  },
];

export function FeatureCards() {
  return (
    <section className="border-b border-gray-200 bg-white px-6 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl p-4 transition-colors hover:bg-gray-50"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-blue">
                <span className="h-6 w-6">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
