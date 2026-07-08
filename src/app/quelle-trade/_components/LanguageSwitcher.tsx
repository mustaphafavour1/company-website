"use client";

import { useEffect, useRef, useState } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { languages, useLanguage, type LanguageCode } from "./i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function handleSelect(code: LanguageCode, implemented: boolean) {
    if (!implemented) return;
    setLang(code);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-ink-dim transition-colors hover:border-ink/35 hover:text-ink"
      >
        <Languages className="h-3.5 w-3.5" />
        {lang}
        <ChevronDown className="h-3 w-3" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-ink/10 bg-sand py-1 shadow-xl"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => handleSelect(l.code, l.implemented)}
                disabled={!l.implemented}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                  l.implemented
                    ? "text-ink hover:bg-ink/5 cursor-pointer"
                    : "cursor-not-allowed text-ink-dim/40"
                } ${lang === l.code ? "bg-terracotta/10 text-terracotta-bright" : ""}`}
              >
                <span>{l.label}</span>
                {!l.implemented && (
                  <span className="font-quelle-label text-[10px] uppercase tracking-wider text-ink-dim/50">
                    Soon
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
