"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import BoldSoft from "./BoldSoft";
import { useLanguage } from "./i18n";

function RingStat({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference * 0.22; // ~78% filled arc

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.3,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, index]);

  return (
    <div ref={ref} className="flex items-center gap-4">
      <span className="relative flex h-16 w-16 shrink-0 items-center justify-center">
        <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="rgb(240 232 216 / 0.12)"
            strokeWidth="4"
          />
          <motion.circle
            cx="32"
            cy="32"
            r={radius}
            fill="none"
            stroke="rgb(196 138 62)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: inView ? targetOffset : circumference }}
            transition={{ duration: 1.3, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
      </span>
      <div>
        <p className="font-agora-display text-2xl font-semibold text-cream md:text-3xl">
          {display}
          <span className="text-amber-bright">{suffix}</span>
        </p>
        <p className="text-sm text-cream-dim">{label}</p>
      </div>
    </div>
  );
}

export default function Proof() {
  const { t } = useLanguage();
  const [s0, s1, s2, s3] = t.proof.stats;

  return (
    <section id="proof" className="bg-walnut py-28 md:py-36">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-[4%]">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            <RingStat value={s0.value} suffix={s0.suffix} label={s0.label} index={0} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="sm:justify-self-end"
          >
            <RingStat value={s1.value} suffix={s1.suffix} label={s1.label} index={1} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="font-agora-label text-xs md:text-sm tracking-[0.25em] text-cream-dim uppercase">
            {t.proof.eyebrow}
          </p>
          <h2 className="mt-4">
            <BoldSoft
              bold={t.proof.title.bold}
              soft={t.proof.title.soft}
              className="font-agora-display text-3xl leading-[1.2] md:text-4xl"
            />
          </h2>
          <p className="mt-5 text-cream-dim">{t.proof.body}</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <RingStat value={s2.value} suffix={s2.suffix} label={s2.label} index={2} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="sm:justify-self-end"
          >
            <RingStat value={s3.value} suffix={s3.suffix} label={s3.label} index={3} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
