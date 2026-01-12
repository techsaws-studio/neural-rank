"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "@/assets/logos/acme-logo.png";
import pulseLogo from "@/assets/logos/pulse-logo.png";
import echoLogo from "@/assets/logos/echo-logo.png";
import celestialLogo from "@/assets/logos/celestial-logo.png";
import apexLogo from "@/assets/logos/apex-logo.png";
import quantumLogo from "@/assets/logos/quantum-logo.png";

export const LogoTickerSection = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="layout-standard">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="font-heading font-medium">
              Trusted by top innovative teams
            </h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_0%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
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
                  src={logo}
                  key={index}
                  className="h-6 w-auto"
                  alt="Parnerts Logo"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
