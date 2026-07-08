"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import chickpeasImg from "@/assets/quelle-trade/hero-chickpeas.jpg";
import Accent from "./Accent";
import { useLanguage } from "./i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative w-full bg-sand pt-32 pb-0 md:pt-40">
      <div className="mx-auto max-w-3xl px-[4%] text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="font-quelle-label text-xs md:text-sm tracking-[0.25em] text-ink-dim uppercase"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
          className="mt-5 font-quelle-display text-5xl italic leading-[1.1] text-ink sm:text-6xl md:text-7xl"
        >
          {t.hero.headline.pre}
          <Accent>{t.hero.headline.keyword}</Accent>
          {t.hero.headline.post}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-base text-ink-dim md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-sm font-semibold text-sand transition-colors hover:bg-terracotta-bright"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#offering"
            className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-terracotta hover:text-terracotta"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Arched photo reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-16 w-[92%] max-w-5xl"
      >
        <div
          className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]"
          style={{
            borderTopLeftRadius: "clamp(40px, 10vw, 160px)",
            borderTopRightRadius: "clamp(40px, 10vw, 160px)",
          }}
        >
          <Image
            src={chickpeasImg}
            alt="A close-up of uniform Kabuli chickpeas"
            fill
            priority
            sizes="92vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-0 top-6 flex flex-col items-center gap-1 text-sand"
        >
          <span className="font-quelle-label text-xs uppercase tracking-widest">
            {t.hero.scrollHint}
          </span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>

      <div className="h-16 md:h-24" />
    </section>
  );
}
