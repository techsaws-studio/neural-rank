"use client";

import { Button } from "@/components/ui/button";

export function AboutCtaSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "110vh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url(/images/86f2a70f475a5a70c41929de27cdbffe00b67a35-scaled.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative text-center h-full w-full flex flex-col justify-end pb-[100px] pl-[100px] ">
        <div className="max-w-[1500px]">
          {/* Main Heading */}
          <Button
            variant="outline"
            className="border border-gray-600 text-gray-300  rounded-full px-6 py-2 bg-transparent"
          >
            Join Us
          </Button>
          <h1
            className="font-bold text-white mb-6 font-normal tracking-[-0.02em] leading-tight"
            style={{ fontSize: "64px" }}
          >
            Born from chaos, Driven <br /> by AI, Backed by experts
          </h1>

          {/* Subheading */}
          <p
            className="text-white mb-8 text-balance"
            style={{ fontSize: "18px" }}
          >
            Be part of a team shaping the next generation of AI-powered business
            tools.
          </p>

          {/* CTA Button */}
          <button
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
            style={{ fontSize: "14px" }}
          >
            Get Started
            <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
