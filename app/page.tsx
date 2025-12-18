import Hero from "@/components/section/hero";
import Portfolio from "@/components/section/portfolio/Portfolio";
import Service from "@/components/section/service";

export default function Home() {
  return (
    <main className="grow overflow-x-hidden">
      <Hero />
      <Service />
      <Portfolio />
    </main>
  );
}
