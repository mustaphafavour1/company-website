import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offering from "@/components/Offering";
import Proof from "@/components/Proof";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Offering />
        <Proof />
      </main>
    </>
  );
}
