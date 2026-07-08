"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./i18n";

export default function Navbar() {
  const { t } = useLanguage();
  const links = [
    { href: "#offering", label: t.nav.offering },
    { href: "#proof", label: t.nav.whyUs },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-walnut-dark/80 backdrop-blur-md border-b border-cream/10">
      <nav className="w-full px-[4%] h-16 md:h-20 flex items-center justify-between gap-4">
        <Link
          href="#top"
          className="font-agora-display text-lg md:text-xl font-semibold tracking-tight text-cream whitespace-nowrap"
        >
          Agorastar
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-agora-label text-xs uppercase tracking-widest text-cream-dim">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-amber-bright">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-amber px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold text-walnut-dark transition-colors hover:bg-amber-bright whitespace-nowrap"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
