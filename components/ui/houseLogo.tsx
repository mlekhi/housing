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
    <Image src="/logo.png" alt="Logo" width={24} height={24} />
  </Link>
);
