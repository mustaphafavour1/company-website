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
    <header className="fixed top-0 inset-x-0 z-50 bg-sand/85 backdrop-blur-md border-b border-ink/10">
      <nav className="w-full px-[4%] h-16 md:h-20 flex items-center justify-between gap-4">
        <Link
          href="#top"
          className="font-quelle-display text-xl md:text-2xl italic tracking-tight text-ink whitespace-nowrap"
        >
          Quelle Trade
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-quelle-label text-xs uppercase tracking-widest text-ink-dim">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-terracotta">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-terracotta px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold text-sand transition-colors hover:bg-terracotta-bright whitespace-nowrap"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
