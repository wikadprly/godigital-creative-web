"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { socials } from "@/config/socials";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/portfolio", label: "Portofolio" },
  { href: "/layanan", label: "Layanan" },
  { href: "/harga", label: "Harga" },
  { href: "/tentang-kami", label: "Tentang Kami" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-blue/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">GoDigital</span>
          <span className="text-brand-yellow">Creative</span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-brand-yellow"
                  : "text-white/80 hover:text-brand-yellow"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={socials.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-full bg-brand-yellow px-5 text-sm font-semibold text-black transition-colors hover:bg-yellow-400"
          >
            Konsultasi Gratis
          </a>
        </nav>

        <a
          href={socials.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-full bg-brand-yellow px-4 text-sm font-semibold text-black transition-colors hover:bg-yellow-400 sm:hidden"
        >
          Konsultasi
        </a>
      </div>
    </header>
  );
}
