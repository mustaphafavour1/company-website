"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Citrus, Check } from "lucide-react";
import charcoalImg from "@/assets/photos/offering-charcoal.jpg";
import fruitImg from "@/assets/photos/offering-fruit.jpg";

type Category = {
  key: string;
  label: string;
  icon: typeof Flame;
  image: StaticImageData;
  imageAlt: string;
  headline: string;
  description: string;
  specs: string[];
};

const categories: Category[] = [
  {
    key: "charcoal",
    label: "Cuban Charcoal",
    icon: Flame,
    image: charcoalImg,
    imageAlt: "Hand-cut organic Cuban lump charcoal",
    headline: "Slow-burned, hand-cut, and organic to the core.",
    description:
      "Marabú and hardwood lump charcoal, kiln-cut by hand in small batches — denser, longer-burning, and free of the fillers found in mass-market briquettes.",
    specs: [
      "Marabú lump charcoal (restaurant & grill grade)",
      "Hardwood briquettes (retail & bulk packs)",
      "Organic certified, no chemical binders",
      "Custom bagging and private label available",
    ],
  },
  {
    key: "fruit",
    label: "Tropical Fruit",
    icon: Citrus,
    image: fruitImg,
    imageAlt: "Freshly harvested Cuban mangoes in a market crate",
    headline: "Picked ripe, moved fast, landed fresh.",
    description:
      "Mango, guava, papaya, and plantain, hand-harvested at peak ripeness and routed through cold-chain logistics built specifically for this corridor.",
    specs: [
      "Mango, guava, papaya, plantain — seasonal availability",
      "Hand-harvested, graded for export at origin",
      "Cold-chain logistics, Havana to port of entry",
      "Flexible volumes for retail and food-service buyers",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Offering() {
  const [active, setActive] = useState(0);
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
            The Offering
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.1]">
            <span className="text-brasa-bright">Two harvests,</span>{" "}
            <span className="italic text-mango-bright">one corridor.</span>
          </h2>
          <p className="mt-5 text-guanabana/80">
            Every shipment carries either the fire or the fruit of Cuba — never
            a diluted middle ground. Choose a category to see what travels.
          </p>
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
