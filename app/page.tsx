import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertyTypesSection from "@/components/PropertyTypesSection";
import FeaturedListingsSection from "@/components/FeaturedListingsSection";
import TopLocationsSection from "@/components/TopLocationsSection";
import FindHomeSection from "@/components/FindHomeSection";
import LatestPropertiesSection from "@/components/LatestPropertiesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PropertyTypesSection />
      <FeaturedListingsSection />
      <TopLocationsSection />
      <FindHomeSection />
      <LatestPropertiesSection />
    </main>
  );
}
