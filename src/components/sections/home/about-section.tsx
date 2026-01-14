"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { AnimatedBadge } from "@/components/partials/animated-badge";

import GlassShapeImg01 from "../../../../public/images/glass-shape-img-01.png";
import GlassShapeImg02 from "../../../../public/images/glass-shape-img-02.png";
import GlassShapeImg03 from "../../../../public/images/glass-shape-img-03.png";

function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const floatInVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      className="layout-standard md:py-4 py-2 flex flex-col gap-8 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="flex flex-col gap-4 mb-8"
        variants={containerVariants}
      >
        <motion.div variants={fadeUpVariants}>
          <AnimatedBadge heading="Modern Search & AI Discovery" />
        </motion.div>

        <motion.h1
          variants={fadeUpVariants}
          className="lg:text-6xl md:text-5xl text-3xl lg:max-w-4xl !leading-[1.2] font-medium tracking-tight text-heading font-heading uppercase"
        >
          AI-Driven SEO, Your <br className="max-lg:hidden" />
          <span className="text-primary-hover font-semibold">
            Real Rankings
          </span>
        </motion.h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <motion.div
          className="col-span-1 flex items-center max-md:flex-col justify-between"
          variants={containerVariants}
        >
          <motion.div variants={floatInVariants} className="max-md:hidden">
            <Image
              src={GlassShapeImg01}
              alt="glass-shape-img"
              className="w-[200px] h-auto"
            />
          </motion.div>

          <motion.div variants={floatInVariants}>
            <Image
              src={GlassShapeImg02}
              alt="glass-shape-img"
              className="md:w-[200px] h-auto"
            />
          </motion.div>

          <motion.div variants={floatInVariants} className="max-md:hidden">
            <Image
              src={GlassShapeImg03}
              alt="glass-shape-img"
              className="w-[200px] h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="col-span-1 flex flex-col gap-4"
          variants={containerVariants}
        >
          <motion.p
            variants={fadeUpVariants}
            className="leading-relaxed lg:text-xl md:text-lg text-base font-medium"
          >
            Neural Rank is an AI-powered SEO platform designed to help brands
            understand search intent, optimize content intelligently, and
            compete in an evolving search landscape shaped by both Google and
            AI-driven discovery engines.
          </motion.p>

          <motion.p
            variants={fadeUpVariants}
            className="leading-relaxed lg:text-xl md:text-lg text-base font-medium"
          >
            Instead of guesswork and outdated tactics, Neural Rank uses
            data-driven insights and machine intelligence to guide smarter SEO
            decisions—so teams can focus on sustainable growth, not short-term
            tricks.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
