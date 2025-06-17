"use client";

import { TfiMinus, TfiPlus } from "react-icons/tfi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const servicesList = [
  {
    ques: "1. Do you offer audits of our existing website or marketing assets before starting?",
    bachelor:
      "Yes. We start with a performance audit to understand what’s working and where there’s opportunity—be it UX, SEO-readiness, content, or conversion flow.",
  },
  {
    ques: "2. What does your reporting schedule look like?",
    bachelor:
      "For SEO and web maintenance, we share monthly performance reports with insights and next steps.",

    master: "For paid campaigns, you get dashboards and weekly breakdowns.",
  },
  {
    ques: "3. How do you stay updated on Google algorithm changes and tech updates?",
    bachelor:
      "Our team is certified across platforms and part of key partner communities.",
    master: " We stay ahead of updates so your campaigns don’t fall behind.",
  },
  {
    ques: "4. Can you work with what we already have, or do you only build from scratch?",
    bachelor:
      "We’re flexible. We can build on your current digital marketing setup or create something new—whichever is more efficient.",
  },
  {
    ques: "5. What kind of services do you offer?",
    bachelor: (
      <>
        We work across strategy, design, development, and performance marketing.
        -{" "}
        <Link href="/art/services" className="text-blue-400 hover:underline">
          Explore our services
        </Link>
      </>
    ),
  },
  {
    ques: "6. Do you have experience in my industry?",
    bachelor: (
      <>
        We’ve worked across a diverse range—from tech and hospitality to
        appliances and NGOs. Is your industry not listed? Please write to us at
        -{" "}
        <a
          href="mailto:reach@ivistaz.com"
          className="text-blue-400 hover:underline"
        >
          reach@ivistaz.com
        </a>{" "}
        <Link
          href="/performance/industries"
          className="text-blue-400 hover:underline"
        >
          Explore the industries we serve
        </Link>
      </>
    ),
  },
  {
    ques: "7. Are you currently hiring?",
    bachelor:
      "We’re always open to working with talented professionals who share our passion for performance.",
    master: (
      <>
        <Link href="/careers" className="text-blue-400 hover:underline">
          - See open positions
        </Link>
      </>
    ),
  },
  {
    ques: "8. Can I work with iVistaz for a one-time project?",
    bachelor:
      "For most digital marketing services like SEO, social media marketing, search engine marketing or content development, we prefer to work on a retainer model. Web design/redesign projects can be treated as a one-time projects.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="bg-black border-b-2 border-dashed border-[#2D2D2D] pb-16 ">
        <div className="text-center text-[#C1C1C1] text-5xl pt-20 pb-10">
          <h3>FAQs</h3>
        </div>

        <div
          id="accordion-flush"
          className="max-w-screen-lg mx-auto lg:p-0 p-10"
        >
          {servicesList.map((service, index) => (
            <div key={index} className="border-t border-[#2D2D2D]">
              <h2>
                <button
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  className="flex items-center justify-between w-full py-5 font-medium text-[#fff] gap-3"
                >
                  <span className="text-left text-xl md:text-2xl text-[#fff] font-tthoves-demibold">
                    {service.ques}
                  </span>
                  {/* <span
                    className={`text-xl sm:text-3xl transform transition-transform duration-300 cursor-pointer text-[#fff] ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    {<TfiPlus />}
                  </span> */}
                  <span
                    // onClick={() => toggleAccordion(index)}
                    className="text-xl sm:text-3xl transform transition-transform duration-300 cursor-pointer text-[#fff]"
                  >
                    {openIndex === index ? <TfiMinus /> : <TfiPlus />}
                  </span>
                </button>
              </h2>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 text-[#C1C1C1]">
                      <p className="px-3 text-lg">{service.bachelor}</p>
                      <p className="px-3 text-lg">{service.master}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
