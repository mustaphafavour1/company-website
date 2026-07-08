"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Wheat, Droplets, Sun } from "lucide-react";
import chickpeasImg from "@/assets/quelle-trade/offering-chickpeas.jpg";
import lentilsImg from "@/assets/quelle-trade/offering-lentils.jpg";
import driedFruitImg from "@/assets/quelle-trade/offering-driedfruit.jpg";
import Accent from "./Accent";
import { useLanguage } from "./i18n";

export default function Offering() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const categories: {
    key: string;
    icon: typeof Wheat;
    image: StaticImageData;
    imageAlt: string;
    label: string;
    headline: string;
    description: string;
    specs: string[];
  }[] = [
    {
      key: "chickpeas",
      icon: Wheat,
      image: chickpeasImg,
      imageAlt: "A sack of uniform Kabuli chickpeas",
      ...t.offering.chickpeas,
    },
    {
      key: "lentils",
      icon: Droplets,
      image: lentilsImg,
      imageAlt: "A pile of deep red lentils",
      ...t.offering.lentils,
    },
    {
      key: "driedFruit",
      icon: Sun,
      image: driedFruitImg,
      imageAlt: "Sun-dried apricots",
      ...t.offering.driedFruit,
    },
  ];

  return (
    <section id="offering" className="bg-sand py-28 md:py-36">
      <div className="w-full px-[4%]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-quelle-label text-xs md:text-sm tracking-[0.25em] text-ink-dim uppercase">
            {t.offering.eyebrow}
          </p>
          <h2 className="mt-4 font-quelle-display text-4xl italic leading-[1.1] text-ink md:text-5xl">
            {t.offering.title.pre}
            <Accent>{t.offering.title.keyword}</Accent>
            {t.offering.title.post}
          </h2>
          <p className="mt-5 text-ink-dim">{t.offering.subtitle}</p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl divide-y divide-ink/10 border-y border-ink/10">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isOpen = i === active;
            return (
              <div key={cat.key}>
                <button
                  onClick={() => setActive(i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-terracotta text-sand"
                          : "bg-terracotta/10 text-terracotta"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`font-quelle-display text-2xl italic md:text-3xl ${
                        isOpen ? "text-ink" : "text-ink/60"
                      }`}
                    >
                      {cat.label}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink-dim transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-8 md:grid-cols-2 md:gap-12">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                          <Image
                            src={cat.image}
                            alt={cat.imageAlt}
                            fill
                            sizes="(min-width: 768px) 40vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-quelle-display text-xl italic text-ink md:text-2xl">
                            {cat.headline}
                          </h3>
                          <p className="mt-3 text-sm text-ink-dim md:text-base">
                            {cat.description}
                          </p>
                          <ul className="mt-6 space-y-3">
                            {cat.specs.map((spec) => (
                              <li key={spec} className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron">
                                  <Check className="h-3 w-3" />
                                </span>
                                <span className="text-sm text-ink/90">
                                  {spec}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
