import Image from "next/image";
import Link from "next/link";

import MobileMenu from "@/components/Navigation/MobileMenu";
import { Button } from "@/components/ui/button";

import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <header className="">
      <Wrapper className="flex items-center justify-between gap-6 py-8">
        <div className="flex items-center gap-6 md:gap-12 lg:gap-20">
          <Link href="/" aria-label="myteam home" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="myteam"
              width={160}
              height={40}
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-10 text-lg leading-6.5 font-semibold tracking-normal text-white">
              <li>
                <Link
                  href="/"
                  className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#F67E7E]"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#F67E7E]"
                >
                  about
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <Link href="/contact" className="hidden md:block">
            <Button
              type="button"
              size="lg"
              className="cursor-pointer rounded-full border border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-colors duration-300 ease-in-out hover:border-none hover:bg-white hover:text-[#002529]"
            >
              contact us
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
