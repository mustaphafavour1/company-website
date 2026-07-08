"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Check, Wheat, Candy } from "lucide-react";
import sugarImg from "@/assets/intertil/offering-sugar.jpg";
import flourImg from "@/assets/intertil/offering-flour.jpg";
import Circled from "./Circled";
import { useLanguage } from "./i18n";

export default function Offering() {
  const { t } = useLanguage();

  const categories: {
    key: string;
    icon: typeof Candy;
    image: StaticImageData;
    imageAlt: string;
    label: string;
    headline: string;
    description: string;
    specs: string[];
  }[] = [
    {
      key: "sugar",
      icon: Candy,
      image: sugarImg,
      imageAlt: "A large pile of freshly harvested sugar beet",
      ...t.offering.sugar,
    },
    {
      key: "flour",
      icon: Wheat,
      image: flourImg,
      imageAlt: "Ripe wheat ears ready for milling",
      ...t.offering.flour,
    },
  ];

  return (
    <section id="offering" className="relative bg-sugar-white py-28 md:py-36">
      <div className="w-full px-[4%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-intertil-label text-xs md:text-sm tracking-[0.25em] text-asphalt-dim uppercase">
            {t.offering.eyebrow}
          </p>
          <h2 className="mt-4 font-intertil-display text-4xl font-semibold leading-[1.1] text-asphalt md:text-5xl">
            {t.offering.title.pre}
            <Circled>{t.offering.title.keyword}</Circled>
            {t.offering.title.post}
          </h2>
          <p className="mt-5 text-asphalt-dim">{t.offering.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group overflow-hidden rounded-3xl border border-asphalt/10 bg-white transition-shadow hover:shadow-xl hover:shadow-asphalt/5"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.imageAlt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-asphalt/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full bg-sugar-white/90 px-4 py-2 backdrop-blur-sm">
                    <Icon className="h-4 w-4 text-steel" />
                    <span className="font-intertil-label text-xs font-medium uppercase tracking-wider text-asphalt">
                      {cat.label}
                    </span>
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-intertil-display text-xl font-semibold text-asphalt md:text-2xl">
                    {cat.headline}
                  </h3>
                  <p className="mt-3 text-sm text-asphalt-dim md:text-base">
                    {cat.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {cat.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-steel/10 text-steel">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm text-asphalt/90">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
