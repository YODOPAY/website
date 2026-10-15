import React from 'react';
import AuraCard from './AuraCard';
import Reveal from './Reveal';
import ReserveTagButton from './ReserveTagButton';

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
    <section className="w-full bg-[#F5EFED] px-4 md:px-[60px] pt-16 md:pt-[114px] pb-20 md:pb-[88px] font-jakarta overflow-hidden">
      <div className="mx-auto w-full max-w-[1320px]">

        {/* Top Features Section */}
        <div className="-mx-4 px-4 md:mx-0 md:px-0 flex md:grid md:grid-cols-1 lg:grid-cols-[1fr_1.21fr_1fr] gap-6 md:gap-12 xl:gap-[102px] overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 no-scrollbar">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} variant="pop" delay={index * 160} className="w-[72%] md:w-full shrink-0 md:shrink snap-start md:max-w-[480px] lg:max-w-none md:mx-auto flex flex-col items-center text-center">
              <span className="flex items-center justify-center gap-2 bg-white h-[42px] w-full rounded-full text-[15px] font-medium text-[#737373]">
                <span>{item.icon}</span> {item.label}
              </span>
              <h3 className="mt-5 font-display text-xl md:text-[23px] font-semibold text-[#292800]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[15px] md:text-[19px] leading-normal md:leading-[1.6] font-semibold text-[#525252]">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 lg:mt-[114px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">

          {/* Left Content */}
          <div className="w-full max-w-[525px] lg:mt-[75px] flex flex-col items-start text-left text-[#292800]">
            <h2 className="font-display text-[30px] min-[370px]:text-[34px] md:text-[47px] font-bold leading-[1.1] text-[#151400]">
              Your Wallet, But <br />
              <Reveal as="span" variant="write" delay={200} className="font-hand font-normal text-[1.3em]">Make It Yours.</Reveal>
            </h2>
            <p className="mt-4 md:mt-6 text-[15px] md:text-[19px] leading-normal md:leading-[1.6] font-semibold">
              Set up your wallet, Choose your aura. Your YodoTag becomes how people find and pay you. Simple setup, real identity, and money that moves with you.
            </p>
            <ReserveTagButton className="mt-6 w-[352px]" />
          </div>

          {/* Right Content */}
          <Reveal variant="tilt" className="w-full max-w-[442px] lg:shrink-0">
            <AuraCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
