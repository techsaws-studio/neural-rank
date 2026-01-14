"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import AchievementStatsCard from "@/components/partials/achievement-stats-card";
import { AnimatedBadge } from "@/components/partials/animated-badge";

import {
  AchievementSectionContent01,
  AchievementSectionContent02,
} from "@/contents/home-page-content";

const AchievementSection = () => {
  return (
    <section className="section-padding-standard layout-standard flex flex-col lg:gap-[6rem] gap-12">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-14 w-max"
        >
          {[...AchievementSectionContent01, ...AchievementSectionContent01].map(
            (logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Partner logo"
                className="h-6 w-auto opacity-70 hover:opacity-100 transition"
              />
            )
          )}
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex flex-col gap-4 lg:h-[350px] py-4 pr-8">
          <AnimatedBadge
            heading="Thousands of Campaigns"
            className="w-fit border-border border-2"
          />

          <h3 className="text-3xl font-medium tracking-tight text-heading font-heading">
            Over <span className="text-primary-hover font-bold">2500+</span>{" "}
            Businesses Trust Neural Rank
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Every number here is real, earned, and growing every day because
            Neural Rank actually moves your business forward.
          </p>
        </div>

        {AchievementSectionContent02.map((stat, index) => (
          <AchievementStatsCard
            key={index}
            value={stat.value}
            label={stat.label}
            className={stat.hideOnMobile ? "max-lg:hidden" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default AchievementSection;
