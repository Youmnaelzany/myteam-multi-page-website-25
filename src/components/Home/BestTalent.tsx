import Image from "next/image";

import Wrapper from "../Navigation/Wrapper";

const BestTalent = () => {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="best-talent-heading"
    >
      {/* Left background pattern - only visible on large screens */}
      <Image
        src="/bg-pattern-home-1.svg"
        alt=""
        width={200}
        height={200}
        className="hidden lg:absolute lg:top-0 lg:-left-25 lg:flex"
        aria-hidden="true"
        priority={false}
        loading="lazy"
        sizes="(max-width: 1024px) 0px, 200px"
      />

      <Wrapper className="flex flex-col items-center justify-center gap-4 pt-32 pb-56 text-center md:justify-between md:gap-6 md:pt-28 md:pb-52 lg:flex-row lg:items-end lg:px-26 lg:pb-56 lg:text-left">
        {/* Main heading with proper semantic structure */}
        <h1
          id="best-talent-heading"
          className="w-[253px] text-5xl leading-12 font-bold tracking-normal text-white md:w-[338px] md:text-[4rem] md:leading-[4.5rem] lg:w-[527px] lg:text-[6.25rem] lg:leading-[6.25rem]"
        >
          Find the best <span className="text-[#F67E7E]">talent</span>
        </h1>
        {/* Descriptive paragraph with proper semantic structure */}
        <div className="relative">
          {/* Decorative border */}
          <div
            className="absolute -top-20 left-0 hidden h-1 w-[50px] bg-[#79C8C7] lg:flex"
            aria-hidden="true"
          />
          <p className="text-[0.9375rem] leading-7 font-semibold text-white md:w-[457px] lg:w-[445px] lg:text-lg">
            Finding the right people and building high performing teams can be
            hard. Most companies aren&apos;t tapping into the abundance of
            global talent. We&apos;re about to change that.
          </p>
        </div>
      </Wrapper>

      {/* Right background pattern */}
      <Image
        src="/bg-pattern-home-2.svg"
        alt=""
        width={358}
        height={100}
        className="absolute right-0 bottom-0 md:right-16"
        aria-hidden="true"
        priority={false}
        loading="lazy"
        sizes="(max-width: 768px) 358px, 358px"
      />
    </section>
  );
};

export default BestTalent;
