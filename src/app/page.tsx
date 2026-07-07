import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offering from "@/components/Offering";
import Proof from "@/components/Proof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Offering />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
