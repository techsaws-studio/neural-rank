import AchievementSection from "@/components/sections/home/achievement-section";
import HomeHeroSection from "@/components/sections/home/home-hero-section";

function HomePage() {
  return (
    <main className="lg:pt-[100px] pt-[80px]">
      <HomeHeroSection />
      <AchievementSection />
    </main>
  );
}

export default HomePage;
