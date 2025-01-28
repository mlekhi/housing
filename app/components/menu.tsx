"use client";

import { useState } from "react";
import Link from "next/link";

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-transparent text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <Link href="/">House Western</Link>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="#get-started"
              className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Get Started
            </Link>
            <Link
              href="#quick-links"
              className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Quick Links
            </Link>
            <Link
              href="#footer"
              className="hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Resources
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#get-started"
              className="hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Get Started
            </Link>
            <Link
              href="#quick-links"
              className="hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Quick Links
            </Link>
            <Link
              href="#footer"
              className="hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
