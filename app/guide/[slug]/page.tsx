"use client";

import { FC, useEffect, useState } from "react";
import { BackgroundContainer } from "@/components/ui/backgroundContainer";
import { Footer } from "@/components/ui/footer";
import { usePathname } from "next/navigation";
import { MenuBar } from '@/components/ui/menu';
import SidebarMenu from "@/components/ui/SidebarMenu";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // ✅ Allows inline HTML rendering
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SectionPage: FC = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetch(`/api/guide?filename=${encodeURIComponent(slug)}`)
        .then((res) => {
          if (!res.ok) throw new Error("Markdown file not found");
          return res.json();
        })
        .then((data) => setContent(data.content))
        .catch(() => setContent("Error: File not found."));
    }
  }, [slug]);

  return (
    <BackgroundContainer>
      <MenuBar />
      <main className="relative z-20 flex flex-grow py-8 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl gap-8 px-4 lg:px-6">

          {/* Sidebar Menu */}
          <motion.div 
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="hidden lg:block w-64"
          >
            <SidebarMenu activeSection={slug ?? null} onSectionClick={() => {}} />
          </motion.div>

          {/* Content Section with Motion */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex-1 max-w-3xl"
          >
            {/* Styled Markdown Content - Removed Extra Top Margin */}
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="prose prose-zinc max-w-none"
            >
              {content ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]} // ✅ Fixes inline HTML
                  components={{
                    h1: ({ children }) => <h1 className="text-5xl font-light mt-4 mb-6">{children}</h1>, // ✅ Reduced top margin
                    h2: ({ children }) => <h2 className="text-3xl font-light mt-4 mb-4">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-2xl font-light mt-4 mb-3">{children}</h3>,
                    p: ({ children }) => <p className="text-lg text-gray-800 leading-relaxed mb-4">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-outside ml-8 space-y-2 mb-6">{children}</ul>, 
                    ol: ({ children }) => <ol className="list-decimal list-outside ml-8 space-y-2 mb-6">{children}</ol>,
                    li: ({ children }) => <li className="text-lg text-gray-800">{children}</li>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 mb-6">{children}</blockquote>
                    ),
                    strong: ({ children }) => <strong className="font-medium text-gray-800">{children}</strong>,
                    a: ({ href, children }) => (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              ) : (
                <p className="text-zinc-600">Loading...</p>
              )}
            </motion.div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </BackgroundContainer>
  );
};

export default SectionPage;
