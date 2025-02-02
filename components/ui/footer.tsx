"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import { HouseLogo } from "@/components/ui/houseLogo";

export const Footer = () => {
  const staggerChildren = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="w-full border-t border-zinc-200 bg-white/50 backdrop-blur-sm"
  >
    <div className="mx-auto max-w-7xl px-6 py-8">
    </div>
  </motion.div>
  );
};
