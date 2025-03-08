"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

const sections = [
  { id: "student-dense-areas", title: "Student-Dense Areas", icon: "🏠", link: "/guide/student-dense-areas" },
  { id: "living-with-roommates", title: "Living with Roommates", icon: "👥", link: "/guide/living-with-roommates" },
  { id: "furniture-guide", title: "Furniture Guide", icon: "🪑", link: "/guide/furniture-guide" },
  { id: "housing-rights", title: "Housing Rights", icon: "⚖️", link: "/guide/housing-rights" },
  { id: "interactive-map", title: "Interactive Map", icon: "🗺️", link: "/guide/interactive-map" },
];

interface SidebarMenuProps {
  activeSection: string | null;
  onSectionClick: (sectionId: string | null) => void;
}

const SidebarMenu: FC<SidebarMenuProps> = ({ activeSection, onSectionClick }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!document.getElementById("mobile-menu")?.contains(event.target as Node)) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);

  return (
    <>
      {/* Mobile Menu Button (Right-Aligned) */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-20 right-10 z-30 p-2 rounded-md bg-white shadow-sm hover:bg-zinc-50"
      >
        {isMobileOpen ? <X className="w-6 h-6 text-zinc-900" /> : <Menu className="w-6 h-6 text-zinc-900" />}
      </button>
{/* Mobile Dropdown Menu (Aligned Below Button) */}
{isMobileOpen && (
  <motion.div
    id="mobile-menu"
    initial={{ opacity: 0, scale: 0.9, y: -10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9, y: -10 }}
    transition={{ duration: 0.2 }}
    className="lg:hidden fixed top-[5rem] right-10 w-[calc(100vw-2.5rem)] max-w-xs bg-white shadow-lg rounded-lg z-20 overflow-hidden"
  >
    <nav className="p-4 space-y-2">
      <Link href="/guide">
        <button
          onClick={() => {
            onSectionClick(null);
            setIsMobileOpen(false);
          }}
          className={`w-full text-left group flex items-center gap-3 px-4 py-3 text-sm rounded-md transition-all duration-200 ${
            !activeSection
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
          }`}
        >
          <span className="text-lg">🏠</span>
          <span className="flex-1">Welcome</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${!activeSection ? "rotate-90" : "opacity-0 group-hover:opacity-100"}`} />
        </button>
      </Link>
      {sections.map((section) => (
        <Link key={section.id} href={section.link}>
          <button
            onClick={() => {
              onSectionClick(section.id);
              setIsMobileOpen(false);
            }}
            className={`w-full text-left group flex items-center gap-3 px-4 py-3 text-sm rounded-md transition-all duration-200 ${
              activeSection === section.id
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            <span className="flex-1">{section.title}</span>
            <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeSection === section.id ? "rotate-90" : "opacity-0 group-hover:opacity-100"}`} />
          </button>
        </Link>
      ))}
    </nav>
  </motion.div>
)}


      {/* Desktop Sidebar (Always Visible on Large Screens) */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <nav className="sticky top-24 space-y-1">
          <Link href="/guide" passHref>
            <button
              onClick={() => onSectionClick(null)}
              className={`w-full text-left group flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                !activeSection
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              <span className="text-lg">🏠</span>
              <span className="flex-1">Welcome</span>
              <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${!activeSection ? "rotate-90" : "opacity-0 group-hover:opacity-100"}`} />
            </button>
          </Link>
          {sections.map((section) => (
            <Link key={section.id} href={section.link} passHref>
              <button
                onClick={() => onSectionClick(section.id)}
                className={`w-full text-left group flex items-center gap-3 px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="flex-1">{section.title}</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeSection === section.id ? "rotate-90" : "opacity-0 group-hover:opacity-100"}`} />
              </button>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default SidebarMenu;
