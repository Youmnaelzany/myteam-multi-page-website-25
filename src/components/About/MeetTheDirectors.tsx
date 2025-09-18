"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useMemo, useState } from "react";

import { Plus, X } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Wrapper from "../Navigation/Wrapper";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type TeamMember = {
  id: number;
  quote: string;
  name: string;
  position: string;
  image: string;
  linkedin: string;
  twitter: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    quote:
      "It always amazes me how much talent there is in every corner of the globe.",
    name: "Nikita Marks",
    position: "Founder & CEO",
    image: "/avatar-nikita.jpg",
    linkedin: "https://linkedin.com/in/nikita-marks",
    twitter: "https://twitter.com/nikita_marks",
  },
  {
    id: 2,
    quote:
      "Distributed teams required unique processes. You need to approach work in a new way.",
    name: "Cristian Duncan",
    position: "Co-founder & COO",
    image: "/avatar-christian.jpg",
    linkedin: "https://linkedin.com/in/cristian-duncan",
    twitter: "https://twitter.com/cristian_duncan",
  },
  {
    id: 3,
    quote:
      "Technology is at the forefront of enabling distributed teams. That's where we come in.",
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
    image: "/avatar-cruz.jpg",
    linkedin: "https://linkedin.com/in/cruz-hamer",
    twitter: "https://twitter.com/cruz_hamer",
  },
  {
    id: 4,
    quote:
      "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
    name: "Drake Heaton",
    position: "Business Development Lead",
    image: "/avatar-drake.jpg",
    linkedin: "https://linkedin.com/in/drake-heaton",
    twitter: "https://twitter.com/drake_heaton",
  },
  {
    id: 5,
    quote:
      "Unique perspectives shape unique products, which is what you need to survive these days.",
    name: "Griffin Wise",
    position: "Lead Marketing",
    image: "/avatar-griffin.jpg",
    linkedin: "https://linkedin.com/in/griffin-wise",
    twitter: "https://twitter.com/griffin_wise",
  },
  {
    id: 6,
    quote:
      "Empowered teams create truly amazing products. Set the north star and let them follow it.",
    name: "Aden Allan",
    position: "Head of Talent",
    image: "/avatar-aden.jpg",
    linkedin: "https://linkedin.com/in/aden-allan",
    twitter: "https://twitter.com/aden_allan",
  },
];

// Memoized Team Member Card Component
const TeamMemberCard = memo(
  ({
    member,
    isFlipped,
    onToggle,
  }: {
    member: TeamMember;
    isFlipped: boolean;
    onToggle: (id: number) => void;
  }) => {
    const handleToggle = useCallback(() => {
      onToggle(member.id);
    }, [member.id, onToggle]);

    return (
      <div
        className="relative h-[253px] w-[327px] md:w-[281px] lg:w-[350px]"
        role="button"
        tabIndex={0}
        aria-label={`${member.name} - ${member.position}. Click to ${isFlipped ? "hide" : "view"} details`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
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
                alt={`${member.name}, ${member.position}`}
                width={96}
                height={96}
                className="mx-auto rounded-full border-2 border-[#79C8C7]"
                priority={member.id <= 3} // Prioritize first 3 images
                sizes="(max-width: 768px) 96px, (max-width: 1024px) 96px, 96px"
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
            <blockquote className="px-4 text-[0.9375rem] leading-[1.5625rem] font-medium tracking-normal text-white">
              <p>"{member.quote}"</p>
            </blockquote>
            {/* Social Media Links */}
            <nav aria-label={`${member.name} social media links`}>
              <ul className="flex items-center gap-4">
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow ${member.name} on Twitter`}
                      >
                        <FaXTwitter className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <FaLinkedin className="size-7 cursor-pointer text-white transition-colors duration-300 ease-in-out hover:text-[#F67E7E]" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Toggle Button */}
        <Button
          type="button"
          size={"icon"}
          onClick={handleToggle}
          className={`absolute inset-x-0 -bottom-6 z-10 mx-auto size-14.5 rounded-full transition-colors duration-300 ${
            isFlipped
              ? "bg-[#79C8C7] hover:bg-[#F67E7E]"
              : "bg-[#F67E7E] hover:bg-[#79C8C7]"
          }`}
          aria-label={`${isFlipped ? "Close" : "View"} ${member.name} details`}
        >
          {isFlipped ? (
            <X className="size-6 text-[#012F34]" aria-hidden="true" />
          ) : (
            <Plus className="size-6 text-[#012F34]" aria-hidden="true" />
          )}
        </Button>
      </div>
    );
  }
);

TeamMemberCard.displayName = "TeamMemberCard";

const MeetTheDirectors = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = useCallback((memberId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(memberId)) {
        newSet.delete(memberId);
      } else {
        newSet.add(memberId);
      }
      return newSet;
    });
  }, []);

  // Memoize the team members list to prevent unnecessary re-renders
  const memoizedTeamMembers = useMemo(() => teamMembers, []);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MyTeam",
            description:
              "We help companies build dynamic teams made up of top global talent",
            founder: teamMembers
              .filter((m) => m.position.includes("Founder"))
              .map((member) => ({
                "@type": "Person",
                name: member.name,
                jobTitle: member.position,
                image: member.image,
                sameAs: [member.linkedin, member.twitter],
              })),
            employee: teamMembers.map((member) => ({
              "@type": "Person",
              name: member.name,
              jobTitle: member.position,
              image: member.image,
              sameAs: [member.linkedin, member.twitter],
            })),
          }),
        }}
      />

      <section
        className="relative overflow-hidden bg-[#004047]"
        aria-labelledby="directors-heading"
      >
        {/* Background Pattern - Top Left */}
        <Image
          src="/bg-pattern-about-2-contact-1.svg"
          alt=""
          width={200}
          height={200}
          className="absolute -top-25 -left-25 md:top-0"
          aria-hidden="true"
          priority={false}
        />

        <Wrapper className="flex flex-col items-center justify-center gap-12 py-[7.5rem] text-center md:py-[7.25rem] lg:gap-16 lg:py-[8.75rem]">
          <h2
            id="directors-heading"
            className="text-[2rem] leading-8 font-bold tracking-normal text-white lg:text-5xl lg:leading-12"
          >
            Meet the directors
          </h2>

          <div
            className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:grid-cols-3"
            role="list"
            aria-label="Team directors and leadership"
          >
            {memoizedTeamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                isFlipped={flippedCards.has(member.id)}
                onToggle={toggleCard}
              />
            ))}
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
          priority={false}
        />
      </section>
    </>
  );
};

// Export memoized component for better performance
export default memo(MeetTheDirectors);
