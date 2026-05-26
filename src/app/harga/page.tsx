import Link from "next/link";
import { siteConfig } from "@/data/site";
import { kitDesign, individualDesign } from "@/data/pricing";

export default function HargaPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-blue px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white/90">
            Pricelist GoDigital Creative
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Daftar{" "}
            <span className="relative text-brand-yellow">
              Harga
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
            Harga terjangkau dengan layanan berkualitas. Pilih paket atau desain
            satuan yang sesuai dengan kebutuhan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Kit Design */}
      <section className="bg-white px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Kit Design{" "}
              <span className="text-brand-blue">(Paketan)</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Paket lengkap untuk kebutuhan desain dan social media kit Anda.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kitDesign.map((kit) => (
              <div
                key={kit.name}
                className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-yellow hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {kit.name}
                  </h3>
                  <span className="text-lg font-bold text-brand-blue">
                    Rp{kit.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Highlight: All-in-One */}
          <div className="mx-auto mt-8 max-w-md rounded-xl border-2 border-brand-yellow bg-brand-yellow/10 p-5 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
              Best Value
            </span>
            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                All-in-One Branding Suite
              </span>
              <span className="text-2xl font-bold text-brand-blue">
                Rp500K
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Design */}
      <section className="bg-gray-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Individual Design{" "}
              <span className="text-brand-blue">(Satuan)</span>
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Pesan desain satuan sesuai kebutuhan spesifik Anda.
            </p>
          </div>

          <div className="divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="grid grid-cols-3 gap-4 bg-gray-50 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
              <span>Layanan</span>
              <span className="text-center">Harga</span>
              <span className="text-right">Keterangan</span>
            </div>
            {individualDesign.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-3 gap-4 px-6 py-4 text-sm transition-colors hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{item.name}</span>
                <span className="text-center font-bold text-brand-blue">
                  Rp{item.price}
                </span>
                <span className="text-right text-xs text-gray-400">
                  {item.note || "—"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Pesan Sekarang
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Hubungi kami untuk konsultasi gratis dan pemesanan.
          </p>
          <div className="mt-6 space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-medium text-gray-800">Email:</span>{" "}
              {siteConfig.email}
            </p>
            <p>
              <span className="font-medium text-gray-800">Instagram:</span>{" "}
              {siteConfig.instagram}
            </p>
          </div>
          <Link
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-yellow px-8 text-sm font-semibold text-black transition-colors hover:bg-yellow-400"
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
          </Link>
        </div>
      </section>
    </>
  );
}
