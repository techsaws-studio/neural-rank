"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function AchievementStatsCard({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 85%" },
      }
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Card
        className={cn(
          "relative overflow-hidden rounded-2xl lg:h-[350px] h-full py-8 bg-transparent border-2 border-border",
          className
        )}
      >
        <CardContent className="p-0 flex flex-col items-center justify-center text-center gap-2 h-full">
          <span className="lg:text-6xl text-4xl font-semibold font-heading text-[color:var(--heading)] tracking-tight">
            {value}
          </span>
          <span className="text-sm text-[color:var(--muted-foreground)]">
            {label}
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default AchievementStatsCard;
