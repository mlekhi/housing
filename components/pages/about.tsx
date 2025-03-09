'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuBar } from '@/components/ui/menu';
import { BackgroundContainer } from '@/components/ui/backgroundContainer';
import { Footer } from '@/components/ui/footer';

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
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-16 px-6 lg:flex-row">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative aspect-[4/3] w-full"
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
                <Image
                  src="/founding_team.png"
                  alt="Founding Team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex w-full flex-col lg:w-1/2"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl font-light tracking-tight text-zinc-900 md:text-6xl"
            >
              About Us
            </motion.h1>

            <div>
            <motion.p variants={fadeIn} className="text-zinc-600 max-w-3xl mx-auto mt-6">
              Finding housing in London is tough.
            </motion.p>
            <motion.p variants={fadeIn} className="text-zinc-600 max-w-3xl mx-auto mt-3">
              As students ourselves, we experienced the challenges of finding housing firsthand, from understanding neighborhoods to avoiding scams. We believe that finding a home away from home should be easy and accessible for all students.
            </motion.p>
            <motion.p variants={fadeIn} className="text-zinc-600 max-w-3xl mx-auto mt-3">
              That’s why we created this guide: to develop a shared database of what we’ve learned and help make the process easier for others.
            </motion.p>
            </div>
            
            <motion.div variants={fadeIn} className="space-y-2 mt-6">
              <p className="text-zinc-800 text-mdh"><span className="text-zinc-800 text-lg">HouseWestern</span> is packed with everything you need to know to navigate London:</p>
              <ul className="list-disc list-inside text-zinc-600 max-w-2xl mx-auto space-y-2 text-sm">
                <li>Neighborhood breakdowns, highlighting safety, affordability.</li>
                <li>Tips for negotiating leases and understanding rental contracts.</li>
                <li>Guides to avoid rental scams and find trusted landlords.</li>
                <li>Furniture recommendations and budgeting advice for your space.</li>
              </ul>
              <p className="text-zinc-600 max-w-3xl mx-auto">All tailored specifically for Western University students.</p>
            </motion.div>

            <div>
            <motion.p variants={fadeIn} className="text-zinc-800 max-w-3xl mx-auto mt-6">
              - Maya, Kunal, & the HouseWestern Team
            </motion.p>
            </div>
          </motion.div>
        </div>
      </main>

    <Footer/>
    </BackgroundContainer>
  );
};
