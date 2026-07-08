"use client";

import { useLanguage } from "./i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-asphalt/10 bg-sugar-white py-10">
      <div className="flex w-full flex-col items-center gap-3 px-[4%] text-center">
        <p className="font-intertil-display text-lg font-semibold text-asphalt">
          Intertil d.o.o.
        </p>
        <p className="font-intertil-label text-xs uppercase tracking-widest text-asphalt-dim">
          {t.footer.tagline}
        </p>
        <p className="mt-4 text-xs text-asphalt-dim/70">
          © {new Date().getFullYear()} Intertil d.o.o. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
