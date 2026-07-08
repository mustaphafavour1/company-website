"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import kernelsImg from "@/assets/agorastar/offering-kernels.jpg";
import inshellImg from "@/assets/agorastar/offering-inshell.jpg";
import BoldSoft from "./BoldSoft";
import { useLanguage } from "./i18n";

export default function Offering() {
  const { t } = useLanguage();
  const [active, setActive] = useState<0 | 1>(0);

  const categories: {
    key: string;
    image: StaticImageData;
    imageAlt: string;
    label: string;
    headline: string;
    description: string;
    specs: string[];
  }[] = [
    {
      key: "kernels",
      image: kernelsImg,
      imageAlt: "A single walnut kernel, whole halves ready to pack",
      ...t.offering.kernels,
    },
    {
      key: "inshell",
      image: inshellImg,
      imageAlt: "A dense pile of whole in-shell walnuts",
      ...t.offering.inshell,
    },
  ];

  const current = categories[active];

  return (
    <section id="offering" className="bg-walnut-dark py-28 md:py-36">
      <div className="w-full px-[4%]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-agora-label text-xs md:text-sm tracking-[0.25em] text-cream-dim uppercase">
            {t.offering.eyebrow}
          </p>
          <h2 className="mt-4">
            <BoldSoft
              bold={t.offering.title.bold}
              soft={t.offering.title.soft}
              className="font-agora-display text-4xl leading-[1.15] md:text-5xl"
            />
          </h2>
          <p className="mt-5 text-cream-dim">{t.offering.subtitle}</p>
        </div>

        {/* Sliding switch control */}
        <div className="relative mx-auto mt-12 flex w-full max-w-xs rounded-full border border-cream/15 bg-walnut/40 p-1">
          <motion.div
            className="absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-amber"
            animate={{ x: active === 0 ? 4 : "calc(100% + 4px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
          {categories.map((cat, i) => (
            <button
              key={cat.key}
              onClick={() => setActive(i as 0 | 1)}
              className={`relative z-10 flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                active === i ? "text-walnut-dark" : "text-cream-dim"
              }`}
              aria-pressed={active === i}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="relative mx-auto mt-14 grid max-w-4xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-agora-display text-xl font-semibold text-cream md:text-2xl">
                {current.headline}
              </h3>
              <p className="mt-3 text-sm text-cream-dim md:text-base">
                {current.description}
              </p>
              <ul className="mt-6 space-y-3">
                {current.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-olive/20 text-olive-bright">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-cream/90">{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
