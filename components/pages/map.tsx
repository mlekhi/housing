"use client";

import { FC } from "react";
import Map from "@/components/ui/map";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MapPage: FC = () => {
  return (
    <div>
      <motion.h1
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="text-4xl font-light tracking-tight text-zinc-900 md:text-5xl lg:text-6xl mb-6"
      >
        Interactive Map
      </motion.h1>
      <p className="text-zinc-600 pb-4">Explore the main student living areas and bus routes around Western University.</p>
      <Map />
    </div>
  );
};

export default MapPage;
