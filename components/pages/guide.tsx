'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { BackgroundContainer } from '@/components/ui/backgroundContainer';
import { MenuBar } from '@/components/ui/menu';
import { Footer } from '@/components/ui/footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const HousingGuide: FC = () => {
  return (
    <BackgroundContainer>
      <MenuBar />
      <main className="relative z-20 flex flex-grow items-center py-16 lg:py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 px-6">
          {/* Title */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center space-y-4"
          >
            <h1 className="text-5xl font-light tracking-tight text-zinc-900 md:text-6xl">
              Housing Guide for Students
            </h1>
            <p className="max-w-2xl text-center text-lg text-zinc-600">
              Everything you need to know about finding the perfect student
              housing in London.
            </p>
          </motion.div>

          {/* Sections */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col space-y-12"
          >
            {/* Section 1: Student-Dense Areas */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                Student-Dense Areas
              </h2>
              <p className="text-zinc-600">
                London offers several areas popular among students. Each has its
                own benefits depending on your priorities like budget,
                proximity, and safety:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Downtown Core:</strong> Close to Western and Fanshawe
                  with plenty of nightlife and restaurants. Rent is higher, and
                  it’s a lively area, ideal for social students.
                </li>
                <li>
                  <strong>Masonville:</strong> A quieter, suburban feel with
                  access to Masonville Mall and grocery stores. Perfect for
                  those who prefer peaceful surroundings.
                </li>
                <li>
                  <strong>Old North:</strong> Residential and safe, with family
                  homes and charming rentals. A short commute to Western makes
                  it great for focused students.
                </li>
                <li>
                  <strong>White Oaks:</strong> Affordable, but further from
                  campus. You’ll need to rely on public transit or have a car.
                </li>
                <li>
                  <strong>Hyde Park:</strong> A developing suburban area with
                  new builds. Better suited for those with personal transport.
                </li>
              </ul>
            </motion.div>

            {/* Section 2: Property Groups */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                Common Property Groups
              </h2>
              <p className="text-zinc-600">
                Here are reliable property management companies in London:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>BlueStone Properties:</strong> Known for modern
                  rentals and excellent maintenance. Contact: (519) 433-4811.
                </li>
                <li>
                  <strong>York Property Management:</strong> Affordable with
                  mixed reviews. Contact: (519) 680-1252.
                </li>
                <li>
                  <strong>CLV Group:</strong> Offers a variety of student
                  housing. Contact: (519) 913-2390.
                </li>
                <li>
                  <strong>Old Oak Properties:</strong> Premium rentals with
                  great amenities. Contact: (519) 641-2544.
                </li>
              </ul>
            </motion.div>

            {/* Section 3: How to Haggle */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                How to Haggle
              </h2>
              <ul className="space-y-2">
                <li>
                  Ask for incentives like free parking or utilities, especially
                  for longer leases.
                </li>
                <li>
                  Compare prices in the area and use lower rates as leverage.
                </li>
                <li>
                  If you’re ready to commit early, ask for an early-signing
                  discount.
                </li>
              </ul>
            </motion.div>

            {/* Section 4: Roommate Discussions */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                Roommate Discussions
              </h2>
              <p className="text-zinc-600">
                Moving in with roommates? Here’s what to discuss beforehand:
              </p>
              <ul className="space-y-2">
                <li>Cleaning schedules and shared responsibilities.</li>
                <li>How to split rent, utilities, and other expenses.</li>
                <li>Guest policies, quiet hours, and overnight visitors.</li>
                <li>
                  Set up a group chat for clear and open communication.
                </li>
              </ul>
            </motion.div>

            {/* Section 5: Getting Furniture */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                Getting Furniture
              </h2>
              <ul className="space-y-2">
                <li>
                  Check <strong>Facebook Marketplace</strong>, <strong>Kijiji</strong>, and thrift stores for affordable options.
                </li>
                <li>
                  Many students sell or give away furniture at the end of the
                  semester—join local groups to stay updated.
                </li>
                <li>
                  IKEA and Walmart are budget-friendly stores for essentials.
                </li>
              </ul>
            </motion.div>

            {/* Section 6: Avoiding Scams */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                Avoiding Scams
              </h2>
              <p className="text-zinc-600">
                Protect yourself when renting housing:
              </p>
              <ul className="space-y-2">
                <li>
                  Never send money before viewing the property in person or
                  verifying the landlord.
                </li>
                <li>
                  Research the landlord or property group online to check for
                  reviews and complaints.
                </li>
                <li>
                  Be cautious of deals that seem too good to be true—they often
                  are.
                </li>
              </ul>
            </motion.div>

            {/* Section 7: Contract Rights & Hidden Costs */}
            <motion.div variants={fadeIn} className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                Contract Rights & Hidden Costs
              </h2>
              <ul className="space-y-2">
                <li>
                  Understand your rights regarding repairs, subletting, and
                  lease termination.
                </li>
                <li>
                  Ask if utilities, parking, and internet are included in the
                  rent.
                </li>
                <li>
                  Be aware of hidden costs like key replacement fees, cleaning
                  fees, or late payment penalties.
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer/>
    </BackgroundContainer>
  );
};
