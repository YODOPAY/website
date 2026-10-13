import React from 'react';
import ReserveTagButton from './ReserveTagButton';
import Reveal from './Reveal';

const SeventhSection = () => {
  return (
    // TODO: add the background photo once the asset is added
    <section className="w-full min-h-[760px] md:min-h-[1024px] bg-linear-to-b from-[#3A4A52] via-[#2A2620] to-[#141204] px-6 pt-[100px] md:pt-[82px] pb-20 flex flex-col items-center text-center text-white font-jakarta">
      <h2 className="font-display text-[32px] md:text-[69px] font-semibold leading-[1.1]">
        <Reveal as="span" variant="pop" className="inline-block">Your @Tag</Reveal>
        <br />
        <Reveal as="span" variant="pop" delay={150} className="inline-block">Starts Here</Reveal>
      </h2>
      <Reveal as="p" delay={300} className="mt-2 max-w-[320px] md:max-w-[520px] text-sm md:text-xl leading-normal">
        Reserve your unique Yodo Handle and be ready to send, receive, and connect when Yodo launches.
      </Reveal>
      <ReserveTagButton variant="yellow" compactOnMobile className="mt-3 md:mt-2 md:w-[297px]" />
    </section>
  );
};

export default SeventhSection;
