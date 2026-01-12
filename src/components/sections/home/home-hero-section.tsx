"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  CustomButton02,
  CustomButton03,
} from "@/components/partials/custom-buttons";

import StarsBg from "@/assets/images/stars.png";
import { ArrowRight, ChartNoAxesCombined } from "lucide-react";

function HomeHeroSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${StarsBg.src})`, backgroundPositionY }}
      animate={{ backgroundPositionX: StarsBg.width }}
      transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />

      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />

      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute w-[344px] h-[344px] md:h-[580px] md:w-[580px] opacity-20 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full" />
        </div>
      </motion.div>

      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      />

      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <div className="layout-standard relative mt-16">
        <h1 className="text-[12vw] md:text-[120px] md:leading-none font-light tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center font-heading uppercase">
          Real Rankings
        </h1>
        <p className="text-lg md:text-2xl text-foreground mt-5 text-center max-w-[70%] mx-auto font-foreground">
          Neural Rank is an AI-powered SEO platform designed to optimize
          content, uncover ranking opportunities, and scale organic traffic
          across modern search.
        </p>
        <div className="flex justify-center mt-8 items-center gap-4">
          <CustomButton02>
            Boost Your Ranking <ChartNoAxesCombined size={14} />
          </CustomButton02>
          <CustomButton03>
            Login into your Account{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
          </CustomButton03>
        </div>
      </div>
    </motion.section>
  );
}

export default HomeHeroSection;
