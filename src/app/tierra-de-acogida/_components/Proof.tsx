"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Leaf, Route, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "./i18n";

const statMeta = [
  { value: 12, suffix: "+", icon: Leaf },
  { value: 30, suffix: "+", icon: Users },
  { value: 100, suffix: "%", icon: ShieldCheck },
  { value: 1, suffix: "", icon: Route },
];

function StatTile({
  value,
  suffix,
  label,
  icon: Icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: typeof Leaf;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-guanabana/12 bg-gradient-to-br from-ember-black-soft to-ember-black p-6 transition-colors hover:border-mango/30"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brasa/15 text-brasa-bright">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-5 font-display text-4xl md:text-5xl text-guanabana">
        {display}
        <span className="text-mango-bright">{suffix}</span>
      </p>
      <span
        className="mt-3 block h-px bg-gradient-to-r from-brasa via-mango to-transparent"
        style={{
          transform: inView ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s",
        }}
      />
      <p className="mt-3 text-sm text-guanabana/75">{label}</p>
    </motion.div>
  );
}

export default function Proof() {
  const { t } = useLanguage();
  const stats = statMeta.map((m, i) => ({ ...m, label: t.proof.stats[i] }));

  return (
    <section id="proof" className="bg-ember-black-soft/40 py-28 md:py-36">
      <div className="grid w-full gap-14 px-[4%] md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="font-label text-xs md:text-sm tracking-[0.25em] text-guanabana-dim uppercase">
            {t.proof.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.1]">
            <span className="text-brasa-bright">{t.proof.titleA}</span>
            <br />
            <span className="italic text-mango-bright">{t.proof.titleB}</span>
          </h2>
          <p className="mt-5 max-w-md text-guanabana/80">{t.proof.body1}</p>
          <p className="mt-6 max-w-md text-sm text-guanabana-dim">
            {t.proof.body2}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <StatTile
              value={stat.value}
              suffix={stat.suffix}
              icon={stat.icon}
              label={stat.label}
              index={i}
              key={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
