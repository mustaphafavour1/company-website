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
        className="flex items-center gap-1.5 rounded-full border border-asphalt/15 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-asphalt-dim transition-colors hover:border-asphalt/35 hover:text-asphalt"
      >
        <Languages className="h-3.5 w-3.5" />
        {lang}
        <ChevronDown className="h-3 w-3" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-asphalt/10 bg-sugar-white py-1 shadow-xl"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => handleSelect(l.code, l.implemented)}
                disabled={!l.implemented}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                  l.implemented
                    ? "text-asphalt hover:bg-asphalt/5 cursor-pointer"
                    : "cursor-not-allowed text-asphalt-dim/40"
                } ${lang === l.code ? "bg-steel/10 text-steel-bright" : ""}`}
              >
                <span>{l.label}</span>
                {!l.implemented && (
                  <span className="font-intertil-label text-[10px] uppercase tracking-wider text-asphalt-dim/50">
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
