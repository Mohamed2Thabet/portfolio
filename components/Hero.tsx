"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import { SparklesCore } from "./ui/sparkles";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { FaCloudArrowDown, FaLocationArrow } from "react-icons/fa6";

export function Hero() {
  const roles = [
    "React.js",
    "Next.js",
    "WordPress (Bricks Builder)",
  ];

  const words = ["modern", "responsive", "interactive", "beautiful"];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-transparent antialiased  overflow-hidden text-white">
      
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Name / Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-indigo-400 to-sky-400 text-transparent bg-clip-text"
        >
          Mohamed Thabet
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-neutral-400 font-light mb-10"
        >
          Frontend Developer — Expert in{" "}
          <span className="font-medium">
            <FlipWords
              words={roles}
              className="text-indigo-400 font-medium"
            />
          </span>
        </motion.h2>

        {/* Sparkles Line */}
        <div className="relative w-full md:w-[40rem] h-6 mx-auto mb-8">
          <motion.div initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }} className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <motion.div initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }} className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <motion.div initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <motion.div initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }} className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="white"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Dynamic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-4xl font-normal text-neutral-400 mb-12"
        >
          I craft <FlipWords words={words} /> <motion.span initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}>
            web experiences.
          </motion.span>
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
        
         <a href="#about">
          <MagicButton title="View Porjects" icon={<FaLocationArrow/>} position="left"/>
         </a>
        
         <a href="#about">
          <MagicButton title="Download CV" icon={<FaCloudArrowDown />} position="right"/>
         </a>
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40  " />
    </section>
  );
}
