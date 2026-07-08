"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type LanguageCode = "sl" | "en" | "fr" | "de" | "it";

export const languages: {
  code: LanguageCode;
  label: string;
  implemented: boolean;
}[] = [
  { code: "sl", label: "Slovenščina", implemented: true },
  { code: "en", label: "English", implemented: true },
  { code: "fr", label: "Français", implemented: false },
  { code: "de", label: "Deutsch", implemented: false },
  { code: "it", label: "Italiano", implemented: false },
];

// A headline built around one circled/pill-outlined keyword, per Intertil's
// standing headline mechanism — split into three parts so the keyword can
// sit anywhere in the sentence regardless of language word order.
type KeywordHeadline = { pre: string; keyword: string; post: string };

type Dict = {
  nav: { offering: string; whyUs: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    headline: KeywordHeadline;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statValue: string;
    statLabel: string;
    corridorsLabel: string;
    cities: string[];
  };
  offering: {
    eyebrow: string;
    title: KeywordHeadline;
    subtitle: string;
    sugar: {
      label: string;
      headline: string;
      description: string;
      specs: string[];
    };
    flour: {
      label: string;
      headline: string;
      description: string;
      specs: string[];
    };
  };
  proof: {
    eyebrow: string;
    title: KeywordHeadline;
    body: string;
    stats: { suffix: string; label: string }[];
  };
  contact: {
    eyebrow: string;
    title: KeywordHeadline;
    subtitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    officeLabel: string;
    officeValue: string;
    hoursLabel: string;
    hoursValue: string;
    form: {
      nameLabel: string;
      companyLabel: string;
      emailLabel: string;
      phoneLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitIdle: string;
      submitSending: string;
      sentTitle: string;
      sentBody: string;
    };
  };
  footer: { tagline: string; rights: string };
};

const dict: Record<"sl" | "en", Dict> = {
  sl: {
    nav: {
      offering: "Ponudba",
      whyUs: "Zakaj Mi",
      contact: "Kontakt",
      cta: "Zahtevaj Ponudbo",
    },
    hero: {
      eyebrow: "Slovenski Veletrgovec s Kmetijskimi Surovinami",
      headline: { pre: "", keyword: "Hitrost", post: " za vaš obrat." },
      subtitle:
        "Polne tovorne pošiljke sladkorja iz sladkorne pese in industrijske pekovske moke, speljane po preverjenih čezmejnih koridorjih naravnost do vaše proizvodnje.",
      ctaPrimary: "Zahtevaj Ponudbo",
      ctaSecondary: "Naša Ponudba",
      statValue: "15+",
      statLabel: "let na evropskih cestah",
      corridorsLabel: "Redni koridorji proti:",
      cities: ["München", "Dunaj", "Milano", "Zagreb", "Budimpešta"],
    },
    offering: {
      eyebrow: "Ponudba",
      title: { pre: "Dve surovini, en ", keyword: "koridor", post: "." },
      subtitle:
        "Vsaka pošiljka je poln tovornjak enega izdelka – nikoli mešan delni tovor, ki upočasni obe strani.",
      sugar: {
        label: "Sladkor iz Sladkorne Pese",
        headline: "Bel, kristalen, pripravljen za vašo proizvodno linijo.",
        description:
          "Sladkor iz sladkorne pese, dobavljen razsut ali v vrečah, mlet na zrnatost, ki jo zahteva vaš proces.",
        specs: [
          "Beli kristalni sladkor (razsuto ali v vrečah)",
          "Prilagojena zrnatost za industrijsko predelavo",
          "Skladiščenje v silosih ali big-bag vrečah",
          "Polna sledljivost od tovarne do obrata",
        ],
      },
      flour: {
        label: "Industrijska Pekovska Moka",
        headline: "Beljakovine, prilagojene vašemu pecivu.",
        description:
          "Bela pšenična moka za kruh in pecivo, mleta po evropskih standardih, z rednimi mesečnimi dobavami za neprekinjeno proizvodnjo.",
        specs: [
          "Pšenična moka tip 400/500 (kruh in pecivo)",
          "Prilagojena vsebnost beljakovin",
          "Razsuti prevoz v silo-cisternah ali vrečah",
          "Redne mesečne dobave po dogovorjenem urniku",
        ],
      },
    },
    proof: {
      eyebrow: "Zakaj Mi",
      title: { pre: "Zakaj nam ", keyword: "zaupajo", post: "." },
      body: "Vsaka pošiljka potuje s popolno carinsko dokumentacijo in CMR tovornim listom, po koridorju, ki smo ga vozili že stokrat prej.",
      stats: [
        { suffix: "+", label: "let izkušenj na evropskih cestah" },
        { suffix: "+", label: "obratov za predelavo hrane" },
        { suffix: "%", label: "polni tovori (FTL) – brez izjem" },
        { suffix: "h", label: "povprečni čezmejni tranzit" },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: {
        pre: "Premaknimo vaš naslednji ",
        keyword: "tovor",
        post: ".",
      },
      subtitle:
        "Povejte nam, koliko sladkorja ali moke potrebujete – odgovorimo z realno razpoložljivostjo in ceno.",
      phoneLabel: "Telefon",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-pošta",
      officeLabel: "Pisarna",
      officeValue: "Ljubljana, Slovenija — logistično središče",
      hoursLabel: "Delovni Čas",
      hoursValue: "Pon–Pet, 8:00–17:00 CET",
      form: {
        nameLabel: "Polno ime",
        companyLabel: "Naziv podjetja",
        emailLabel: "E-poštni naslov",
        phoneLabel: "Telefon",
        messageLabel: "Kaj potrebujete?",
        messagePlaceholder:
          "Količine, izdelek (sladkor/moka) ali poskusno naročilo",
        submitIdle: "Zahtevaj Ponudbo",
        submitSending: "Pošiljanje...",
        sentTitle: "Povpraševanje prejeto.",
        sentBody:
          "Kmalu se oglasimo z razpoložljivostjo in ceno za vaše povpraševanje.",
      },
    },
    footer: {
      tagline: "Hitrost Polnega Tovora — po Vsej Evropi",
      rights: "Vse pravice pridržane.",
    },
  },
  en: {
    nav: {
      offering: "Offering",
      whyUs: "Why Us",
      contact: "Contact",
      cta: "Request a Quote",
    },
    hero: {
      eyebrow: "Slovenian Agricultural Wholesale Merchant",
      headline: { pre: "", keyword: "Velocity", post: " for your plant." },
      subtitle:
        "Full truckloads of beet sugar and industrial baking flour, routed through proven cross-border corridors straight to your production line.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "See the Offering",
      statValue: "15+",
      statLabel: "years on European roads",
      corridorsLabel: "Regular corridors to:",
      cities: ["Munich", "Vienna", "Milan", "Zagreb", "Budapest"],
    },
    offering: {
      eyebrow: "Offering",
      title: { pre: "Two raw materials, one ", keyword: "corridor", post: "." },
      subtitle:
        "Every shipment is a full truckload of one product — never a mixed partial load that slows down both sides.",
      sugar: {
        label: "Beet Sugar",
        headline: "White, crystalline, ready for your production line.",
        description:
          "Beet sugar delivered bulk or bagged, milled to the granulation your process needs.",
        specs: [
          "White crystal sugar (bulk or bagged)",
          "Custom granulation for industrial processing",
          "Silo or big-bag storage",
          "Full traceability from mill to plant",
        ],
      },
      flour: {
        label: "Industrial Baking Flour",
        headline: "Protein content tailored to your bake.",
        description:
          "White wheat flour for bread and pastry, milled to European standards, with regular monthly deliveries for uninterrupted production.",
        specs: [
          "Type 400/500 wheat flour (bread and pastry)",
          "Custom protein content",
          "Bulk transport in silo tankers or bags",
          "Regular monthly deliveries on a fixed schedule",
        ],
      },
    },
    proof: {
      eyebrow: "Why Us",
      title: { pre: "Why they ", keyword: "trust", post: " us." },
      body: "Every shipment travels under full customs documentation and a CMR consignment note, on a corridor we've driven a hundred times before.",
      stats: [
        { suffix: "+", label: "years of experience on European roads" },
        { suffix: "+", label: "food processing plants served" },
        { suffix: "%", label: "full truckloads (FTL) — no exceptions" },
        { suffix: "h", label: "average cross-border transit" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: { pre: "Let's move your next ", keyword: "load", post: "." },
      subtitle:
        "Tell us how much sugar or flour you need — we'll respond with real availability and pricing.",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      officeLabel: "Office",
      officeValue: "Ljubljana, Slovenia — logistics hub",
      hoursLabel: "Hours",
      hoursValue: "Mon–Fri, 8:00–17:00 CET",
      form: {
        nameLabel: "Full name",
        companyLabel: "Company name",
        emailLabel: "Email",
        phoneLabel: "Phone",
        messageLabel: "What do you need?",
        messagePlaceholder: "Volumes, product (sugar/flour), or a trial order",
        submitIdle: "Request a Quote",
        submitSending: "Sending...",
        sentTitle: "Enquiry received.",
        sentBody:
          "We'll be in touch shortly with availability and pricing for your enquiry.",
      },
    },
    footer: {
      tagline: "Full Truckload Velocity — Across Europe",
      rights: "All rights reserved.",
    },
  },
};

const LanguageContext = createContext<{
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  t: Dict;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("sl");
  const t = dict[lang === "en" ? "en" : "sl"];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
