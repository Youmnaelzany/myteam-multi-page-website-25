import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import Wrapper from "./Wrapper";

const GetStarted = () => {
  return (
    <div className="relative overflow-hidden bg-[#F67E7E]">
      {/* Mobile Layout - Vertical Stack */}
      <Wrapper className="flex flex-col items-center gap-6 py-24 md:hidden">
        <h2 className="text-center text-[2rem] leading-8 font-bold text-[#012F34]">
          Ready to get started?
        </h2>
        <Link href="/contact">
          <Button
            type="button"
            size="lg"
            className="rounded-full border border-[#012F34] bg-transparent px-8 py-3 text-lg font-semibold text-[#012F34] transition-colors duration-300 ease-in-out hover:bg-[#012F34] hover:text-white"
          >
            contact us
          </Button>
        </Link>
      </Wrapper>

      {/* Tablet Layout - Horizontal */}
      <Wrapper className="hidden md:flex md:items-center md:justify-between md:px-16 md:py-24 lg:hidden">
        <h2 className="text-[2rem] leading-8 font-bold text-[#012F34]">
          Ready to get started?
        </h2>
        <Link href="/contact">
          <Button
            type="button"
            size="lg"
            className="rounded-full border border-[#012F34] bg-transparent px-8 py-3 text-lg font-semibold text-[#012F34] transition-colors duration-300 ease-in-out hover:bg-[#012F34] hover:text-white"
          >
            contact us
          </Button>
        </Link>
      </Wrapper>

      {/* Desktop Layout - Horizontal */}
      <Wrapper className="hidden lg:flex lg:items-center lg:justify-between lg:px-32 lg:py-16">
        <h2 className="text-5xl leading-10 font-bold text-[#012F34]">
          Ready to get started?
        </h2>
        <Link href="/contact">
          <Button
            type="button"
            size="lg"
            className="rounded-full border border-[#012F34] bg-transparent px-8 py-3 text-lg font-semibold text-[#012F34] transition-colors duration-300 ease-in-out hover:bg-[#012F34] hover:text-white"
          >
            contact us
          </Button>
        </Link>
      </Wrapper>

      <Image
        src="/bg-pattern-home-6-about-5.svg"
        alt="pattern"
        width={200}
        height={144}
        className="absolute -bottom-6 left-0 lg:bottom-0"
      />
    </div>
  );
};

export default GetStarted;
