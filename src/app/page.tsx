import Hero from "@/components/Hero";
import NextSection from "@/components/NextSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Hero />
      <NextSection />
    </main>
  );
}
