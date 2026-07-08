"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Citrus, Check } from "lucide-react";
import charcoalImg from "@/assets/photos/offering-charcoal.jpg";
import fruitImg from "@/assets/photos/offering-fruit.jpg";
import { useLanguage } from "./i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Offering() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const categories = [
    {
      key: "charcoal",
      label: t.offering.tabCharcoal,
      icon: Flame,
      image: charcoalImg as StaticImageData,
      imageAlt: "Hand-cut organic Cuban lump charcoal",
      ...t.offering.charcoal,
    },
    {
      key: "fruit",
      label: t.offering.tabFruit,
      icon: Citrus,
      image: fruitImg as StaticImageData,
      imageAlt: "Freshly harvested Cuban mangoes in a market crate",
      ...t.offering.fruit,
    },
  ];

  const current = categories[active];

  return (
    <section
      id="offering"
      className="relative bg-ember-black py-28 md:py-36"
    >
      <div className="w-full px-[4%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
          variants={fadeUp}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-label text-xs md:text-sm tracking-[0.25em] text-guanabana-dim uppercase">
            {t.offering.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.1]">
            <span className="text-brasa-bright">{t.offering.titleA}</span>{" "}
            <span className="italic text-mango-bright">
              {t.offering.titleB}
            </span>
          </h2>
          <p className="mt-5 text-guanabana/80">{t.offering.subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.15}
          variants={fadeUp}
          className="mt-12 flex justify-center gap-3"
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = i === active;
            return (
              <button
                key={cat.key}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-transparent bg-guanabana text-ember-black"
                    : "border-guanabana/25 text-guanabana-dim hover:border-guanabana/50 hover:text-guanabana"
                }`}
                aria-pressed={isActive}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Panel */}
        <div className="relative mt-14 grid items-center gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ember-black/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display text-2xl md:text-3xl text-guanabana">
                {current.headline}
              </h3>
              <p className="mt-4 text-guanabana/80">{current.description}</p>
              <ul className="mt-7 space-y-3.5">
                {current.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brasa/20 text-brasa-bright">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm md:text-base text-guanabana/90">
                      {spec}
                    </span>
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
