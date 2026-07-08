import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Mono } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Quelle Trade, Import Export d.o.o. | Doslednost, pridelana na izvoru",
  description:
    "Quelle Trade sources chickpeas, lentils, and dried fruit through direct farm contracts across Uzbekistan and Kazakhstan — the Silk Road crop line.",
};

export default function QuelleTradeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${cormorant.variable} ${spaceMono.variable} theme-quelle flex flex-1 flex-col bg-sand text-ink font-body`}
    >
      {children}
    </div>
  );
}
