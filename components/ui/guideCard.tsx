"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface GuideCardProps {
  title: string;
  icon: string;
  description: string;
  link: string;
  delay: number;
}

const GuideCard: FC<GuideCardProps> = ({ title, icon, description, link, delay }) => {
  return (
    <Link href={link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center"
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-xl font-medium text-zinc-900 mb-2">{title}</h2>
        <p className="text-zinc-600 text-sm">{description}</p>
      </motion.div>
    </Link>
  );
};

export default GuideCard;
