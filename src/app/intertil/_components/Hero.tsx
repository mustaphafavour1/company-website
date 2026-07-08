"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Gauge } from "lucide-react";
import wheatImg from "@/assets/intertil/hero-wheat.jpg";
import Circled from "./Circled";
import { useLanguage } from "./i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-asphalt"
    >
      <Image
        src={wheatImg}
        alt="Golden wheat field at sunrise, representing the grain behind Intertil's flour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/55 to-asphalt/10" />
      <div className="absolute inset-0 bg-asphalt/20" />

      {/* Route line — a single animated dashed corridor line, the hero's quiet ambient motion */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M -50 40 Q 300 300, 700 220 T 1500 380"
          fill="none"
          stroke="rgb(199 145 63)"
          strokeWidth="2"
          strokeDasharray="10 14"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -240 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="relative z-10 w-full px-[4%] pb-24 pt-32">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="font-intertil-label text-xs md:text-sm tracking-[0.25em] text-sugar-white/70 uppercase"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
          className="mt-5 max-w-3xl font-intertil-display text-5xl font-semibold leading-[1.05] text-sugar-white sm:text-6xl md:text-7xl"
        >
          {t.hero.headline.pre}
          <Circled>{t.hero.headline.keyword}</Circled>
          {t.hero.headline.post}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base text-sugar-white/85 md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={fadeUp}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-wheat px-6 py-3.5 text-sm font-semibold text-asphalt transition-colors hover:bg-wheat-bright"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#offering"
            className="inline-flex items-center gap-2 rounded-full border border-sugar-white/35 px-6 py-3.5 text-sm font-semibold text-sugar-white transition-colors hover:border-wheat hover:text-wheat-bright"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Corridors strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-sugar-white/15 pt-6"
        >
          <span className="font-intertil-label text-xs uppercase tracking-widest text-sugar-white/60">
            {t.hero.corridorsLabel}
          </span>
          {t.hero.cities.map((city, i) => (
            <span key={city} className="flex items-center gap-3">
              <span className="text-sm text-sugar-white/90">{city}</span>
              {i < t.hero.cities.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-sugar-white/40" />
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Floating frosted stat card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[4%] top-28 z-10 hidden items-center gap-3 rounded-2xl border border-sugar-white/20 bg-asphalt/40 px-5 py-4 backdrop-blur-md sm:flex"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wheat/25 text-wheat-bright">
          <Gauge className="h-5 w-5" />
        </span>
        <span className="leading-tight">
          <span className="block font-intertil-display text-2xl font-semibold text-sugar-white">
            {t.hero.statValue}
          </span>
          <span className="block font-intertil-label text-xs text-sugar-white/70">
            {t.hero.statLabel}
          </span>
        </span>
      </motion.div>
    </section>
  );
}
