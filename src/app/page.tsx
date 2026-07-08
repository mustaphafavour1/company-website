import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sites = [
  {
    href: "/tierra-de-acogida",
    name: "Tierra D' Acogida SL",
    blurb:
      "Spanish importer of hand-harvested organic Cuban charcoal and tropical fruit.",
    accent: "#d65e2a",
  },
  {
    href: "/intertil",
    name: "Intertil d.o.o.",
    blurb:
      "Slovenian wholesale merchant of bulk beet sugar and industrial baking flour.",
    accent: "#2f5b8c",
  },
  {
    href: "/quelle-trade",
    name: "Quelle Trade, Import Export d.o.o.",
    blurb:
      "Slovenian trade agency sourcing chickpeas, lentils, and dried fruit from Central Asia.",
    accent: "#a84a2f",
  },
  {
    href: "/agorastar",
    name: "Agorastar",
    blurb:
      "Bulgarian processor and exporter of organic walnut kernels and in-shell walnuts.",
    accent: "#c48a3e",
  },
];

export default function SiteDirectory() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-neutral-950 px-[4%] py-24 text-neutral-100">
      <div className="w-full max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
          Site Directory
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Our Landing Pages
        </h1>
        <p className="mt-3 max-w-xl text-neutral-400">
          This repository hosts multiple standalone brand landing pages.
          Pick one below.
        </p>

        <ul className="mt-10 space-y-4">
          {sites.map((site) => (
            <li key={site.href}>
              <Link
                href={site.href}
                className="group flex items-center justify-between gap-6 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-5 transition-colors hover:border-neutral-600"
              >
                <span className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: site.accent }}
                  />
                  <span>
                    <span className="block text-lg font-medium text-neutral-50">
                      {site.name}
                    </span>
                    <span className="mt-1 block text-sm text-neutral-400">
                      {site.blurb}
                    </span>
                    <span className="mt-1 block font-mono text-xs text-neutral-500">
                      {site.href}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-200" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
