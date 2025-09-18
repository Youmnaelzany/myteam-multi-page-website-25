"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Plus, X } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Wrapper from "../Navigation/Wrapper";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const teamMembers = [
  {
    id: 1,
    quote:
      "It always amazes me how much talent there is in every corner of the globe.",
    name: "Nikita Marks",
    position: "Founder & CEO",
    image: "/avatar-nikita.jpg",
  },
  {
    id: 2,
    quote:
      "Distributed teams required unique processes. You need to approach work in a new way.",
    name: "Cristian Duncan",
    position: "Co-founder & COO",
    image: "/avatar-christian.jpg",
  },
  {
    id: 3,
    quote:
      "Technology is at the forefront of enabling distributed teams. That's where we come in.",
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
    image: "/avatar-cruz.jpg",
  },
  {
    id: 4,
    quote:
      "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
    name: "Drake Heaton",
    position: "Business Development Lead",
    image: "/avatar-drake.jpg",
  },
  {
    id: 5,
    quote:
      "Unique perspectives shape unique products, which is what you need to survive these days.",
    name: "Griffin Wise",
    position: "Lead Marketing",
    image: "/avatar-griffin.jpg",
  },
  {
    id: 6,
    quote:
      "Empowered teams create truly amazing products. Set the north star and let them follow it.",
    name: "Aden Allan",
    position: "Head of Talent",
    image: "/avatar-aden.jpg",
  },
];

const MeetTheDirectors = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (memberId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(memberId)) {
        newSet.delete(memberId);
      } else {
        newSet.add(memberId);
      }
      return newSet;
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#004047]">
      {/* Background Pattern - Top Left */}
      <Image
        src="/bg-pattern-about-2-contact-1.svg"
        alt=""
        width={200}
        height={200}
        className="absolute -top-25 -left-25 md:top-0"
        aria-hidden="true"
      />

      <Wrapper className="flex flex-col items-center justify-center gap-12 py-[7.5rem] text-center md:py-[7.25rem] lg:gap-16 lg:py-[8.75rem]">
        <h2 className="text-[2rem] leading-8 font-bold tracking-normal text-white lg:text-5xl lg:leading-12">
          Meet the directors
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const isFlipped = flippedCards.has(member.id);

            return (
              <div
                key={member.id}
                className="relative h-[253px] w-[327px] md:w-[281px] lg:w-[350px]"
              >
                {/* Card Container */}
                <div
                  className={`relative h-full w-full transition-transform duration-700 ease-in-out ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Side - Image, Name, Position */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#012F34] backface-hidden">
                    {/* Image */}
                    <div className="mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="mx-auto rounded-full border-2 border-[#79C8C7]"
                      />
                    </div>
                    {/* Name */}
                    <h3 className="text-lg leading-7 font-bold tracking-normal text-[#79C8C7]">
                      {member.name}
                    </h3>
                    {/* Position */}
                    <h4 className="text-[0.9375rem] leading-[1.5625rem] font-medium tracking-normal text-white">
                      {member.position}
                    </h4>
                  </div>

                  {/* Back Side - Name, Quote, Social Links */}
                  <div className="absolute inset-0 flex [transform:rotateY(180deg)] flex-col items-center justify-center gap-4 bg-[#002529] backface-hidden">
                    {/* Name */}
                    <h3 className="text-lg leading-7 font-bold tracking-normal text-[#79C8C7]">
                      {member.name}
                    </h3>
                    {/* Quote */}
                    <p className="px-4 text-[0.9375rem] leading-[1.5625rem] font-medium tracking-normal text-white">
                      "{member.quote}"
                    </p>
                    {/* Social Media Links */}
                    <ul className="flex items-center gap-4">
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
                      <li>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href="https://linkedin.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit our LinkedIn page"
                            >
                              <FaLinkedin className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>LinkedIn</p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Toggle Button */}
                <Button
                  type="button"
                  size={"icon"}
                  onClick={() => toggleCard(member.id)}
                  className="absolute inset-x-0 -bottom-6 z-10 mx-auto size-14.5 rounded-full bg-[#F67E7E] transition-colors duration-300 hover:bg-[#79C8C7]"
                >
                  {isFlipped ? (
                    <X className="size-6 text-[#012F34]" />
                  ) : (
                    <Plus className="size-6 text-[#012F34]" />
                  )}
                </Button>
              </div>
            );
          })}
        </div>
      </Wrapper>
      {/* Background Pattern - Bottom Right */}
      <Image
        src="/bg-pattern-home-4-about-3.svg"
        alt=""
        width={147}
        height={100}
        className="absolute right-0 bottom-0"
        aria-hidden="true"
      />
    </section>
  );
};

export default MeetTheDirectors;
