import HomeHeroSection from "@/components/sections/home/home-hero-section";
import { LogoTickerSection } from "@/components/sections/home/logo-ticker-section";

function HomePage() {
  return (
    <main className="h-[200vh]">
      <HomeHeroSection />
      <LogoTickerSection />
    </main>
  );
}

export default HomePage;
