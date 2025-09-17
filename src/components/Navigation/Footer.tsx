import Image from "next/image";
import Link from "next/link";

import { FaPinterest, FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-[#002529]">
      <Wrapper className="py-12">
        {/* Mobile-only layout */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          {/* Logo & Links */}
          <div className="flex flex-col items-center gap-6">
            <Link href="/" aria-label="myteam home" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="myteam"
                width={160}
                height={40}
                priority
              />
            </Link>
            <nav aria-label="Footer navigation">
              <ul className="flex items-center gap-6 text-[15px] leading-[25px] font-semibold tracking-normal text-white">
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

          {/* Contact Info */}
          <address className="text-center text-[15px] leading-[25px] font-semibold tracking-normal text-white/60 not-italic">
            <div>987 Hillcrest Lane</div>
            <div>Irvine, CA</div>
            <div>California 92714</div>
            <div>
              <Link
                href="tel:+19498337432"
                className="transition-colors duration-300 ease-in-out hover:text-[#F67E7E]"
              >
                Call Us : 949-833-7432
              </Link>
            </div>
          </address>

          {/* Social + Copyright */}
          <div className="flex flex-col items-center gap-6">
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-6">
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                      >
                        <FaSquareFacebook className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Pinterest page"
                      >
                        <FaPinterest className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Pinterest</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Twitter page"
                      >
                        <FaXTwitter className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              </ul>
            </nav>
            <p className="text-[15px] leading-[25px] font-semibold tracking-normal text-white/60">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>

        {/* Medium Screen Layout - 2 rows */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col gap-8">
            {/* Top Row - Logo & Contact */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-6">
                <Link href="/" aria-label="myteam home" className="shrink-0">
                  <Image
                    src="/logo.svg"
                    alt="myteam"
                    width={160}
                    height={40}
                    priority
                  />
                </Link>
                <nav aria-label="Footer navigation">
                  <ul className="flex items-center gap-6 text-[15px] leading-[25px] font-semibold tracking-normal text-white">
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
              <address className="text-right text-[15px] leading-[25px] font-semibold tracking-normal text-white/60 not-italic">
                <div>987 Hillcrest Lane</div>
                <div>Irvine, CA</div>
                <div>California 92714</div>
                <div>
                  <Link
                    href="tel:+19498337432"
                    className="transition-colors duration-300 ease-in-out hover:text-[#F67E7E]"
                  >
                    Call Us : 949-833-7432
                  </Link>
                </div>
              </address>
            </div>

            {/* Bottom Row - Social & Copyright */}
            <div className="flex items-center justify-between">
              <nav aria-label="Social media links">
                <ul className="flex items-center gap-6">
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit our Facebook page"
                        >
                          <FaSquareFacebook className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href="https://pinterest.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit our Pinterest page"
                        >
                          <FaPinterest className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Pinterest</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit our Twitter page"
                        >
                          <FaXTwitter className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                </ul>
              </nav>
              <p className="text-[15px] leading-[25px] font-semibold tracking-normal text-white/60">
                Copyright 2020. All Rights Reserved
              </p>
            </div>
          </div>
        </div>

        {/* Large-only layout (3 columns) */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left Column - Logo & Links */}
          <div className="flex flex-col gap-8">
            <Link href="/" aria-label="myteam home" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="myteam"
                width={160}
                height={40}
                priority
              />
            </Link>
            <nav aria-label="Footer navigation">
              <ul className="flex items-center gap-6 text-[15px] leading-[25px] font-semibold tracking-normal text-white">
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

          {/* Middle Column - Contact Info */}
          <address className="text-[15px] leading-[25px] font-semibold tracking-normal text-white/60 not-italic">
            <div>987 Hillcrest Lane</div>
            <div>Irvine, CA</div>
            <div>California 92714</div>
            <div>
              <Link
                href="tel:+19498337432"
                className="transition-colors duration-300 ease-in-out hover:text-[#F67E7E]"
              >
                Call Us : 949-833-7432
              </Link>
            </div>
          </address>

          {/* Right Column - Social & Copyright */}
          <div className="flex flex-col items-end gap-11">
            <nav aria-label="Social media links">
              <ul className="flex items-center gap-6">
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                      >
                        <FaSquareFacebook className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Pinterest page"
                      >
                        <FaPinterest className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Pinterest</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Twitter page"
                      >
                        <FaXTwitter className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              </ul>
            </nav>
            <p className="text-[15px] leading-[25px] font-semibold tracking-normal text-white/60">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
