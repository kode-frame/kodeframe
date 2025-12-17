import Hero from "@/components/section/hero";
import Service from "@/components/section/service";
import Test from "@/components/section/test";

export default function Home() {
  return (
    <main className="grow overflow-x-hidden">
      <Hero />
      {/* <Service /> */}
      <Test />
    </main>
  );
}
