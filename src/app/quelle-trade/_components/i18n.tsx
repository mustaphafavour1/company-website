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

// A headline built around one selectively-colored keyword, per Quelle
// Trade's standing headline mechanism — split into three parts so the
// keyword can sit anywhere in the sentence regardless of language order.
type KeywordHeadline = { pre: string; keyword: string; post: string };

type Category = {
  label: string;
  headline: string;
  description: string;
  specs: string[];
};

type Dict = {
  nav: { offering: string; whyUs: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    headline: KeywordHeadline;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  offering: {
    eyebrow: string;
    title: KeywordHeadline;
    subtitle: string;
    chickpeas: Category;
    lentils: Category;
    driedFruit: Category;
  };
  proof: {
    eyebrow: string;
    title: KeywordHeadline;
    body: string;
    stats: { value: string; label: string }[];
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
      eyebrow: "Mednarodna Trgovska Agencija",
      headline: {
        pre: "",
        keyword: "Doslednost",
        post: ", pridelana na izvoru.",
      },
      subtitle:
        "Neposredne pogodbe s kmetijami po Uzbekistanu in Kazahstanu prinašajo čičeriko, lečo in sušeno sadje enake velikosti, nizke vlage in globoke barve – serija za serijo.",
      ctaPrimary: "Zahtevaj Ponudbo",
      ctaSecondary: "Naša Ponudba",
      scrollHint: "Poglej pridelke",
    },
    offering: {
      eyebrow: "Ponudba",
      title: { pre: "Tri poti, ena ", keyword: "kakovost", post: "." },
      subtitle:
        "Vsak izdelek prihaja neposredno iz pogodbenih kmetij v Uzbekistanu in Kazahstanu, izbran za enotnost, ne za najnižjo ceno.",
      chickpeas: {
        label: "Čičerika",
        headline: "Enotna velikost, vsakič znova.",
        description:
          "Kabuli čičerika, izbrana glede na premer zrna in nizko vsebnost vlage, primerna za konzerviranje, praženje ali mletje v moko.",
        specs: [
          "Premer zrna 7–9 mm (po naročilu)",
          "Vlaga pod 12 %",
          "Razsuto v big-bag ali 25 kg vrečah",
          "Letni pridelek, sledljiv do kmetije",
        ],
      },
      lentils: {
        label: "Leča",
        headline: "Globoka barva, brez razbarvanja.",
        description:
          "Rdeča in zelena leča iz Kazahstana, sortirana po barvi in velikosti za enakomerno kuhanje serija za serijo.",
        specs: [
          "Rdeča leča (luščena) in zelena leča (cela)",
          "Sortirano po barvi in premeru",
          "Primesi in tujki pod 0,1 %",
          "Razsuto ali pakirano po naročilu",
        ],
      },
      driedFruit: {
        label: "Sušeno Sadje",
        headline: "Sušeno na soncu, ne v tovarni.",
        description:
          "Marelice in rozine, sušene na tradicionalen način v dolinah Fergane, brez dodanega sladkorja ali žveplovih dodatkov, če je tako naročeno.",
        specs: [
          "Marelice (cele in polovice)",
          "Rozine (temne in zlate)",
          "Na voljo brez žveplovih dodatkov",
          "Pakirano po higienskih standardih EU",
        ],
      },
    },
    proof: {
      eyebrow: "Zakaj Mi",
      title: { pre: "Poreklo, ki ga lahko ", keyword: "dokažemo", post: "." },
      body: "Vsaka pošiljka je sledljiva do konkretne pogodbene kmetije v Uzbekistanu ali Kazahstanu – ne do anonimnega zbirnega centra.",
      stats: [
        { value: "10+", label: "let trgovanja po Svilni poti" },
        { value: "25+", label: "pogodbenih kmetij" },
        { value: "100%", label: "sledljivost do izvora" },
        { value: "2", label: "državi izvora: Uzbekistan in Kazahstan" },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: {
        pre: "Naročite svojo naslednjo ",
        keyword: "pošiljko",
        post: ".",
      },
      subtitle:
        "Povejte nam, katero kulturo in kakšno količino potrebujete – odgovorimo z razpoložljivostjo glede na sezono.",
      phoneLabel: "Telefon",
      whatsappLabel: "WhatsApp",
      emailLabel: "E-pošta",
      officeLabel: "Pisarna",
      officeValue: "Ljubljana, Slovenija",
      hoursLabel: "Delovni Čas",
      hoursValue: "Pon–Pet, 9:00–17:00 CET",
      form: {
        nameLabel: "Polno ime",
        companyLabel: "Naziv podjetja",
        emailLabel: "E-poštni naslov",
        phoneLabel: "Telefon",
        messageLabel: "Katero kulturo iščete?",
        messagePlaceholder:
          "Čičerika, leča ali sušeno sadje – količina in časovni okvir",
        submitIdle: "Zahtevaj Ponudbo",
        submitSending: "Pošiljanje...",
        sentTitle: "Povpraševanje prejeto.",
        sentBody:
          "Kmalu se oglasimo z razpoložljivostjo glede na sezono in ceno.",
      },
    },
    footer: {
      tagline: "Svilna Pot Pridelkov — Uzbekistan & Kazahstan → Evropa",
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
      eyebrow: "International Trade Agency",
      headline: { pre: "", keyword: "Consistency", post: ", grown at the source." },
      subtitle:
        "Direct farm contracts across Uzbekistan and Kazakhstan deliver chickpeas, lentils, and dried fruit at uniform size, low moisture, and deep color — batch after batch.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "See the Offering",
      scrollHint: "See the crops",
    },
    offering: {
      eyebrow: "Offering",
      title: { pre: "Three routes, one ", keyword: "quality", post: "." },
      subtitle:
        "Every product comes directly from contracted farms in Uzbekistan and Kazakhstan, selected for uniformity, not the lowest price.",
      chickpeas: {
        label: "Chickpeas",
        headline: "Uniform size, every time.",
        description:
          "Kabuli chickpeas, graded by seed diameter and low moisture content, suited to canning, roasting, or milling into flour.",
        specs: [
          "7–9mm seed diameter (to order)",
          "Moisture below 12%",
          "Bulk in big-bag or 25kg sacks",
          "This season's harvest, traceable to the farm",
        ],
      },
      lentils: {
        label: "Lentils",
        headline: "Deep color, no fading.",
        description:
          "Red and green lentils from Kazakhstan, sorted by color and size for consistent cooking, batch after batch.",
        specs: [
          "Red lentils (split) and green lentils (whole)",
          "Sorted by color and diameter",
          "Foreign matter under 0.1%",
          "Bulk or packed to order",
        ],
      },
      driedFruit: {
        label: "Dried Fruits",
        headline: "Sun-dried, not factory-dried.",
        description:
          "Apricots and raisins, sun-dried the traditional way in the Fergana valley, with no added sugar or sulfur if requested.",
        specs: [
          "Apricots (whole and halved)",
          "Raisins (dark and golden)",
          "Available sulfur-free",
          "Packed to EU hygiene standards",
        ],
      },
    },
    proof: {
      eyebrow: "Why Us",
      title: { pre: "Provenance we can ", keyword: "prove", post: "." },
      body: "Every shipment is traceable to a specific contracted farm in Uzbekistan or Kazakhstan — not an anonymous collection point.",
      stats: [
        { value: "10+", label: "years trading the Silk Road" },
        { value: "25+", label: "contracted farms" },
        { value: "100%", label: "traceability to origin" },
        { value: "2", label: "countries of origin: Uzbekistan & Kazakhstan" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: { pre: "Order your next ", keyword: "shipment", post: "." },
      subtitle:
        "Tell us which crop and what volume you need — we'll respond with seasonal availability.",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      officeLabel: "Office",
      officeValue: "Ljubljana, Slovenia",
      hoursLabel: "Hours",
      hoursValue: "Mon–Fri, 9:00–17:00 CET",
      form: {
        nameLabel: "Full name",
        companyLabel: "Company name",
        emailLabel: "Email",
        phoneLabel: "Phone",
        messageLabel: "Which crop are you looking for?",
        messagePlaceholder: "Chickpeas, lentils, or dried fruit — volume and timeline",
        submitIdle: "Request a Quote",
        submitSending: "Sending...",
        sentTitle: "Enquiry received.",
        sentBody:
          "We'll be in touch shortly with seasonal availability and pricing.",
      },
    },
    footer: {
      tagline: "The Silk Road Crop Line — Uzbekistan & Kazakhstan → Europe",
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
