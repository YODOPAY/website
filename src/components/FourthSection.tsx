import React from 'react';
import Image from 'next/image';

const FourthSection = () => {
  return (
    <section className="w-full min-h-screen bg-[var(--yodo-cream)] px-6 pt-20 pb-48 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-8 max-w-xl text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--yodo-dark)] leading-[1.1] tracking-tight">
            Your Wallet, But <br />
            <span className="font-hand italic font-normal">Make It Yours.</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--yodo-dark)] opacity-90 leading-relaxed font-medium">
            Set up your wallet, Choose your aura. Your YodoTag becomes how people find and pay you. Simple setup, real identity, and money that moves with you.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-4 pt-2">
            <button className="flex items-center gap-3 bg-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#CEC600]/30 shadow-lg cursor-pointer">
              <Image
                src="/icons/playstore.svg"
                alt="Google Play"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex flex-col items-start pr-2">
                <span className="text-[10px] uppercase font-bold text-[#CEC600] leading-tight tracking-wider">Get it on</span>
                <span className="text-xl font-bold text-[#CEC600] leading-none">Google Play</span>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#CEC600]/30 shadow-lg cursor-pointer">
              <Image
                src="/icons/appstore.svg"
                alt="App Store"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex flex-col items-start pr-1">
                <span className="text-[10px] uppercase font-bold text-[#CEC600] leading-tight tracking-wider">Download on the</span>
                <span className="text-xl font-bold text-[#CEC600] leading-none">App Store</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Single Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px]">
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
