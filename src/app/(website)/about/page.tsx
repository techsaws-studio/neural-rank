import { AboutCtaSection } from "@/components/sections/about/about-cta";
import AboutHeroSection from "@/components/sections/about/about-hero";
import AboutToolsSection from "@/components/sections/about/about-tools";

import { PageMetadata } from "@/utils/page-matadata";

export const metadata = PageMetadata({
  title: "About Neural Rank",
  description:
    "Learn about Neural Rank’s mission to transform SEO with AI-driven intelligence, data-backed insights, and ethical optimization strategies for sustainable growth.",
  path: "/about",
});

function About() {
  return (
    <main className="lg:pt-[100px] pt-[80px]">
      <AboutHeroSection/>
      <AboutToolsSection/>
      <AboutCtaSection/>
    </main>
  );

  

}

export default About;
