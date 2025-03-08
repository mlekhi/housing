"use client";

import { FC } from "react";
import { BackgroundContainer } from "@/components/ui/backgroundContainer";
import { Footer } from "@/components/ui/footer";
import { MenuBar } from '@/components/ui/menu';
import SidebarMenu from "@/components/ui/SidebarMenu";
import Map from "@/components/pages/map";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionPage: FC = () => {
  return (
    <BackgroundContainer>
      <MenuBar />
      <main className="relative z-20 flex flex-grow py-8 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 lg:px-6">


        <SidebarMenu activeSection="interactive-map" onSectionClick={() => {}} />

          {/* Map Content with Motion */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex-1 max-w-3xl"
          >
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <Map />
            </motion.div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </BackgroundContainer>
  );
};

export default SectionPage;
