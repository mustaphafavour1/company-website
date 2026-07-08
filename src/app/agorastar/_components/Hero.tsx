"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, TreeDeciduous } from "lucide-react";
import walnutsImg from "@/assets/agorastar/hero-walnuts.jpg";
import BoldSoft from "./BoldSoft";
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
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col bg-walnut-dark md:flex-row"
    >
      {/* Photo side */}
      <div className="relative h-[42vh] w-full md:h-auto md:w-1/2">
        <Image
          src={walnutsImg}
          alt="A basket of whole in-shell walnuts from Agorastar's family orchards"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut-dark/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-walnut-dark/10" />
      </div>

      {/* Calm text side */}
      <div className="flex w-full flex-1 flex-col justify-between px-[4%] pb-12 pt-28 md:w-1/2 md:pb-16 md:pt-32">
        {/* Trust cluster */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-3"
        >
          <span className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-walnut-dark bg-olive/40 text-olive-bright"
              >
                <TreeDeciduous className="h-4 w-4" />
              </span>
            ))}
          </span>
          <span className="font-agora-label text-xs uppercase tracking-wider text-cream-dim">
            {t.hero.trustLabel}
          </span>
        </motion.div>

        {/* Headline anchored to bottom */}
        <div className="mt-10 md:mt-0">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="font-agora-label text-xs md:text-sm tracking-[0.25em] text-cream-dim uppercase"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-5"
          >
            <BoldSoft
              bold={t.hero.headline.bold}
              soft={t.hero.headline.soft}
              className="font-agora-display text-4xl leading-[1.15] sm:text-5xl md:text-6xl"
            />
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="mt-6 max-w-md text-base text-cream-dim md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-walnut-dark transition-colors hover:bg-amber-bright"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#offering"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-amber hover:text-amber-bright"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
