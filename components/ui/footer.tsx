"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full border-t border-zinc-200 bg-white/50 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between text-zinc-600">
        {/* Left: GitHub Contribution Link */}
        <Link
          href="https://github.com/mlekhi/housing"
          target="_blank"
          className="text-sm font-medium transition-colors hover:text-zinc-900"
        >
          Want to contribute to this guide? →
        </Link>

        {/* Right: Footer Navigation Links */}
        <div className="flex space-x-6">
          <Link
            href="/about"
            className="text-sm transition-colors hover:text-zinc-900"
          >
            About
          </Link>
          <Link
            href="/guide"
            className="text-sm transition-colors hover:text-zinc-900"
          >
            Guide
          </Link>
          <Link
            href="/marketplace"
            className="text-sm transition-colors hover:text-zinc-900"
          >
            Housing
          </Link>
        </div>
      </div>
    </motion.div>
  );
};