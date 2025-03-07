"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundContainer } from "@/components/ui/backgroundContainer";
import { MenuBar } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronRight, BookOpen, ArrowUpRight, Menu, X } from "lucide-react";
import Map from "@/components/ui/map";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const sections = [
  { id: "student-areas", title: "Student-Dense Areas", icon: "🏠" },
  { id: "roommate-tips", title: "Living with Roommates", icon: "👥" },
  { id: "furniture", title: "Furniture Guide", icon: "🪑" },
  { id: "housing-rights", title: "Housing Rights", icon: "⚖️" },
  { id: "map", title: "Interactive Map", icon: "🗺️" },
];

export const HousingGuide: FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    fetch("/content/guide.md")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load guide content");
        }
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  // Function to extract section content from markdown
  const getSectionContent = (sectionId: string) => {
    if (!content) return "";
    
    const lines = content.split('\n');
    let sectionContent = [];
    let isInSection = false;
    
    // Map section IDs to their actual headers
    const sectionMap: { [key: string]: string } = {
      'student-areas': 'Student-Dense Areas',
      'roommate-tips': 'Living with Roommates',
      'furniture': 'Furniture Guide',
      'housing-rights': 'Housing Rights'
    };
    
    // Then get the section content
    for (const line of lines) {
      if (line.startsWith('## ')) {
        const currentSection = line.replace('## ', '');
        if (currentSection === sectionMap[sectionId]) {
          isInSection = true;
          sectionContent.push(line); // Include the section header
        } else {
          isInSection = false;
        }
      } else if (isInSection) {
        sectionContent.push(line);
      }
    }
    
    return sectionContent.join('\n');
  };

  const WelcomePage = () => (
    <div className="max-w-2xl mx-auto text-center">
      <motion.h1
            variants={fadeIn}
            initial="initial"
            animate="animate"
        viewport={{ once: true }}
        className="text-4xl font-light tracking-tight text-zinc-900 md:text-5xl lg:text-6xl mb-6"
      >
        Welcome to the Housing Guide
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-zinc-600 mb-8"
      >
        Everything you need to know about finding the perfect student housing in London.
      </motion.p>
      
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleSectionClick(section.id)}
          >
            <div className="text-4xl mb-4">{section.icon}</div>
            <h2 className="text-xl font-medium text-zinc-900 mb-2">{section.title}</h2>
            <p className="text-zinc-600 text-sm">
              {section.id === "student-areas" && "Learn about the best areas for student housing in London"}
              {section.id === "roommate-tips" && "Essential tips for living with roommates"}
              {section.id === "furniture" && "Guide to furnishing your student home"}
              {section.id === "housing-rights" && "Understanding your rights as a tenant"}
            </p>
          </motion.div>
        ))}
      </div>

          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-12 p-6 bg-white rounded-lg"
      >
        <h3 className="text-lg font-medium text-zinc-900 mb-3">How to Use This Guide</h3>
        <ul className="text-left space-y-3 text-zinc-600">
          <li className="flex items-start gap-2">
            <span className="text-zinc-900">1.</span>
            Click on any section card above to learn more about that topic
          </li>
          <li className="flex items-start gap-2">
            <span className="text-zinc-900">2.</span>
            Use the sidebar navigation (on desktop) or menu button (on mobile) to switch between sections
          </li>
          <li className="flex items-start gap-2">
            <span className="text-zinc-900">3.</span>
            Each section contains detailed information and tips to help you make informed decisions
          </li>
        </ul>
      </motion.div>
    </div>
  );

  return (
    <BackgroundContainer>
      <MenuBar />
      <main className="relative z-20 flex flex-grow py-8 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 lg:px-6">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden fixed top-20 right-4 z-30 p-2 rounded-md bg-white shadow-sm hover:bg-zinc-50"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-zinc-900" />
            ) : (
              <Menu className="w-6 h-6 text-zinc-900" />
            )}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-y-0 right-0 top-16 w-64 bg-white shadow-lg z-20 overflow-y-auto"
              >
                <nav className="p-4 space-y-1">
                  <button
                    onClick={() => {
                      setActiveSection(null);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left group flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                      !activeSection
                        ? "bg-zinc-100 text-zinc-900 shadow-sm"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                  >
                    <span className="text-lg">🏠</span>
                    <span className="flex-1">Welcome</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                      !activeSection ? "rotate-90" : "opacity-0 group-hover:opacity-100"
                    }`} />
                  </button>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        handleSectionClick(section.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left group flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-zinc-100 text-zinc-900 shadow-sm"
                          : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <span className="flex-1">{section.title}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                        activeSection === section.id ? "rotate-90" : "opacity-0 group-hover:opacity-100"
                      }`} />
                    </button>
                  ))}
                </nav>
          </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-1">
              <button
                onClick={() => setActiveSection(null)}
                className={`w-full text-left group flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                  !activeSection
                    ? "bg-zinc-100 text-zinc-900 shadow-sm"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                <span className="text-lg">🏠</span>
                <span className="flex-1">Welcome</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                  !activeSection ? "rotate-90" : "opacity-0 group-hover:opacity-100"
                }`} />
              </button>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full text-left group flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-zinc-100 text-zinc-900 shadow-sm"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="flex-1">{section.title}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                    activeSection === section.id ? "rotate-90" : "opacity-0 group-hover:opacity-100"
                  }`} />
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl mt-16 lg:mt-0">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
                <BookOpen className="w-12 h-12 text-zinc-400 animate-pulse" />
                <div className="flex space-x-2">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-900" style={{ animationDelay: "0ms" }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-900" style={{ animationDelay: "150ms" }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-900" style={{ animationDelay: "300ms" }} />
                </div>
                <p className="text-zinc-500">Loading your guide...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-medium text-zinc-900 mb-4">Oops! Something went wrong</h2>
                <p className="text-zinc-600 mb-6">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow py-2 h-12 rounded-lg bg-zinc-900 px-6 text-zinc-50 hover:bg-zinc-800"
                >
                  Try Again
                </button>
              </div>
            ) : !activeSection ? (
              <WelcomePage />
            ) : activeSection === "map" ? (
              <div className="space-y-6">
                <motion.h2
                  className="text-3xl md:text-4xl font-medium text-zinc-900 mb-6 md:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Interactive Map of London
                </motion.h2>
                <motion.p
                  className="text-lg text-zinc-600 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Explore the main student living areas and bus routes around Western University. Click on any marker to learn more about the area and its bus connections.
                </motion.p>
                <Map />
              </div>
            ) : (
              <div className="prose prose-zinc max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <motion.h1
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                        className="text-4xl font-light tracking-tight text-zinc-900 md:text-5xl lg:text-6xl mb-4"
                      >
                        {children}
                      </motion.h1>
                    ),
                    h2: ({ children }) => (
                      <motion.h2
                        className="text-3xl md:text-4xl font-medium text-zinc-900 mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {children}
                      </motion.h2>
                    ),
                    h3: ({ children }) => (
                      <motion.h3
                        className="text-xl md:text-2xl pt-4 md:pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {children}
                      </motion.h3>
                    ),
                    p: ({ children }) => (
                      <motion.p
                        className="mb-4 text-base md:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      >
                        {children}
                      </motion.p>
                    ),
                  }}
                >
                  {getSectionContent(activeSection)}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-zinc-900 text-white shadow-lg hover:bg-zinc-800 transition-colors z-50"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <Footer />
    </BackgroundContainer>
  );
};

