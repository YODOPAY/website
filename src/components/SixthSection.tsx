"use client"

import React, { useState } from 'react';
import Reveal from './Reveal';

const faqData = [
  {
    question: "Is YodoPay A Bank?",
    answer: "Not exactly. We’re a social-first digital wallet built for how you actually live. Think of us as the bridge between your money, your friends, and your favorite local spots."
  },
  {
    question: "How Do YodoTags Work?",
    answer: "Your @Tag is your unique identity on Yodo. Forget long account numbers—just share your tag to get paid instantly."
  },
  {
    question: "Which Currencies Can I Use?",
    answer: "Right now, you can hold and swap between Naira, Cedis, and Rand instantly. We’re constantly adding more spots to the map, so stay tuned!"
  },
  {
    question: "How Do I Get My Spot On The Spotlight?",
    answer: "If you’ve got a hustle, we’ve got a map. Just claim your business @Tag, set up your shop profile, and you’ll show up for everyone nearby."
  },
  {
    question: "Can I Use Yodo If I’m Bouncing Between Lagos And Accra?",
    answer: "That’s exactly what it’s for. Swap between Naira and Cedis in one tap with zero 'mental math.' Your wallet moves as fast as you do, so you can pay for that Uber or jollof the second you land."
  },
  {
    question: "Is This Just Another Fintech App I’ll Delete In A Week?",
    answer: "Yodo is the only wallet that actually brings your city to life. Between the Discovery Map, the Spotlight vendors, it’s less about 'banking' and more about living your best life with the squad."
  }
];

const MARQUEE_ITEMS = [
  "Money Moves.",
  "Do Your Thing",
  "Fund Plans.",
  "Send Money.",
  "Split Bills",
  "Stay Connected",
  "Get Paid",
  "In Motion",
];

const SixthSection = () => {
  const [openItems, setOpenItems] = useState<number[]>(faqData.map((_, index) => index));

  const toggleAccordion = (index: number) => {
    setOpenItems((items) =>
      items.includes(index) ? items.filter((item) => item !== index) : [...items, index]
    );
  };

  return (
    <section id="faqs" className="w-full bg-[#F5EFED] font-jakarta">
      <div className="mx-auto w-full max-w-[702px] px-4 md:px-6 pt-16 md:pt-[84px] pb-16 md:pb-[190px] flex flex-col items-center">

        {/* Header */}
        <h2 className="text-center font-display text-[26px] md:text-[32px] font-semibold leading-[1.2] text-[#292800]">
          Got Questions?
          <br />
          <Reveal as="span" variant="write" delay={150} className="font-hand font-normal text-[1.3em] leading-none">We&rsquo;ve Got Answers.</Reveal>
        </h2>

        {/* FAQ List */}
        <div className="w-full mt-10 md:mt-12 flex flex-col gap-6 md:gap-9">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <Reveal key={item.question} delay={Math.min(index, 3) * 80} className="w-full">
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <h3 className="font-display text-sm md:text-[19px] font-semibold leading-[1.2] text-[#292800]">
                    {item.question}
                  </h3>
                  <span className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#E5E5E5] flex items-center justify-center text-[#292800]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden>
                      <path d="M1 7h12" />
                      {!isOpen && <path d="M7 1v12" />}
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-2.5' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-[19px] font-semibold leading-[1.6] text-[#525252]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full h-[50px] md:h-[120px] bg-[#CEC600] overflow-hidden flex items-center">
        <div className="animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <span key={index} className="flex items-center font-display text-xs md:text-[19px] font-semibold text-[#3E3B00] whitespace-nowrap">
              <span className="mx-5 md:mx-9 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F0EEAD]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
