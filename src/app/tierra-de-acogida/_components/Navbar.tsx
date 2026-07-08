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
    <header className="fixed top-0 inset-x-0 z-50 bg-ember-black/80 backdrop-blur-md border-b border-guanabana/10">
      <nav className="w-full px-[4%] h-16 md:h-20 flex items-center justify-between gap-4">
        <Link
          href="#top"
          className="font-display text-lg md:text-xl tracking-tight text-guanabana whitespace-nowrap"
        >
          Tierra D&apos; Acogida
        </Link>
        <ul className="hidden md:flex items-center gap-8 font-label text-xs uppercase tracking-widest text-guanabana-dim">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-mango"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-brasa px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold text-ember-black transition-colors hover:bg-brasa-bright whitespace-nowrap"
          >
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
