import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";
import ThirdSection from "@/components/ThirdSection";
import PlansSection from "@/components/PlansSection";
import GoalSection from "@/components/GoalSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollFx from "@/components/ScrollFx";
import { ReserveTagProvider } from "@/contexts/ReserveTagContext";

export default function Home() {
  return (
    <ReserveTagProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-0">
        <Header />
        <Hero />
        <NextSection />
        <ThirdSection />
        <PlansSection />
        <GoalSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <Footer />
        <CookieBanner />
        <ScrollFx />
        {/* Without JavaScript nothing would ever reveal, so show everything */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important}.reveal-write-inner{clip-path:none!important}"}</style>
        </noscript>
      </main>
    </ReserveTagProvider>
  );
}
