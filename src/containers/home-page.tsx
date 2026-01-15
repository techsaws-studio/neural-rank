import {
  AboutSection01,
  AboutSection02,
} from "@/components/sections/home/about-sections";
import AchievementSection from "@/components/sections/home/achievement-section";
import HomeHeroSection from "@/components/sections/home/home-hero-section";
import ProcessSection from "@/components/sections/home/process-section";

function HomePage() {
  return (
    <main className="lg:pt-[100px] pt-[80px]">
      <HomeHeroSection />
      <AchievementSection />
      <AboutSection01 />
      <ProcessSection />
      <AboutSection02 />
    </main>
  );
}

export default HomePage;
