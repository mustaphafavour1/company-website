"use client";

import { useLanguage } from "./i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-guanabana/10 bg-ember-black py-10">
      <div className="flex w-full flex-col items-center gap-3 px-[4%] text-center">
        <p className="font-display text-lg text-guanabana">
          Tierra D&apos; Acogida SL
        </p>
        <p className="font-label text-xs uppercase tracking-widest text-guanabana-dim">
          {t.footer.tagline}
        </p>
        <p className="mt-4 text-xs text-guanabana-dim/70">
          © {new Date().getFullYear()} Tierra D&apos; Acogida SL. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
