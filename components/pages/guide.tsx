"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { BackgroundContainer } from "@/components/ui/backgroundContainer";
import { MenuBar } from "@/components/ui/menu";
import { Footer } from "@/components/ui/footer";
import { CollapsibleSection } from "@/components/ui/collapsibleSection";

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
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6">
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
              Everything you need to know about finding the perfect student housing in London.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="flex flex-col space-y-12 items-left w-full"
          >
            <CollapsibleSection title="Student-Dense Areas">
              <p>When it comes to off-campus housing in London, ON, there are really five ‘desirable areas’ for students to live in, all assessed on certain criteria shown below. The order is not suggestive of any area being better than others.</p>
              <h2 className="text-2xl pt-6">Area #1: Masonville</h2>
              <p className="pt-3">The region of Masonville, loosely centered around Masonville Mall is directly north of campus. Most students tend to live near Masonville Mall due to the numerous bus stops in the area. </p>
              <h2 className="text-2xl pt-6">Area #2: Old North</h2>
              <p className="pt-3">The region of Old North is roughly between Masonville and Downtown, east / north-east of main-campus. One great advantage of this location is that it’s very close to campus, and while certain bus routes are available – many students are willing to walk to campus. Students often take the bridge on University Drive crossing the Thames River. Students also often refer to a landmark known as the “University Main Gates” on University and Richmond, which helps to mark out the general area.</p>
              <p className="pt-3">However, while areas such as Adelaide and Oxford can be considered Old North, getting to campus from those locations becomes difficult, often having to take multiple buses or walking for quite some time. Regardless, people will have to walk for some amount of time and then take either bus 106 or bus 27 to get onto campus (UCC used as a landmark for the purposes of this guide).</p>
              <h2 className="text-2xl pt-6">Area #3: Downtown</h2>
              <h2 className="text-2xl pt-6">Area #4: Oxford / Wharncliffe (South-Side)</h2>
              <h2 className="text-2xl pt-6">Area #5: West of Campus (Sarnia and Wonderland)</h2>
            </CollapsibleSection>

            <CollapsibleSection title="Housing Rights">
              <p>Moving in with roommates? Here’s what you should know beforehand.</p>
              <h2 className="text-2xl pt-6">Typical Weekly Schedule</h2>
              <p className="pt-3">When moving in with roommates, discussing schedules is essential for avoiding unnecessary conflicts. Start by asking your roommate about their typical daily routine. This includes when they have classes, when they usually go to bed, and when they expect to be home or away. Understanding each other’s schedules helps coordinate shared spaces like the kitchen and bathroom, ensuring everyone has access when they need it without stepping on each other’s toes.</p>
              <p className="pt-3">Additionally, take the time to talk about sleeping habits and preferences. Knowing when your roommate plans to sleep or wake up can prevent disruptions and foster a more comfortable living environment. For instance, do they require complete silence to fall asleep, or are they okay with some background noise? Clarifying these details early on can help set expectations and create a mutually respectful atmosphere where everyone feels at ease.</p>
              <h2 className="text-2xl pt-6">Partying & Substance Use</h2>
              <p className="pt-3">Another important topic to discuss with your roommate is their stance on partying and substance use. Start by asking if they plan on hosting parties in the shared space and how frequently. This is also a good time to share your own perspective—whether you’re open to hosting gatherings or prefer a quieter, more private environment. Aligning on this early can help avoid surprises and ensure that both of you are comfortable with how the space is used.</p>
              <p className="pt-3">Substance use is another critical area to address. If you or your roommate don’t drink or smoke, it’s important to communicate any boundaries or concerns upfront. For example, some people may be uncomfortable with smoking indoors or even within the shared living space altogether. Having an honest conversation about these habits will help set clear expectations and create a living arrangement that respects everyone’s preferences and comfort levels.</p>
              <h2 className="text-2xl pt-6">Guest Policy</h2>
              <p className="pt-3">Discussing a guest policy with your roommate is crucial. Start by talking about when guests are allowed to visit and how often. Are you or your roommate okay with guests staying overnight? What about having visitors every day? It’s important to consider how frequent visits might impact shared resources like water, electricity, and overall expenses, as these costs are typically split among roommates.</p>
              <p className="pt-3">Additionally, set boundaries to ensure that the living space remains balanced. After all, you agreed to live with your roommate—not their friends or partners. If one person frequently has someone over for extended periods, it can feel like you’ve gained an uninvited third roommate. By establishing clear expectations about guest limits and respecting each other’s comfort levels, you can prevent misunderstandings and maintain a harmonious household.</p>
              <h2 className="text-2xl pt-6">Pets</h2>
              <p className="pt-3">Pets are another important topic to discuss with your roommate before moving in together. Start by determining if either of you plans to have a pet and, if so, what kind of pet it will be. Some people are comfortable with cats or dogs, while others may have allergies or preferences against certain animals. It’s essential to ensure that both parties are on the same page about whether pets are welcome in the shared living space.</p>
              <p className="pt-3">If pets are part of the equation, clarify who will be responsible for their care. Tasks like feeding, walking, cleaning up after them, and scheduling vet appointments need to be assigned to avoid misunderstandings. Additionally, discuss the financial responsibilities associated with owning a pet. Who will cover expenses such as food, supplies, and veterinary bills? By addressing these details upfront, you can prevent potential conflicts and ensure that any pets brought into the home are properly cared for without causing strain on your roommate relationship.</p>
              <h2 className="text-2xl pt-6">Chore Division</h2>
              <p className="pt-3">Chores are an essential part of maintaining a clean shared living space, so it’s important to have an open conversation with your roommate about how they will be divided. Start by discussing each person’s preferences for specific chores. For instance, if you enjoy washing dishes and your roommate prefers mopping the floor, you can assign tasks based on what each person is more comfortable doing. This approach can make the process feel less burdensome for everyone.</p>
              <p className="pt-3">Alternatively, you might decide as a household to rotate chores. For example, one week you could clean the bathroom while your roommate vacuums, and then switch responsibilities the following week. It’s also important to agree on when chores should be completed. Will they be done as people have time throughout the week, or will there be a designated cleaning day, such as Sunday? Establishing a schedule ensures that tasks are not overlooked and helps keep the household running smoothly.</p>
              <p className="pt-3">Ultimately, maintaining shared spaces is a shared responsibility. Both roommates should contribute equally to keeping common areas clean and organized. By setting clear expectations and dividing tasks fairly, you can create a living environment that feels respectful and balanced for everyone involved.</p>
              <h2 className="text-2xl pt-6">Cost Splitting</h2>
              <p className="pt-3">Discussing how to split costs is an essential conversation to have with your roommate, as finances can often be a sensitive topic, particularly for students who come from different financial backgrounds. Start by addressing how rent and utility bills will be divided. Will all bedrooms cost the same, or will someone pay more if they have a larger room or better amenities? Similarly, if one roommate frequently has guests over, it might make sense for them to cover a larger portion of shared utilities like water or electricity. Being upfront about these details can help avoid resentment later on.</p>
              <p className="pt-3">Next, agree on how to handle shared expenses such as internet plans. Choose a plan that works for everyone’s budget and usage needs. For other communal items like garbage bags, dishwashing liquid, and cleaning supplies, decide whether these should be split evenly down to the dollar or if you’ll alternate purchases—for example, one person buys them this month and another next month. Having a clear system in place ensures fairness and prevents frustration over who is contributing what.</p>
              <p className="pt-3">It’s also important to clarify which items will be shared in the household. While appliances like microwaves and toasters are typically communal, you should discuss whether things like plates, cutlery, pots, and pans will also be shared. If certain roommates have dietary restrictions—such as being vegetarian or vegan—this can add complexity when it comes to cleaning shared cookware. Setting clear boundaries about what can and cannot be shared will help maintain respect for everyone’s preferences and avoid unnecessary conflicts.</p>
              <h2 className="text-2xl pt-6">Interests & Hobbies</h2>
              <p className="pt-3">Building a positive relationship with your roommate goes beyond just dividing responsibilities—it’s also about getting to know each other and fostering a sense of camaraderie. Take the time to learn about your roommate’s interests and hobbies. Are there any shared activities you both enjoy, such as playing sports, watching shows or movies, or gaming? Finding common ground can make living together more enjoyable and help you connect on a personal level.</p>
              <p className="pt-3">It’s also a good idea to set aside time as a household to bond. This doesn’t have to be elaborate; it could be something as simple as spending time together at home while doing chores or cooking a meal. Alternatively, you can plan specific activities, like going out for dinner, attending events, or exploring the local area. Building this connection can create a more supportive and friendly environment, making your shared living experience not just functional but genuinely enjoyable.</p>
              <h2 className="text-2xl pt-6">Allergies</h2>
              <p className="pt-3">Allergies are an important health consideration to discuss with your roommate to ensure everyone’s safety and comfort in the shared living space. Start by asking about any allergies they may have, whether to food, pets, or environmental factors like dust or pollen. If your roommate has a food allergy, take steps to minimize risks—for example, storing allergenic items like eggs or nuts in separate compartments of the fridge or even in a mini fridge in your room if necessary. This helps prevent cross-contamination and ensures that shared spaces remain safe for everyone.</p>
            </CollapsibleSection>
            
            <CollapsibleSection title="Furniture">
              <p>Furniture is often one of the largest costs in moving into any new place. While some places come furnished, the below content is mostly for homes that aren’t fully furnished.</p>
              <p className="pt-3">Facebook Marketplace: a great place to find second-hand furniture, you can speak to sellers directly, and transactions can be done securely by cash once you’ve picked them up to avoid scams. You can also directly inspect the items before purchasing this way. The only downside to marketplace furniture is that you usually bear the responsibility of pick-up. I recommend holding all of the items on one day, renting a UHaul and doing pick up all at once. There are also facebook groups where people post items for trade. Around April at the end of the school year when graduates are leaving is when you’ll have the most luck here. Kijiji is similar.</p>
              <p className="pt-3">Jysk: fair quality, sort of like Ikea but has multiple locations in London. Can furnish most of the house in just a few thousand dollars, which all things said and done, is affordable.</p>
              <p className="pt-3">Driving Around: Oftentimes, in areas of student single-family homes such as Old North, people will leave furniture they cannot get rid of or sell in their front yard waiting for garbage pick-up. These items are usually in decent condition, and just require some clean-up. So, in April, as students are leaving, you can usually find some decent items for free of cost. I recommend going with a U-Haul to store many items at once.</p>
              <p className="pt-3">Yard Sales: Again, in April, many students do yard sales to get rid of their items. You may also want to pay these a visit. You’ll see posters on lightposts, etc. to find these items.</p>
            </CollapsibleSection>

            <CollapsibleSection title="Housing Rights">
              <p>Rent Control: For 2025, the most a landlord can increase rent (can increase once every 12 months) is 2.5%. And when they increase rent, they must give you at least 90 days advance communication. More on this in this link. </p>
              <p className="pt-3">Appliance Maintenance: O. Reg. 517/06, s. 40 (1). States that Appliances supplied by the landlord of the rental unit shall be maintained in a good state of repair and in a safely operable condition. And section 40 (2) states that “appliances” include refrigerators, stoves, clothes washers, clothes dryers, dishwashers, and hot water tanks. </p>
              <p className="pt-3">Heating: O. Reg. 517/06, s. 15 (1). States that Heat shall be provided and maintained so that the room temperature at 1.5 metres above floor level and one metre from exterior walls in all habitable space and in any area intended for normal use by tenants, including recreation rooms and laundry rooms but excluding locker rooms and garages, is at least 20 degrees Celsius.</p>
              <p className="pt-3">Water: O. Reg. 517/06, s. 11 (1) states that Every kitchen sink, washbasin, bathtub and shower shall be provided, by safe equipment, with hot and cold running water. </p>
              <p className="pt-3">You can find more details around all of these rules through the link here. Don’t let your landlord get away with things they shouldn’t be able to! </p>
            </CollapsibleSection>
          </motion.div>
        </div>
      </main>
      <Footer />
    </BackgroundContainer>
  );
};

