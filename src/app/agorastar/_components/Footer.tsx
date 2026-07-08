"use client";

import { useLanguage } from "./i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-cream/10 bg-walnut-dark py-10">
      <div className="flex w-full flex-col items-center gap-3 px-[4%] text-center">
        <p className="font-agora-display text-lg font-semibold text-cream">
          Agorastar
        </p>
        <p className="font-agora-label text-xs uppercase tracking-widest text-cream-dim">
          {t.footer.tagline}
        </p>
        <p className="mt-4 text-xs text-cream-dim/70">
          © {new Date().getFullYear()} Agorastar. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
