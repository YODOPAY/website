import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Hero />
      <NextSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </main>
  );
}
