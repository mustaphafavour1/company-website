import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Offering from "./_components/Offering";
import Proof from "./_components/Proof";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import { LanguageProvider } from "./_components/i18n";

export default function QuelleTradePage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Offering />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
