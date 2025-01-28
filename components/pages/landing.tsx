'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { BackgroundContainer } from '@/components/ui/backgroundContainer';
import { Button } from '@/components/ui/button';
import { MenuBar } from '@/components/ui/menu';

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

export const Landing: FC = () => {

  return (
    <BackgroundContainer>
        <MenuBar />
      <main className="relative z-20 flex flex-grow items-center py-16 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
          {/* Left Column */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex w-full flex-col lg:w-1/2"
          >
            <div className="flex flex-col space-y-6">
              <motion.h1
                variants={fadeIn}
                className="text-5xl font-light tracking-tight text-zinc-900 md:text-6xl"
              >
                For students,
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-2 block bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text pb-2 font-normal text-transparent"
                >
                  By students.
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="max-w-xl text-xl text-zinc-600"
              >
                Whether you’re navigating your first rental or looking for the perfect place to call home, we’re here to make housing simple, reliable, and stress-free. From tips on student-friendly neighborhoods to avoiding rental scams, our guide is tailored to the unique needs of Western University students.
                </motion.p>
                <motion.p
                variants={fadeIn}
                className="max-w-xl text-xl text-zinc-600"
              >
                Your home away from home starts here. 🏠
                </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex items-center space-x-6 pt-6"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="group h-14 rounded-full bg-zinc-900 px-6 text-lg text-zinc-50 hover:bg-zinc-800 md:px-8">
                    Read Our Guide
                    <ChevronRight className="ml-2 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="/demo"
                    className="text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    Explore Housing →
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Interactive Preview */}
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
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(to right, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
                      'linear-gradient(to right, #e9ecef 0%, #f8f9fa 50%, #e9ecef 100%)',
                    ],
                    backgroundPosition: ['200% 0', '-200% 0'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="h-full w-full p-6">
                    <div className="h-full w-full rounded-lg bg-zinc-100" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

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
    </BackgroundContainer>
  );
};