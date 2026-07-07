"use client";

import Link from "next/link";

const links = [
  { href: "#offering", label: "Offering" },
  { href: "#proof", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ember-black/80 backdrop-blur-md border-b border-guanabana/10">
      <nav className="mx-auto max-w-7xl px-[4%] h-16 md:h-20 flex items-center justify-between">
        <Link
          href="#top"
          className="font-display text-lg md:text-xl tracking-tight text-guanabana"
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
        <a
          href="#contact"
          className="rounded-full bg-brasa px-4 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold text-ember-black transition-colors hover:bg-brasa-bright"
        >
          Request a Quote
        </a>
      </nav>
    </header>
  );
}
