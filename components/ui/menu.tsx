"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {HouseLogo} from "@/components/ui/houseLogo";
import {HouseLogoTitle} from "@/components/ui/houseLogoTitle";

export const MenuBar = () => {
  // Animation variants
  const staggerChildren = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full px-6 py-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo for Desktop */}
        <div className="hidden lg:block">
          <HouseLogoTitle />
        </div>
        {/* Logo for Mobile */}
        <div className="block lg:hidden">
          <HouseLogo />
        </div>

        {/* Menu Links */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="flex items-center space-x-6"
        >
          <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
            <Link
              href="/about"
              className="text-zinc-600 transition-colors hover:text-zinc-900"
            >
              About
            </Link>
          </motion.div>
          <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
            <Link
              href="/guide"
              className="text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Guide
            </Link>
          </motion.div>
          {/* <motion.div variants={fadeIn} whileHover={{ y: -2 }}>
            <Link
              href="/marketplace"
              className="text-zinc-600 transition-colors hover:text-zinc-900"
            >
              Housing
            </Link>
          </motion.div> */}
        </motion.div>
      </div>
    </motion.nav>
  );
};
