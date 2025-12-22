"use client"

import React, { useState } from 'react';
  
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
    question: "Can I Use Yodo If I'm Bouncing Between Lagos And Accra?",
    answer: "That’s exactly what it’s for. Swap between Naira and Cedis in one tap with zero 'mental math.' Your wallet moves as fast as you do, so you can pay for that Uber or jollof the second you land."
  },
  {
    question: "Is This Just Another Fintech App I'll Delete In A Week?",
    answer: "Yodo is the only wallet that actually brings your city to life. Between the Discovery Map, the Spotlight vendors, it’s less about 'banking' and more about living your best life with the squad."
  }
];

const APIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className={`w-8 h-8 rounded-full bg-[#EAEAEA] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 11L6 1M6 1L1 6M6 1L11 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const SixthSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-[var(--yodo-cream)] px-6 py-20 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--yodo-dark)] mb-2 tracking-tight">
            Got Questions?
          </h2>
          <h2 className="text-4xl md:text-5xl font-hand italic text-[var(--yodo-dark)] opacity-90">
            We've Got Answers.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col gap-6">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="w-full border-b border-gray-200/50 pb-6 cursor-pointer group"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-[var(--yodo-dark)] font-sans">
                    {item.question}
                  </h3>
                  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-[#E5E5E0] flex items-center justify-center group-hover:bg-[#dcdcd7] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180">
                        <path d="M7 13L7 1M7 1L1 7M7 1L13 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base md:text-lg text-[var(--yodo-dark)] opacity-70 leading-relaxed max-w-[90%]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SixthSection;
