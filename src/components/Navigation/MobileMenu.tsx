"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open menu" className="md:hidden">
        <Image
          src="/icon-hamburger.svg"
          alt="Open menu"
          width={20}
          height={17}
          priority
        />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col items-start gap-9 bg-[#2C6269] px-10 py-16"
      >
        <nav aria-label="Mobile" className="">
          <ul className="flex flex-col gap-6 text-white">
            <li>
              <Link
                href="/"
                className="block text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#F67E7E]"
                onClick={handleClose}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#F67E7E]"
                onClick={handleClose}
              >
                about
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/contact" className="" onClick={handleClose}>
          <Button
            type="button"
            size={"lg"}
            className="cursor-pointer rounded-full border border-white bg-transparent text-lg font-semibold tracking-normal text-white transition-colors duration-300 ease-in-out hover:border-none hover:bg-white hover:text-[#002529]"
          >
            contact us
          </Button>
        </Link>
        <Image
          src="/bg-pattern-about-1-mobile-nav-1.svg"
          alt="pattern"
          width={200}
          height={200}
          className="absolute -right-25 bottom-0"
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
