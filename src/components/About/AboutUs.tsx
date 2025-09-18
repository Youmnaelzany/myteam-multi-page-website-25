import Image from "next/image";

import Wrapper from "../Navigation/Wrapper";

const AboutUs = () => {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="best-talent-heading"
    >
      <Wrapper className="p flex flex-col items-center justify-center gap-4 pt-20 pb-28 text-center md:justify-between md:gap-6 md:py-28 lg:flex-row lg:px-26 lg:py-[7.5rem] lg:text-left">
        {/* Main heading with proper semantic structure */}
        <h1
          id="best-talent-heading"
          className="w-[253px] text-5xl leading-12 font-bold tracking-normal text-white md:w-[338px] md:text-[4rem] md:leading-[4.5rem] lg:w-[527px] lg:text-[6.25rem] lg:leading-[6.25rem]"
        >
          About
        </h1>
        {/* Descriptive paragraph with proper semantic structure */}
        <div className="relative">
          {/* Decorative border */}
          <div
            className="absolute -top-20 left-0 hidden h-1 w-[50px] bg-[#F67E7E] lg:flex"
            aria-hidden="true"
          />
          <p className="text-[0.9375rem] leading-7 font-semibold text-white md:w-[457px] lg:w-[445px] lg:text-lg">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We&apos;ll bring those teams to you.
          </p>
        </div>
      </Wrapper>

      {/* Right background pattern */}
      <Image
        src="/bg-pattern-about-1-mobile-nav-1.svg"
        alt=""
        width={200}
        height={200}
        className="absolute -right-25 -bottom-25 md:bottom-0"
        aria-hidden="true"
        priority={false}
        loading="lazy"
        sizes="(max-width: 768px) 358px, 358px"
      />
    </section>
  );
};

export default AboutUs;
