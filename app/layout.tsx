import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HouseWestern",
  description:
    "HouseWestern helps Western University students find safe, affordable off-campus housing with verified listings, rental guides, and neighborhood insights. Avoid scams, compare neighborhoods, and get expert tips for lease negotiations.",
  keywords: [
    "Western University housing",
    "London Ontario student rentals",
    "off-campus housing Western",
    "rental guide for students",
    "find housing at Western University",
    "student-friendly landlords London Ontario",
    "avoid rental scams Western University",
  ],
  openGraph: {
    title: "HouseWestern | Student Housing Guide for Western University",
    description:
      "HouseWestern simplifies student housing with trusted rental listings, neighborhood breakdowns, and lease negotiation tips for Western University students.",
    url: "https://housewestern.com",
    siteName: "HouseWestern",
    type: "website",
    images: [
      {
        url: "/housewestern-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HouseWestern - The Ultimate Student Housing Guide",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
