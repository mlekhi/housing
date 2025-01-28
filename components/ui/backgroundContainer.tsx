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
        'relative flex min-h-screen w-full flex-col overflow-hidden bg-zinc-50',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute h-full w-full bg-[radial-gradient(circle_800px_at_100%_200px,#cbd5e144,transparent)]" />
        <div className="absolute h-full w-full bg-[radial-gradient(circle_800px_at_0%_300px,#94a3b844,transparent)]" />
      </motion.div>
      {children}
    </div>
  );
};