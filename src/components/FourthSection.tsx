import React from 'react';
import Image from 'next/image';

const FourthSection = () => {
  return (
    <section className="w-full min-h-screen bg-[var(--yodo-cream)] px-6 py-20 flex flex-col items-center justify-center overflow-hidden">
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
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.087 19.39L15.939 12.56L13.753 14.717L21.498 22.361C21.782 22.067 21.848 21.6 21.644 21.23L21.087 19.39Z" fill="#CEC600" />
                <path d="M3.38806 2.05499C3.16706 2.27499 3.03706 2.61099 3.03706 3.01799V20.982C3.03706 21.39 3.16706 21.725 3.38806 21.945L12.981 12.449L3.38806 2.05499Z" fill="#CEC600" />
                <path d="M14.561 10.875L21.077 4.45302C21.325 4.09602 21.298 3.59302 20.973 3.28002L13.754 9.28302L14.561 10.875Z" fill="#CEC600" />
                <path d="M14.555 10.88L3.388 2.05499L12.981 12.449L14.555 10.88Z" fill="#CEC600" />
              </svg>
              <div className="flex flex-col items-start pr-2">
                <span className="text-[10px] uppercase font-bold text-[#CEC600] leading-tight tracking-wider">Get it on</span>
                <span className="text-xl font-bold text-[#CEC600] leading-none">Google Play</span>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-black rounded-[48px] px-6 py-3 transition-transform hover:scale-105 active:scale-95 border border-transparent hover:border-[#CEC600]/30 shadow-lg cursor-pointer">
              <svg className="w-8 h-8 text-[#CEC600]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.892 14.128C17.904 12.016 19.648 10.895 19.722 10.854C18.675 9.35101 17.062 9.12401 16.347 9.09601C14.992 8.95601 13.676 9.89701 12.992 9.89701C12.302 9.89701 11.233 9.12201 10.108 9.15101C8.66503 9.17101 7.33703 9.98901 6.60203 11.261C5.09303 13.882 6.22503 17.766 7.69703 19.888C8.42303 20.929 9.26803 22.046 10.42 22.005C11.517 21.961 11.942 21.296 13.298 21.296C14.646 21.296 15.029 22.005 16.175 21.961C17.382 21.918 18.157 20.871 18.872 19.833C19.697 18.647 20.045 17.493 20.06 17.436C20.016 17.417 17.872 16.606 17.892 14.128ZM15.424 7.22801C16.035 6.49501 16.444 5.47401 16.331 4.46901C15.442 4.56001 14.364 5.06001 13.731 5.80301C13.167 6.45201 12.671 7.49201 12.805 8.48301C13.791 8.55901 14.805 7.97301 15.424 7.22801Z" />
              </svg>
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
