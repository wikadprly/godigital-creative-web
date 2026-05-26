import Link from "next/link";
import { socials } from "@/config/socials";

const socialLinks = [socials.instagram, socials.tiktok, socials.whatsapp];

export function Footer() {
  return (
    <footer className="bg-brand-blue px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <Link href="/" className="text-lg font-bold text-white">
            GoDigital<span className="text-brand-yellow">Creative</span>
          </Link>
          <p className="mt-1 text-sm text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
