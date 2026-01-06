import Hero from "@/components/section/hero";
import Project from "@/components/section/project";
import Service from "@/components/section/service";
import WhyChooseUs from "@/components/section/whychooseus";

export default function Home() {
  return (
    <main className="bg-tech-navy">
      <Hero />
      <Service />
      <Project />
      <WhyChooseUs />
    </main>
  );
}
