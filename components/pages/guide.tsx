"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { BackgroundContainer } from "@/components/ui/backgroundContainer";
import { MenuBar } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";
import { CollapsibleSection } from "@/components/ui/collapsibleSection";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const HousingGuide: FC = () => {
  return (
    <BackgroundContainer>
      <MenuBar />
      <main className="relative z-20 flex flex-grow items-center py-16 lg:py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 px-6">
          {/* Title */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center space-y-4"
          >
            <h1 className="text-5xl font-light tracking-tight text-zinc-900 md:text-6xl">
              Housing Guide for Students
            </h1>
            <p className="max-w-2xl text-center text-lg text-zinc-600">
              Everything you need to know about finding the perfect student housing in London.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col space-y-12 items-left w-full"
          >
            <CollapsibleSection title="Student-Dense Areas">
              <p>When it comes to off-campus housing in London, ON, there are really five ‘desirable areas’ for students to live in, all assessed on certain criteria shown below. The order is not suggestive of any area being better than others.</p>
              <ul>
                <li><strong>Proximity to Campus (Travel Time to University Community Centre)</strong></li>
                <li><strong>Access to Amenities and Essential Services</strong></li>
                <li><strong>Types of Housing (Major Properties)</strong></li>
                <li><strong>Social</strong></li>
              </ul>
            </CollapsibleSection>

            <CollapsibleSection title="Student-Dense Areas">
              <p>When it comes to off-campus housing in London, ON, there are really five ‘desirable areas’ for students to live in, all assessed on certain criteria shown below. The order is not suggestive of any area being better than others.</p>
              <ul>
                <li><strong>Proximity to Campus (Travel Time to University Community Centre)</strong></li>
                <li><strong>Access to Amenities and Essential Services</strong></li>
                <li><strong>Types of Housing (Major Properties)</strong></li>
                <li><strong>Social</strong></li>
              </ul>
            </CollapsibleSection>
            
            {/* Repeat for other sections */}
          </motion.div>
        </div>
      </main>
      <Footer />
    </BackgroundContainer>
  );
};

