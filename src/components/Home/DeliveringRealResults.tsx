import Image from "next/image";

import Wrapper from "../Navigation/Wrapper";

const testimonials = [
  {
    id: 1,
    quote:
      "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
    name: "Kady Baker",
    title: "Product Manager at Bookmark",
    avatar: "/avatar-kady.jpg",
  },
  {
    id: 2,
    quote:
      "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
    name: "Aiysha Reese",
    title: "Founder of Manage",
    avatar: "/avatar-aiysha.jpg",
  },
  {
    id: 3,
    quote:
      "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
    name: "Arthur Clarke",
    title: "Co-founder of MyPhysio",
    avatar: "/avatar-arthur.jpg",
  },
] as const;

const DeliveringRealResults = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern - Top Left */}
      <Image
        src="/bg-pattern-home-4-about-3.svg"
        alt=""
        width={147}
        height={100}
        className="absolute top-0 left-0"
        aria-hidden="true"
      />

      <Wrapper className="py-32 md:py-28 lg:pb-32">
        {/* Section Header */}
        <header className="mb-16 text-center md:mb-20 lg:mb-24">
          <h2 className="mx-auto max-w-[20rem] text-[2rem] leading-8 font-bold text-white md:max-w-[29rem] lg:max-w-[59rem] lg:text-5xl lg:leading-12">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-[#79C8C7]">success stories.</span>
          </h2>
        </header>

        {/* Testimonials Grid */}
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative flex flex-col items-center text-center"
            >
              {/* Quote with Icon */}
              <div className="relative mb-6">
                <Image
                  src="/icon-quotes.svg"
                  alt=""
                  width={67}
                  height={56}
                  className="absolute -top-8 left-1/2 z-10 -translate-x-1/2"
                  aria-hidden="true"
                />
                <blockquote className="relative z-50 text-[0.9375rem] leading-[1.5625rem] font-semibold text-white">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="mb-6">
                <h3 className="text-lg leading-7 font-bold text-[#79C8C7]">
                  {testimonial.name}
                </h3>
                <p className="text-sm leading-4.5 font-medium text-white italic">
                  {testimonial.title}
                </p>
              </div>

              {/* Avatar */}
              <Image
                src={testimonial.avatar}
                alt={`${testimonial.name}, ${testimonial.title}`}
                width={72}
                height={72}
                className="rounded-full border-2 border-[#C4FFFE]"
              />
            </article>
          ))}
        </div>
      </Wrapper>

      {/* Background Pattern - Bottom Right */}
      <Image
        src="/bg-pattern-home-5.svg"
        alt=""
        width={200}
        height={100}
        className="absolute right-0 bottom-0"
        aria-hidden="true"
      />
    </section>
  );
};

export default DeliveringRealResults;
