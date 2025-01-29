import { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HouseLogoProps {
  className?: string;
}

export const HouseLogo: FC<HouseLogoProps> = ({ className }) => (
  <Link href="/" className={cn(className, "group flex items-center space-x-1")}>
    <motion.span whileHover={{ scale: 1.01 }} className="text-xl font-semibold tracking-tight flex items-center">
      House
      <span className="ml-1 text-purple-900 transition-colors">Western</span>
    </motion.span>
    <Image src="/logo.png" alt="Logo" width={24} height={24} />
  </Link>
);
