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
        className="flex items-center gap-1.5 rounded-full border border-guanabana/15 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-guanabana-dim transition-colors hover:border-guanabana/35 hover:text-guanabana"
      >
        <Languages className="h-3.5 w-3.5" />
        {lang}
        <ChevronDown className="h-3 w-3" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-guanabana/15 bg-ember-black-soft/95 py-1 backdrop-blur-md shadow-xl"
        >
          {languages.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => handleSelect(l.code, l.implemented)}
                disabled={!l.implemented}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                  l.implemented
                    ? "text-guanabana hover:bg-guanabana/10 cursor-pointer"
                    : "cursor-not-allowed text-guanabana-dim/40"
                } ${lang === l.code ? "bg-mango/10 text-mango-bright" : ""}`}
              >
                <span>{l.label}</span>
                {!l.implemented && (
                  <span className="font-label text-[10px] uppercase tracking-wider text-guanabana-dim/50">
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
