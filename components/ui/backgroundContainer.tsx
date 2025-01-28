'use client';

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BackgroundContainerProps {
  children: ReactNode;
  className?: string;
}

export const BackgroundContainer: FC<BackgroundContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-purple-100 via-white to-purple-50',
        className,
      )}
    >
      {/* Animated Visible Dots Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(circle_8px_at_8px_8px,#a494ff,transparent_10%)] bg-[size:20px_20px]"
      />

      {/* Subtle Purple Gradients for Depth */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute h-full w-full bg-[radial-gradient(circle_600px_at_top_left,#a494ff,transparent)]" />
        {/* <div className="absolute h-full w-full bg-[radial-gradient(circle_600px_at_bottom_right,#d8b4fe33,transparent)]" /> */}
      </motion.div>

      {/* Floating Purple Elements */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute -top-10 left-10 h-32 w-32 rounded-full bg-purple-900/50 blur-3xl"
      />
      {/* <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute top-20 right-20 h-48 w-48 rounded-full bg-purple-400/40 blur-2xl"
      /> */}

      {/* Content */}
      {children}
    </div>
  );
};
