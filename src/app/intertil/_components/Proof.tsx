"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Circled from "./Circled";
import { useLanguage } from "./i18n";

const statValues = [15, 40, 100, 48];

function ScrambleStat({
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

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 18;
    const timer = window.setInterval(() => {
      frame += 1;
      if (frame >= totalFrames) {
        setDisplay(value);
        window.clearInterval(timer);
      } else {
        setDisplay(Math.round(Math.random() * value));
      }
    }, 45);
    return () => window.clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 px-6 py-8 text-center first:pl-0 last:pr-0 md:text-left md:first:pl-0"
    >
      <p className="font-intertil-display text-4xl font-semibold text-asphalt md:text-5xl">
        {display}
        <span className="text-steel">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-asphalt-dim">{label}</p>
    </motion.div>
  );
}

export default function Proof() {
  const { t } = useLanguage();

  return (
    <section id="proof" className="bg-mist py-28 md:py-36">
      <div className="w-full px-[4%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-intertil-label text-xs md:text-sm tracking-[0.25em] text-asphalt-dim uppercase">
            {t.proof.eyebrow}
          </p>
          <h2 className="mt-4 font-intertil-display text-4xl font-semibold leading-[1.1] text-asphalt md:text-5xl">
            {t.proof.title.pre}
            <Circled>{t.proof.title.keyword}</Circled>
            {t.proof.title.post}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-asphalt-dim">{t.proof.body}</p>
        </motion.div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-col divide-y divide-asphalt/10 md:flex-row md:divide-x md:divide-y-0">
          {t.proof.stats.map((stat, i) => (
            <ScrambleStat
              key={stat.label}
              value={statValues[i]}
              suffix={stat.suffix}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
