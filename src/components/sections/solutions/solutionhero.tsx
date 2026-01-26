"use client";

import Image from "next/image";

export function SolutionHeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Dotted vertical grid lines */}
?

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center pt-[150px]">
        {/* Top label */}
        <p className="text-gray-400 mb-6" style={{ fontSize: "14px" }}>
          Profound for AEO Teams
        </p>

        {/* Heading */}
        <h1
          className="text-white font-medium leading-tight max-w-[600px] mb-6 "
          style={{ fontSize: "56px" }}
        >
          Show up in
          <br />
          Answer Engines
        </h1>

        {/* Description */}
        <p
          className="text-gray-300 max-w-[620px] mb-10"
          style={{ fontSize: "18px" }}
        >
          Information is shifting from blue links to AI answers, meet your
          customers there
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-20">
          <button
            className="px-2 py-0 bg-white h-8 text-black font-medium rounded-lg hover:bg-gray-100 transition"
            style={{ fontSize: "14px" }}
          >
            Get Started
          </button>

          <button
            className="px-4 py-0 h-8 bg-[#1f1f1f] text-white font-medium rounded-lg hover:bg-[#2a2a2a] transition"
            style={{ fontSize: "14px" }}
          >
            Contact us
          </button>
        </div>

        {/* Bottom label */}
        <p
          className="text-gray-500 mb-10 pt-[100px]"
          style={{ fontSize: "16px" }}
        >
          Used by AEO teams at leading companies
        </p>
         
        {/* Logos */}
        <div className="flex items-center justify-center gap-20 flex-wrap">
          
          <Image
            src="/images/Zapier_idfZNtxiND_1.png"
            alt="Zapier"
            height={36}
            width={180}
            className="opacity-70 "
          />
          <Image
            src="/images/netflix-logo.svg"
            alt="Clay"
            height={36}
            width={180}
            className="opacity-70"
          />
          <Image
            src="/images/us-bank-01.png"
            alt="US Bank"
            height={36}
            width={180}
            className="opacity-70"
          />
          <Image
            src="/images/linkedin-logo-img.png"
            alt="Indeed"
            height={36}
            width={180}
            className="opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
