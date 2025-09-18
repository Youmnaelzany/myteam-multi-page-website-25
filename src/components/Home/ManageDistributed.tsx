import Image from "next/image";

import Wrapper from "../Navigation/Wrapper";

// Static data moved outside component to prevent re-creation on each render
const FEATURES = [
  {
    id: 1,
    title: "Experienced Individuals",
    description:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
    icon: "/icon-person.svg",
    iconAlt: "Icon representing experienced individuals and professionals",
  },
  {
    id: 2,
    title: "Easy to Implement",
    description:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
    icon: "/icon-cog.svg",
    iconAlt: "Icon representing easy implementation and processes",
  },
  {
    id: 3,
    title: "Enhanced Productivity",
    description:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
    icon: "/icon-chart.svg",
    iconAlt: "Icon representing enhanced productivity and analytics",
  },
] as const;

const ManageDistributed = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#012F34]"
      aria-labelledby="distributed-teams-heading"
    >
      {/* Background pattern with priority loading for above-the-fold content */}
      <Image
        src="/bg-pattern-home-3.svg"
        alt=""
        width={200}
        height={244}
        className="absolute top-0 -right-25 lg:top-auto lg:bottom-0"
        aria-hidden="true"
        priority={false}
        loading="lazy"
      />

      <Wrapper className="flex justify-center py-32 md:py-28 lg:pb-32">
        <div className="relative flex flex-col gap-14 md:gap-16 lg:flex-row lg:justify-between">
          {/* Decorative border */}
          <div
            className="absolute -top-8 left-0 h-1 w-[50px] bg-[#F67E7E]"
            aria-hidden="true"
          />

          {/* Main heading with proper semantic structure */}
          <h2
            id="distributed-teams-heading"
            className="w-[240px] text-[2rem] leading-8 font-bold tracking-normal text-white md:w-[445px] lg:text-5xl lg:leading-12"
          >
            Build & manage distributed teams like no one else.
          </h2>

          {/* Features list with proper semantic structure */}
          <div
            className="grid grid-cols-1 gap-12 md:w-[573px] md:gap-8 lg:w-[540px]"
            role="list"
            aria-label="Key features for managing distributed teams"
          >
            {FEATURES.map((feature) => (
              <article
                key={feature.id}
                className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:gap-6 md:text-left lg:items-start"
                role="listitem"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.iconAlt}
                    width={72}
                    height={72}
                    loading="lazy"
                    className="h-auto w-auto"
                  />
                </div>
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-lg leading-7 font-bold tracking-normal text-[#F67E7E]">
                    {feature.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-[1.5625rem] font-semibold tracking-normal text-white/80">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ManageDistributed;
