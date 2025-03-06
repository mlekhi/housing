"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const subject = encodeURIComponent("New Housing Guide Suggestion");
    const body = encodeURIComponent(`New suggestion from ${email}:\n\n${suggestion}`);
    const mailtoLink = `mailto:maya.lekhi1@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setStatus("success");
    setEmail("");
    setSuggestion("");
    setTimeout(() => setIsOpen(false), 2000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full border-t border-zinc-200 bg-white/50 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between text-zinc-600">
          {/* Left: GitHub Contribution Link */}
          <Link
            href="https://github.com/mlekhi/housing"
            target="_blank"
            className="text-sm font-medium transition-colors hover:text-zinc-900"
          >
            Want to contribute to this guide? →
          </Link>

          {/* Right: Footer Navigation Links */}
          <div className="flex space-x-6">
            <Link
              href="/about"
              className="text-sm transition-colors hover:text-zinc-900"
            >
              About
            </Link>
            <Link
              href="/guide"
              className="text-sm transition-colors hover:text-zinc-900"
            >
              Guide
            </Link>
            <Link
              href="/marketplace"
              className="text-sm transition-colors hover:text-zinc-900"
            >
              Housing
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="text-sm transition-colors hover:text-zinc-900"
            >
              Share Ideas
            </button>
          </div>
        </div>
      </motion.div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-[400px] rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="text-lg font-medium mb-2">
              Help Make This Guide Better
            </Dialog.Title>
            <p className="text-sm text-zinc-600 mb-4">
              Your ideas help us improve and make this guide more helpful for everyone. We'd love to hear your thoughts!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                  Your Email (so we can follow up!)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                  required
                  placeholder="maya.lekhi1@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="suggestion" className="block text-sm font-medium text-zinc-700 mb-1">
                  What would you like to see?
                </label>
                <textarea
                  id="suggestion"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                  rows={4}
                  required
                  placeholder="Share your ideas, suggestions, or improvements..."
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900"
                >
                  Maybe Later
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800 disabled:opacity-50"
                >
                  {status === "loading" ? "Preparing Email..." : "Share Your Ideas"}
                </button>
              </div>

              {status === "success" && (
                <p className="text-sm text-green-600">
                  Thanks for sharing! Your email client will open to send your suggestion. We can't wait to hear your ideas! ✨
                </p>
              )}
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};