import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertyTypesSection from "@/components/PropertyTypesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertyTypesSection />
    </main>
  );
}
