"use client";

import { FC, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundContainer } from "@/components/ui/backgroundContainer";
import { MenuBar } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";
import { ArrowUpRight } from "lucide-react";
import SidebarMenu from "@/components/ui/SidebarMenu";
import GuideCard from "@/components/ui/GuideCard";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const sections = [
  { id: "student-dense-areas", title: "Student-Dense Areas", icon: "🏠", link: "/guide/student-dense-areas", description: "Learn about the best areas for student housing in London." },
  { id: "living-with-roommates", title: "Living with Roommates", icon: "👥", link: "/guide/living-with-roommates", description: "Essential tips for living with roommates." },
  { id: "furniture-guide", title: "Furniture Guide", icon: "🪑", link: "/guide/furniture-guide", description: "Guide to furnishing your student home." },
  { id: "housing-rights", title: "Housing Rights", icon: "⚖️", link: "/guide/housing-rights", description: "Understanding your rights as a tenant." },
  { id: "interactive-map", title: "Interactive Map", icon: "🗺️", link: "/guide/interactive-map", description: "Explore key student areas and bus routes around Western University." },
];

export const HousingGuide: FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <BackgroundContainer>
      <MenuBar />
      <main className="relative z-20 flex flex-grow py-8 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 lg:px-6">
          
          {/* Sidebar Menu - Fixed Width & Prevents Shrinking */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <SidebarMenu sections={sections} activeSection={activeSection} onSectionClick={setActiveSection} />
          </div>

          {/* Main Content - Fully Centered */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center text-center max-w-2xl"
          >
            <motion.h1
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="text-4xl font-light tracking-tight text-zinc-900 md:text-5xl lg:text-6xl mb-6"
            >
              Welcome to the Housing Guide
            </motion.h1>
            <motion.p
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-600 mb-8"
            >
              Everything you need to know about finding the perfect student housing in London.
            </motion.p>

            {/* Grid for Section Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {sections.map((section, index) => (
                <GuideCard
                  key={section.id}
                  title={section.title}
                  icon={section.icon}
                  description={section.description}
                  link={section.link}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-zinc-900 text-white shadow-lg hover:bg-zinc-800 transition-colors z-50"
        >
          <ArrowUpRight className="w-6 h-6" />
        </motion.button>
      )}

      <Footer />
    </BackgroundContainer>
  );
};
