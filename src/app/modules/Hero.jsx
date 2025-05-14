"use client";

import { motion } from "framer-motion";
import Categories from "@/components/own/Categories";

const Hero = () => {
  return (
    <section className="w-full px-4 h-full ">
      <div className="w-full h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-[300px]:text-xl text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tight leading-tight cursor-pointer"
      >
        Welcome to NameCrafter
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-2xl text-orange-500 max-w-2xl hover:text-pink-600 cursor-pointer"
      >
        Generate unique, magical names in seconds!
      </motion.p>
      </div>

      <div className="w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-4 text-sm w-full"
      >
        <Categories />
      </motion.div>
      </div>
    </section>
  );
}

export default Hero;

