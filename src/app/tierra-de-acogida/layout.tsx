import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tierra D' Acogida SL | Terruño Cubano Auténtico",
  description:
    "Tierra D' Acogida SL imports hand-harvested organic Cuban charcoal and sun-ripened tropical fruit into Europe through one exclusive logistics corridor.",
};

export default function TierraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fraunces.variable} ${plexMono.variable} theme-tierra flex flex-1 flex-col bg-ember-black text-guanabana font-body`}
    >
      {children}
    </div>
  );
}
