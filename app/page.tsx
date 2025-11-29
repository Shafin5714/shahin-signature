import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertyTypesSection from "@/components/PropertyTypesSection";
import FeaturedListingsSection from "@/components/FeaturedListingsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertyTypesSection />
      <FeaturedListingsSection />
    </main>
  );
}
