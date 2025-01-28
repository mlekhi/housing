'use client';

import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Link from 'next/link';

import { BackgroundContainer } from '@/components/ui/backgroundContainer';
import { Button } from '@/components/ui/button';

export const NotFound = () => {
  return (
    <BackgroundContainer>
      <main className="relative z-20 flex flex-grow items-center justify-center">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-9xl font-light text-zinc-900">404</h1>

            <div className="mb-12 space-y-4">
              <h2 className="text-2xl font-medium text-zinc-900">
              Lost in the neighborhood?
              </h2>
              <p className="text-zinc-600">
                The page you&apos;re looking for might have moved or
                doesn&apos;t exist. Let&apos;s help you find your way back.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/">
                  <Button className="group h-12 rounded-lg bg-zinc-900 px-6 text-zinc-50 hover:bg-zinc-800">
                    <Home className="mr-2 h-4 w-4" />
                    Return Home
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute bottom-0 left-1/2 -mb-32 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-t from-zinc-100 to-transparent blur-3xl"
          />
        </div>
      </main>
    </BackgroundContainer>
  );
};