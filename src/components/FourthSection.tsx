import React from 'react';
import Image from 'next/image';

const ITEMS = [
  {
    icon: "🧩",
    label: "Sign Up Once",
    title: "Create Your Wallet",
    desc: "Set up your Yodo wallet in minutes with quick verification."
  },
  {
    icon: "🏷️",
    label: "One Tag. Easy Payments.",
    title: "Claim Your YodoTag",
    desc: "Send and receive money using your YodoTag instead of long account numbers."
  },
  {
    icon: "💸",
    label: "Send, Receive, Withdraw.",
    title: "Move Money Freely",
    desc: "Pay friends, get paid, or send to bank accounts when you need to."
  }
];

const FourthSection = () => {
  return (
    <section className="w-full min-h-screen bg-[var(--yodo-cream)] px-0 md:px-6 pt-20 pb-48 flex flex-col items-center justify-center overflow-hidden">

      {/* Top Features Section */}
      <div className="w-full mb-20 md:mb-32">
        {/* Mobile: Infinite Scroll */}
        <div className="md:hidden w-full overflow-hidden">
          <div className="animate-marquee flex">
            {[...ITEMS, ...ITEMS].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center min-w-[320px] max-w-[320px] mr-8">
                <span className="mb-2 flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-[43px] w-full text-[11px] font-semibold text-gray-500">
                  <span>{item.icon}</span> {item.label}
                </span>
                <h3 className="text-[var(--yodo-dark)] mb-3 text-[17px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[var(--yodo-dark)] opacity-80 leading-relaxed font-jakarta text-[14px] font-semibold text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-12 max-w-[1400px] mx-auto px-6">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="mb-3 flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-[56px] w-full text-[15px] font-semibold text-gray-500">
                <span>{item.icon}</span> {item.label}
              </span>
              <h3 className="text-[var(--yodo-dark)] mb-4 text-[23px] font-semibold">
                {item.title}
              </h3>
              <p className="text-[var(--yodo-dark)] opacity-80 leading-relaxed max-w-lg mx-auto font-jakarta text-[19px] font-semibold">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 px-6 md:px-0 mt-12 md:mt-0">

        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 max-w-xl text-left items-start">
          <h2 className="text-[40px] md:text-6xl lg:text-7xl font-bold text-[var(--yodo-dark)] leading-[1.1] tracking-tight">
            Your Wallet, But <br />
            <span className="font-hand italic font-normal">Make It Yours.</span>
          </h2>
          <p className="text-base md:text-xl text-[var(--yodo-dark)] opacity-90 leading-relaxed font-medium max-w-md lg:max-w-none">
            Set up your wallet, Choose your aura. Your YodoTag becomes how people find and pay you. Simple setup, real identity, and money that moves with you.
          </p>

          <div className="flex flex-row items-center justify-start gap-4 pt-2">
            <button className="flex items-center gap-2 md:gap-3 bg-black rounded-[48px] px-5 py-2 md:px-6 md:py-3 transition-transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#CEC600]/30 shadow-lg cursor-pointer">
              <Image
                src="/icons/playstore.svg"
                alt="Google Play"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <div className="flex flex-col items-start pr-0 md:pr-2">
                <span className="text-[8px] md:text-[10px] uppercase font-bold text-[#CEC600] leading-tight tracking-wider">Get it on</span>
                <span className="text-sm md:text-xl font-bold text-[#CEC600] leading-none">Google Play</span>
              </div>
            </button>

            <button className="flex items-center gap-2 md:gap-3 bg-black rounded-[48px] px-5 py-2 md:px-6 md:py-3 transition-transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#CEC600]/30 shadow-lg cursor-pointer">
              <Image
                src="/icons/appstore.svg"
                alt="App Store"
                width={32}
                height={32}
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <div className="flex flex-col items-start pr-0 md:pr-1">
                <span className="text-[8px] md:text-[10px] uppercase font-bold text-[#CEC600] leading-tight tracking-wider">Download on the</span>
                <span className="text-sm md:text-xl font-bold text-[#CEC600] leading-none">App Store</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Single Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-[340px] md:max-w-[500px]">
            <Image
              src="/images/aura.png"
              alt="Your Wallet, Make It Yours"
              width={500}
              height={800}
              className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
