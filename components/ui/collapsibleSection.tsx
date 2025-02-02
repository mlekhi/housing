import { FC, useState } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 },
};

export const CollapsibleSection: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={fadeIn} initial="initial" animate="animate" className="space-y-4 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl text-zinc-900 w-full text-left flex items-center"
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl"
        >
          ▶
        </motion.span>
        <span className="ml-2">{title}</span>
      </button>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden text-zinc-600"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
