"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type LanguageCode = "bg" | "en" | "fr" | "de" | "it";

export const languages: {
  code: LanguageCode;
  label: string;
  implemented: boolean;
}[] = [
  { code: "bg", label: "Български", implemented: true },
  { code: "en", label: "English", implemented: true },
  { code: "fr", label: "Français", implemented: false },
  { code: "de", label: "Deutsch", implemented: false },
  { code: "it", label: "Italiano", implemented: false },
];

// A headline built from an assertive bold line followed by a softer,
// qualifying line — Agorastar's standing headline mechanism, applied
// consistently across every major heading on the page.
type BoldSoftHeadline = { bold: string; soft: string };

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
    headline: BoldSoftHeadline;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustLabel: string;
  };
  offering: {
    eyebrow: string;
    title: BoldSoftHeadline;
    subtitle: string;
    kernels: Category;
    inshell: Category;
  };
  proof: {
    eyebrow: string;
    title: BoldSoftHeadline;
    body: string;
    stats: { value: number; suffix: string; label: string }[];
  };
  contact: {
    eyebrow: string;
    title: BoldSoftHeadline;
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

const dict: Record<"bg" | "en", Dict> = {
  bg: {
    nav: {
      offering: "Продукти",
      whyUs: "Защо Ние",
      contact: "Контакти",
      cta: "Заявете Оферта",
    },
    hero: {
      eyebrow: "Български Производител И Износител На Орехи",
      headline: {
        bold: "Три поколения овощна градина.",
        soft: "Един европейски доставен канал.",
      },
      subtitle:
        "Биологични орехови ядки и черупкови орехи от семейни насаждения, доставяни в обем, на който преработвателните предприятия в Европа могат да разчитат.",
      ctaPrimary: "Заявете Оферта",
      ctaSecondary: "Вижте Продуктите",
      trustLabel: "Основано от семейство овощари, трето поколение",
    },
    offering: {
      eyebrow: "Продукти",
      title: { bold: "Едно дърво,", soft: "два продукта." },
      subtitle:
        "От същото дърво – ядки за директна консумация и преработка, и черупкови орехи за пазари, които ценят автентичността на целия плод.",
      kernels: {
        label: "Орехови Ядки",
        headline: "Светли, цели половинки, готови за пакетиране.",
        description:
          "Биологично сертифицирани орехови ядки, сортирани по цвят и цялост на половинката, за пекарната, шоколадовата и снаксовата индустрия.",
        specs: [
          "Цели половинки и четвъртинки",
          "Сортирани по цвят (екстра светли до кехлибарени)",
          "Биологичен сертификат по стандартите на ЕС",
          "Вакуумно пакетиране или насипно",
        ],
      },
      inshell: {
        label: "Черупкови Орехи",
        headline: "Еднакъв размер, чиста черупка.",
        description:
          "Цели орехи в черупка, калибрирани по размер, за търговците на дребно и пазарите, които предпочитат ореха в естествения му вид.",
        specs: [
          "Калибрирани по размер (28mm+)",
          "Светла, чиста черупка без петна",
          "Достъпни в чували или кашони",
          "Реколта на текущата година",
        ],
      },
    },
    proof: {
      eyebrow: "Защо Ние",
      title: { bold: "Наследство,", soft: "доказано с обем." },
      body: "Три поколения на едно и също стопанство стоят зад всяка пратка, която напуска България с нашето име.",
      stats: [
        { value: 60, suffix: "+", label: "години семейна традиция" },
        { value: 500, suffix: "+", label: "тона годишен обем" },
        { value: 100, suffix: "%", label: "биологично сертифицирано" },
        { value: 15, suffix: "+", label: "държави купувачи в ЕС" },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: { bold: "Готови сме за", soft: "вашата поръчка." },
      subtitle:
        "Кажете ни колко ядки или черупкови орехи ви трябват – ще отговорим с реална наличност и цена.",
      phoneLabel: "Телефон",
      whatsappLabel: "WhatsApp",
      emailLabel: "Имейл",
      officeLabel: "Офис",
      officeValue: "Пловдив, България",
      hoursLabel: "Работно Време",
      hoursValue: "Пон–Пет, 9:00–18:00 EET",
      form: {
        nameLabel: "Пълно име",
        companyLabel: "Име на фирмата",
        emailLabel: "Имейл адрес",
        phoneLabel: "Телефон",
        messageLabel: "От какво се нуждаете?",
        messagePlaceholder: "Ядки или черупкови орехи – количество и период",
        submitIdle: "Заявете Оферта",
        submitSending: "Изпращане...",
        sentTitle: "Заявката е получена.",
        sentBody:
          "Ще се свържем с вас скоро с наличност и цена за вашата заявка.",
      },
    },
    footer: {
      tagline: "Родово Наследство В Европейски Мащаб",
      rights: "Всички права запазени.",
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
      eyebrow: "Bulgarian Walnut Producer & Exporter",
      headline: {
        bold: "Three generations of orchard.",
        soft: "One European supply line.",
      },
      subtitle:
        "Organic walnut kernels and in-shell walnuts from family orchards, delivered at a volume European processing plants can actually plan around.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "See the Offering",
      trustLabel: "Founded by a third-generation orchard family",
    },
    offering: {
      eyebrow: "Offering",
      title: { bold: "One tree,", soft: "two products." },
      subtitle:
        "From the same tree — kernels for direct consumption and processing, and in-shell walnuts for markets that value the whole nut's authenticity.",
      kernels: {
        label: "Walnut Kernels",
        headline: "Light, whole halves, ready to pack.",
        description:
          "Organic-certified walnut kernels, graded by color and halving ratio, for the bakery, chocolate, and snack industries.",
        specs: [
          "Whole halves and quarters",
          "Graded by color (extra light to amber)",
          "EU-standard organic certification",
          "Vacuum-packed or bulk",
        ],
      },
      inshell: {
        label: "In-Shell Walnuts",
        headline: "Uniform size, clean shell.",
        description:
          "Whole in-shell walnuts, calibrated by size, for retailers and markets that prefer the walnut in its natural form.",
        specs: [
          "Size-calibrated (28mm+)",
          "Light, clean, unblemished shell",
          "Available in sacks or cartons",
          "Current season's harvest",
        ],
      },
    },
    proof: {
      eyebrow: "Why Us",
      title: { bold: "Heritage,", soft: "proven with volume." },
      body: "Three generations of the same farm stand behind every shipment that leaves Bulgaria under our name.",
      stats: [
        { value: 60, suffix: "+", label: "years of family tradition" },
        { value: 500, suffix: "+", label: "tonnes shipped annually" },
        { value: 100, suffix: "%", label: "organic certified" },
        { value: 15, suffix: "+", label: "EU buyer countries" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: { bold: "Ready for", soft: "your order." },
      subtitle:
        "Tell us how many kernels or in-shell walnuts you need — we'll respond with real availability and pricing.",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      officeLabel: "Office",
      officeValue: "Plovdiv, Bulgaria",
      hoursLabel: "Hours",
      hoursValue: "Mon–Fri, 9:00–18:00 EET",
      form: {
        nameLabel: "Full name",
        companyLabel: "Company name",
        emailLabel: "Email",
        phoneLabel: "Phone",
        messageLabel: "What do you need?",
        messagePlaceholder: "Kernels or in-shell walnuts — quantity and timeframe",
        submitIdle: "Request a Quote",
        submitSending: "Sending...",
        sentTitle: "Enquiry received.",
        sentBody:
          "We'll be in touch shortly with availability and pricing for your enquiry.",
      },
    },
    footer: {
      tagline: "Family Heritage at European Scale",
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
  const [lang, setLang] = useState<LanguageCode>("bg");
  const t = dict[lang === "en" ? "en" : "bg"];

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
