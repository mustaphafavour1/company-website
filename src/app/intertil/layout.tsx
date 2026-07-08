import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Intertil d.o.o. | Hitrost za vaš obrat",
  description:
    "Intertil d.o.o. organizira polne tovorne pošiljke sladkorja iz sladkorne pese in industrijske pekovske moke po Evropi.",
};

export default function IntertilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} theme-intertil flex flex-1 flex-col bg-sugar-white text-asphalt font-body`}
    >
      {children}
    </div>
  );
}
