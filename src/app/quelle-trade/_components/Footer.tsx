"use client";

import { useLanguage } from "./i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-ink/10 bg-sand py-10">
      <div className="flex w-full flex-col items-center gap-3 px-[4%] text-center">
        <p className="font-quelle-display text-lg italic text-ink">
          Quelle Trade, Import Export d.o.o.
        </p>
        <p className="font-quelle-label text-xs uppercase tracking-widest text-ink-dim">
          {t.footer.tagline}
        </p>
        <p className="mt-4 text-xs text-ink-dim/70">
          © {new Date().getFullYear()} Quelle Trade, Import Export d.o.o.{" "}
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
