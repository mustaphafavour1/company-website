"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type LanguageCode = "es" | "en" | "fr" | "de" | "it";

export const languages: {
  code: LanguageCode;
  label: string;
  implemented: boolean;
}[] = [
  { code: "es", label: "Español", implemented: true },
  { code: "en", label: "English", implemented: true },
  { code: "fr", label: "Français", implemented: false },
  { code: "de", label: "Deutsch", implemented: false },
  { code: "it", label: "Italiano", implemented: false },
];

type Dict = {
  nav: { offering: string; whyUs: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chipLine1: string;
    chipLine2: string;
  };
  offering: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    tabCharcoal: string;
    tabFruit: string;
    charcoal: { headline: string; description: string; specs: string[] };
    fruit: { headline: string; description: string; specs: string[] };
  };
  proof: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body1: string;
    body2: string;
    stats: string[];
  };
  contact: {
    eyebrow: string;
    titleA: string;
    titleB: string;
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

const dict: Record<"es" | "en", Dict> = {
  es: {
    nav: {
      offering: "Oferta",
      whyUs: "Confianza",
      contact: "Contacto",
      cta: "Solicitar Presupuesto",
    },
    hero: {
      eyebrow: "Terruño Cubano Auténtico",
      line1: "Fuego cubano,",
      line2: "fruta isleña madura.",
      subtitle:
        "Corredores logísticos exclusivos llevan carbón caribeño y frutas exóticas, recolectados a mano, desde la tierra cubana hasta las mesas y las brasas más exigentes de Europa — sin perder nunca su origen.",
      ctaPrimary: "Solicitar Presupuesto",
      ctaSecondary: "Ver la Oferta",
      chipLine1: "Corredor directo Habana ⇄ Europa",
      chipLine2: "Origen único. Totalmente trazable.",
    },
    offering: {
      eyebrow: "La Oferta",
      titleA: "Dos cosechas,",
      titleB: "un solo corredor.",
      subtitle:
        "Cada envío lleva el fuego o la fruta de Cuba — nunca un término medio diluido. Elige una categoría para ver qué viaja.",
      tabCharcoal: "Carbón Cubano",
      tabFruit: "Fruta Tropical",
      charcoal: {
        headline: "Carbón lento, cortado a mano y orgánico hasta la médula.",
        description:
          "Carbón vegetal de marabú y maderas duras, cortado a mano en pequeños lotes — más denso, de combustión más larga y libre de los aglutinantes de las briquetas industriales.",
        specs: [
          "Carbón en trozos de marabú (grado restaurante y parrilla)",
          "Briquetas de madera dura (venta al por menor y a granel)",
          "Certificado orgánico, sin aglutinantes químicos",
          "Envasado personalizado y marca blanca disponibles",
        ],
      },
      fruit: {
        headline: "Recogida madura, transportada rápido, entregada fresca.",
        description:
          "Mango, guayaba, papaya y plátano, cosechados a mano en su punto óptimo de maduración y gestionados mediante una cadena de frío diseñada específicamente para este corredor.",
        specs: [
          "Mango, guayaba, papaya, plátano — según temporada",
          "Cosechado a mano y clasificado para exportación en origen",
          "Cadena de frío, de La Habana al puerto de entrada",
          "Volúmenes flexibles para minoristas y hostelería",
        ],
      },
    },
    proof: {
      eyebrow: "Por Qué Nosotros",
      titleA: "Pruebas, no",
      titleB: "promesas.",
      body1:
        "Una web nueva no hace creíble a un negocio — un historial sí. Esto es lo que respalda cada envío que sale de Cuba con nuestro nombre.",
      body2:
        "Cada envío viaja con la documentación fitosanitaria y aduanera completa para la importación a la UE, con trazabilidad de origen único desde la cosecha hasta el puerto de entrada.",
      stats: [
        "Años importando directamente desde Cuba",
        "Socios europeos atendidos",
        "Cosecha manual y orgánica",
        "Corredor exclusivo: La Habana → Europa",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      titleA: "Lleva el terruño cubano",
      titleB: "a tu mercado.",
      subtitle:
        "Cuéntanos qué necesitas — un palé de prueba o un pedido estacional fijo — y te responderemos con disponibilidad y precios reales.",
      phoneLabel: "Teléfono",
      whatsappLabel: "WhatsApp",
      emailLabel: "Correo",
      officeLabel: "Oficina",
      officeValue: "Algeciras, España — puerto de entrada UE",
      hoursLabel: "Horario",
      hoursValue: "Lun–Vie, 9:00–18:00 CET",
      form: {
        nameLabel: "Nombre completo",
        companyLabel: "Nombre de la empresa",
        emailLabel: "Correo electrónico",
        phoneLabel: "Teléfono",
        messageLabel: "¿Qué te gustaría importar?",
        messagePlaceholder:
          "Volúmenes, categorías o un pedido de prueba que te gustaría hacer",
        submitIdle: "Solicitar Presupuesto",
        submitSending: "Enviando...",
        sentTitle: "Solicitud recibida.",
        sentBody:
          "Nos pondremos en contacto en breve con disponibilidad y precios para tu consulta.",
      },
    },
    footer: {
      tagline: "Terruño Cubano Auténtico — Habana ⇄ Europa",
      rights: "Todos los derechos reservados.",
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
      eyebrow: "Authentic Cuban Terroir",
      line1: "Cuban fire,",
      line2: "island-ripe fruit.",
      subtitle:
        "Exclusive logistics corridors carry hand-harvested premium Caribbean charcoal and exotic fruits from Cuban soil to Europe's most discerning tables and hearths — without ever losing their origin.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "See the Offering",
      chipLine1: "Direct Havana ⇄ Europe corridor",
      chipLine2: "Single-source. Fully traceable.",
    },
    offering: {
      eyebrow: "The Offering",
      titleA: "Two harvests,",
      titleB: "one corridor.",
      subtitle:
        "Every shipment carries either the fire or the fruit of Cuba — never a diluted middle ground. Choose a category to see what travels.",
      tabCharcoal: "Cuban Charcoal",
      tabFruit: "Tropical Fruit",
      charcoal: {
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
      fruit: {
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
    },
    proof: {
      eyebrow: "Why Us",
      titleA: "Proof, not",
      titleB: "promises.",
      body1:
        "A new website doesn't make a business credible — a track record does. This is what stands behind every shipment that leaves Cuba under our name.",
      body2:
        "Every shipment moves under full phytosanitary and customs documentation for EU import, with single-source traceability from harvest to port of entry.",
      stats: [
        "Years sourcing direct from Cuba",
        "European partners served",
        "Hand-harvested & organic",
        "Exclusive corridor: Havana → Europe",
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      titleA: "Bring Cuba's terroir",
      titleB: "to your market.",
      subtitle:
        "Tell us what you need — a trial pallet or a standing seasonal order — and we'll get back to you with real availability and pricing.",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      officeLabel: "Office",
      officeValue: "Algeciras, Spain — EU port of entry",
      hoursLabel: "Hours",
      hoursValue: "Mon–Fri, 9:00–18:00 CET",
      form: {
        nameLabel: "Full name",
        companyLabel: "Company name",
        emailLabel: "Email",
        phoneLabel: "Phone",
        messageLabel: "What are you looking to import?",
        messagePlaceholder:
          "Volumes, categories, or a trial order you'd like to place",
        submitIdle: "Request a Quote",
        submitSending: "Sending...",
        sentTitle: "Request received.",
        sentBody:
          "We'll be in touch shortly with availability and pricing for your enquiry.",
      },
    },
    footer: {
      tagline: "Authentic Cuban Terroir — Havana ⇄ Europe",
      rights: "All rights reserved.",
    },
  },
};

const LanguageContext = createContext<{
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  t: Dict;
} | null>(null);

const STORAGE_KEY = "tierra-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("es");

  function handleSetLang(l: LanguageCode) {
    setLang(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, l);
    }
  }

  const t = dict[lang === "en" ? "en" : "es"];

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
