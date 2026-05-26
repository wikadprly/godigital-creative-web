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
      <div className="mx-auto flex items-center justify-between px-6 py-5 sm:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight whitespace-nowrap"
        >
          <span className="text-white">GoDigital</span>
          <span className="text-brand-yellow">Creative</span>
        </Link>

        <nav className="mx-auto hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative whitespace-nowrap text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-brand-yellow after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-brand-yellow"
                  : "text-white hover:text-brand-yellow"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={socials.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand-yellow px-6 py-2 text-sm font-semibold text-black transition-colors hover:bg-yellow-400 sm:inline-flex"
        >
          Konsultasi Gratis
        </a>

        <a
          href={socials.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full bg-brand-yellow px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-yellow-400 sm:hidden"
        >
          Konsultasi
        </a>
      </div>
    </header>
  );
}
