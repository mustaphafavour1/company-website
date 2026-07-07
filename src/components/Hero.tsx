"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Ship, ArrowRight } from "lucide-react";
import emberImg from "@/assets/photos/hero-ember.jpg";
import fruitImg from "@/assets/photos/hero-fruit.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-ember-black"
    >
      {/* Ember side — hand-harvested charcoal */}
      <div
        className="absolute inset-0"
        style={{ clipPath: "polygon(0 0, 58% 0, 42% 100%, 0 100%)" }}
      >
        <Image
          src={emberImg}
          alt="Glowing hand-cut Cuban charcoal embers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ember-black via-ember-black/50 to-ember-black/20" />
        <div className="absolute inset-0 bg-ember-black/25" />
      </div>

      {/* Fruit side — sun-ripened tropical harvest */}
      <div
        className="absolute inset-0"
        style={{ clipPath: "polygon(58% 0, 100% 0, 100% 100%, 42% 100%)" }}
      >
        <Image
          src={fruitImg}
          alt="Fresh tropical mangoes harvested in the Caribbean"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ember-black via-ember-black/50 to-ember-black/20" />
        <div className="absolute inset-0 bg-ember-black/20" />
      </div>

      {/* Ambient glowing seam — one corridor joining both harvests */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[50%] w-28 -translate-x-1/2"
        style={{
          transform: "translateX(-50%) skewX(-9deg)",
          background:
            "linear-gradient(90deg, rgba(214,94,42,0) 0%, rgba(214,94,42,0.55) 35%, rgba(227,163,51,0.55) 65%, rgba(227,163,51,0) 100%)",
          filter: "blur(38px)",
        }}
        animate={{ opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-[4%] pt-24">
        <motion.p
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="font-label text-xs md:text-sm tracking-[0.25em] text-guanabana-dim uppercase"
        >
          Authentic Cuban Terroir
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
          className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-brasa-bright">Cuban fire,</span>
          <span className="block italic text-mango-bright">
            island-ripe fruit.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mt-6 max-w-xl text-base md:text-lg text-guanabana/90"
        >
          Exclusive logistics corridors carry hand-harvested premium
          Caribbean charcoal and exotic fruits from Cuban soil to Europe&apos;s
          most discerning tables and hearths — without ever losing their
          origin.
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
            className="group inline-flex items-center gap-2 rounded-full bg-brasa px-6 py-3.5 text-sm font-semibold text-ember-black transition-colors hover:bg-brasa-bright"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#offering"
            className="inline-flex items-center gap-2 rounded-full border border-guanabana/30 px-6 py-3.5 text-sm font-semibold text-guanabana transition-colors hover:border-mango hover:text-mango"
          >
            See the Offering
          </a>
        </motion.div>
      </div>

      {/* Floating credential chip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-8 right-[4%] z-10 hidden items-center gap-3 rounded-2xl border border-guanabana/15 bg-ember-black-soft/50 px-5 py-4 backdrop-blur-md sm:flex"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-palm/40 text-palm-bright">
          <Ship className="h-4 w-4" />
        </span>
        <span className="font-label text-xs leading-tight text-guanabana">
          Direct Havana &#8646; Europe corridor
          <br />
          <span className="text-guanabana-dim">
            Single-source. Fully traceable.
          </span>
        </span>
      </motion.div>
    </section>
  );
}
