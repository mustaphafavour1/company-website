import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offering from "@/components/Offering";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Offering />
      </main>
    </>
  );
}
