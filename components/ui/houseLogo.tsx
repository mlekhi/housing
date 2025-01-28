import { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface HouseLogoProps {
  className?: string;
}

export const HouseLogo: FC<HouseLogoProps> = ({ className }) => (
  <Link href="/" className={cn(className, 'group')}>
    <motion.span
      whileHover={{ scale: 1.01 }}
      className="inline-block text-xl font-semibold tracking-tight"
    >
      House
      <span className="ml-1 text-purple-900 transition-colors">
        Western
      </span>
    </motion.span>
  </Link>
);