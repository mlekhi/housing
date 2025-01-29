'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MenuBar } from '@/components/ui/menu';
import { BackgroundContainer } from '@/components/ui/backgroundContainer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const About: FC = () => {
  return (
    <BackgroundContainer>
      <MenuBar />
      <main className="relative z-20 flex flex-grow items-center py-16 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6">
          {/* Header Section */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center space-y-6"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl font-light tracking-tight text-zinc-900 md:text-6xl"
            >
              About Us
            </motion.h1>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col space-y-12"
          >
            {/* Mission Section */}
            <motion.div variants={fadeIn} className="space-y-2">
            <p className="text-zinc-600 max-w-3xl mx-auto">
                Finding housing in London is tough.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-2">
            <p className="text-zinc-600 max-w-3xl mx-auto">
                As students ourselves, we experienced the challenges of finding housing firsthand—from understanding neighborhoods to avoiding scams.
                We believe that finding a home away from home should be easy and accessible for all students. 
                That’s why we created this guide: to develop a shared database of we’ve learned and help make the process easier for others.
              </p>
            </motion.div>

            {/* What We Offer Section */}
            <motion.div variants={fadeIn} className="space-y-2">
              <p className="text-zinc-600 max-w-3xl mx-auto">
                <span className="text-zinc-800 text-lg">HouseWestern</span> is packed with everything you need to know to navigate London:
              </p>
              <ul className="list-disc list-inside text-zinc-600 max-w-2xl mx-auto space-y-2">
                <li>Neighborhood breakdowns, highlighting safety, affordability, and accessibility.</li>
                <li>Tips for negotiating leases and understanding rental contracts.</li>
                <li>Guides to avoid rental scams and find trusted landlords.</li>
                <li>Furniture recommendations and budgeting advice for setting up your space.</li>
              </ul>
              <p className="text-zinc-600 max-w-3xl mx-auto">All tailored specifically for Western Unviersity students.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-2">
              <p className="text-zinc-800 max-w-3xl mx-auto">
                - Maya, Kunal, & the HouseWestern Team
              </p>
            </motion.div>
          </motion.div>


        </div>
      </main>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full border-t border-zinc-200 bg-white/50 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link
            href="/"
            className="mt-4 inline-block text-zinc-900 hover:text-zinc-600"
          >
            Go Back Home →
          </Link>
        </div>
      </motion.div>
    </BackgroundContainer>
  );
};
