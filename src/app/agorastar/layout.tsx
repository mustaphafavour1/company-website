import type { Metadata } from "next";
import { Bitter, Ubuntu_Mono } from "next/font/google";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Agorastar | Три поколения овощна градина",
  description:
    "Agorastar processes and exports organic walnut kernels and bulk in-shell walnuts from Bulgarian family orchards, at a scale European food manufacturers can plan around.",
};

export default function AgorastarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${bitter.variable} ${ubuntuMono.variable} theme-agora flex flex-1 flex-col bg-walnut-dark text-cream font-body`}
    >
      {children}
    </div>
  );
}
