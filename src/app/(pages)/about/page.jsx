"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 text-transparent mb-6 drop-shadow-lg">
          About NameCrafter
        </h1>

        <p className="text-lg md:text-xl text-orange-400 leading-relaxed mb-8">
          At <span className="font-bold bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 text-transparent">NameCrafter</span>, we believe a great name is the foundation of every amazing idea. Whether you're naming your brand, your next fantasy character, or your beloved pet — we craft the perfect names to match your vision.
        </p>

        <p className="text-md md:text-lg text-pink-600">
          With AI-powered suggestions and carefully curated lists, finding your ideal name is just a few clicks away. We make naming creative, fun, and effortless.
        </p>
      </motion.div>

      {/* Bottom Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 text-orange-400 text-sm tracking-wide uppercase"
      >
        <p> Powered by <Link href="https://muhammadwasiportfolio.vercel.app" target="_blank">Muhammad Wasi</Link> ✨</p>
      </motion.div>
    </section>
  );
};

export default About;
