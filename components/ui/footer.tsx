"use client";

import { motion } from "framer-motion";
// import { HouseLogo } from "@/components/ui/houseLogo";

export const Footer = () => {
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
