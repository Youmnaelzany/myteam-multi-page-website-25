import Link from "next/link";

import { Button } from "@/components/ui/button";

import Wrapper from "./Wrapper";

const GetStarted = () => {
  return (
    <div className="bg-[#F67E7E]">
      {/* Mobile Layout - Vertical Stack */}
      <Wrapper className="flex flex-col items-center gap-6 py-16 md:hidden">
        <h2 className="text-center text-4xl leading-10 font-bold text-[#002529]">
          Ready to get started?
        </h2>
        <Link href="/contact">
          <Button
            type="button"
            size="lg"
            className="rounded-full border border-[#002529] bg-transparent px-8 py-3 text-lg font-semibold text-[#002529] transition-colors duration-300 ease-in-out hover:bg-[#002529] hover:text-white"
          >
            contact us
          </Button>
        </Link>
      </Wrapper>

      {/* Tablet Layout - Horizontal */}
      <Wrapper className="hidden md:flex md:items-center md:justify-between md:py-16 lg:hidden">
        <h2 className="text-4xl leading-10 font-bold text-[#002529]">
          Ready to get started?
        </h2>
        <Link href="/contact">
          <Button
            type="button"
            size="lg"
            className="rounded-full border border-[#002529] bg-transparent px-8 py-3 text-lg font-semibold text-[#002529] transition-colors duration-300 ease-in-out hover:bg-[#002529] hover:text-white"
          >
            contact us
          </Button>
        </Link>
      </Wrapper>

      {/* Desktop Layout - Horizontal */}
      <Wrapper className="hidden lg:flex lg:items-center lg:justify-between lg:py-16">
        <h2 className="text-4xl leading-10 font-bold text-[#002529]">
          Ready to get started?
        </h2>
        <Link href="/contact">
          <Button
            type="button"
            size="lg"
            className="rounded-full border border-[#002529] bg-transparent px-8 py-3 text-lg font-semibold text-[#002529] transition-colors duration-300 ease-in-out hover:bg-[#002529] hover:text-white"
          >
            contact us
          </Button>
        </Link>
      </Wrapper>
    </div>
  );
};

export default GetStarted;
