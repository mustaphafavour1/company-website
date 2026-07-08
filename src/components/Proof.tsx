"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Leaf, Route, ShieldCheck, Users } from "lucide-react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: typeof Leaf;
};

const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years sourcing direct from Cuba", icon: Leaf },
  { value: 30, suffix: "+", label: "European partners served", icon: Users },
  { value: 100, suffix: "%", label: "Hand-harvested & organic", icon: ShieldCheck },
  { value: 1, suffix: "", label: "Exclusive corridor: Havana → Europe", icon: Route },
];

function StatTile({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.4,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, stat.value, index]);

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
        <span className="text-mango-bright">{stat.suffix}</span>
      </p>
      <span
        className="mt-3 block h-px bg-gradient-to-r from-brasa via-mango to-transparent"
        style={{
          transform: inView ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s",
        }}
      />
      <p className="mt-3 text-sm text-guanabana/75">{stat.label}</p>
    </motion.div>
  );
}

export default function Proof() {
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
            Why Us
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.1]">
            <span className="text-brasa-bright">Proof, not</span>
            <br />
            <span className="italic text-mango-bright">promises.</span>
          </h2>
          <p className="mt-5 max-w-md text-guanabana/80">
            A new website doesn&apos;t make a business credible — a track
            record does. This is what stands behind every shipment that
            leaves Cuba under our name.
          </p>
          <p className="mt-6 max-w-md text-sm text-guanabana-dim">
            Every shipment moves under full phytosanitary and customs
            documentation for EU import, with single-source traceability
            from harvest to port of entry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <StatTile stat={stat} index={i} key={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
