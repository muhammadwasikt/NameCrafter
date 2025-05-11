"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () =>{
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight"
      >
        Welcome to NameCrafter
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-gray-700 max-w-2xl"
      >
        Generate unique, magical names in seconds!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8"
      >
        <Button className="px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          Generate Names
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-10"
      >
        <Image 
          src="/wizard.png"  // apni wizard image ka correct path dalna
          alt="Wizard creating magic"
          width={400}
          height={400}
          className="mx-auto drop-shadow-2xl"
        />
      </motion.div>

    </section>
  );
}

export default Hero;

