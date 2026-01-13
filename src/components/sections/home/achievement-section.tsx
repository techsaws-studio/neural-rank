"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import AchievementStatsCard from "@/components/partials/achievement-stats-card";

import acmeLogo from "../../../../public/logos/acme-logo.png";
import pulseLogo from "../../../../public/logos/pulse-logo.png";
import echoLogo from "../../../../public/logos/echo-logo.png";
import celestialLogo from "../../../../public/logos/celestial-logo.png";
import apexLogo from "../../../../public/logos/apex-logo.png";
import quantumLogo from "../../../../public/logos/quantum-logo.png";

const AchievementSection = () => {
  return (
    <section className="section-padding-standard layout-standard flex flex-col lg:gap-[6rem] gap-12">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-14 pr-14 -translate-x-1/2"
        >
          {[
            acmeLogo,
            pulseLogo,
            echoLogo,
            celestialLogo,
            apexLogo,
            quantumLogo,
            acmeLogo,
            pulseLogo,
            echoLogo,
            celestialLogo,
            apexLogo,
            quantumLogo,
          ].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Partner logo"
              className="h-6 w-auto opacity-70 hover:opacity-100 transition"
            />
          ))}
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4 md:h-[270px] py-4 pr-8">
          <Badge className="w-fit rounded-full bg-white/10 text-heading font-heading font-light backdrop-blur-md border border-white/20 text-[11px]">
            Thousands of Campaigns, One Smart Assistant
          </Badge>

          <h3 className="lg:text-4xl text-3xl font-medium tracking-tight text-heading font-heading">
            Over <span className="text-primary-hover">2500+</span> Businesses
            Trust Nerual Rank
          </h3>

          <p className="text-sm leading-relaxed">
            Every number here is real, earned, and growing every day because MY
            AIO actually moves your business forward.
          </p>
        </div>

        <AchievementStatsCard
          value="50M+"
          label="Data Points Analyzed"
          className="max-md:hidden"
        />
        <AchievementStatsCard
          value="10+"
          label="AI Trained Models"
          className="max-md:hidden"
        />
        <AchievementStatsCard value="70%" label="Drop in Manual Work" />
        <AchievementStatsCard value="1000+" label="Campaigns in Motion" />
        <AchievementStatsCard value="75%" label="Efficiency Boost" />
      </div>
    </section>
  );
};

export default AchievementSection;
