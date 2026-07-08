"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Accent from "./Accent";
import { useLanguage } from "./i18n";

function SweepStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="border-l-2 border-ink/10 pl-5"
    >
      <div className="relative inline-block font-quelle-display text-4xl italic md:text-5xl">
        <span
          aria-hidden
          style={{ WebkitTextStroke: "1.2px rgb(32 29 46 / 0.5)", color: "transparent" }}
        >
          {value}
        </span>
        <motion.span
          className="absolute inset-0 text-terracotta"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: inView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
          transition={{ duration: 1.1, delay: index * 0.1 + 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {value}
        </motion.span>
      </div>
      <p className="mt-2 text-sm text-ink-dim">{label}</p>
    </motion.div>
  );
}

export default function Proof() {
  const { t } = useLanguage();

  return (
    <section id="proof" className="bg-sand-dim py-28 md:py-36">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-[4%] md:grid-cols-2 md:gap-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12">
          {t.proof.stats.map((stat, i) => (
            <SweepStat key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="font-quelle-label text-xs md:text-sm tracking-[0.25em] text-ink-dim uppercase">
            {t.proof.eyebrow}
          </p>
          <h2 className="mt-4 font-quelle-display text-4xl italic leading-[1.1] text-ink md:text-5xl">
            {t.proof.title.pre}
            <Accent>{t.proof.title.keyword}</Accent>
            {t.proof.title.post}
          </h2>
          <p className="mt-5 max-w-md text-ink-dim">{t.proof.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
