"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import StarsBg from "@/assets/images/stars.png";
import GlobeImg from "@/assets/images/globe-img.svg";

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
      <motion.div
        className="absolute top-1/2 left-1/2"
        style={{ x: "-50%", y: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 200,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src={GlobeImg}
          alt="Globe"
          className="h-64 w-64 md:h-[700px] md:w-[700px] invert opacity-50"
          priority
        />
      </motion.div>

      <div className="layout-standard relative mt-16">{/* content here */}</div>
    </motion.section>
  );
}

export default HomeHeroSection;
