import { Metadata } from "next";

import AboutUs from "@/components/About/AboutUs";
import MeetTheDirectors from "@/components/About/MeetTheDirectors";
import GetStarted from "@/components/Navigation/GetStarted";

export const metadata: Metadata = {
  title: "About Us - MyTeam | Building Dynamic Global Teams",
  description:
    "Learn about MyTeam's leadership and mission to help companies build dynamic teams made up of top global talent. Meet our founders and directors.",
  keywords: [
    "about us",
    "team leadership",
    "global talent",
    "distributed teams",
    "company founders",
    "team building",
    "remote work",
    "talent acquisition",
  ],
  openGraph: {
    title: "About Us - MyTeam | Building Dynamic Global Teams",
    description:
      "Learn about MyTeam's leadership and mission to help companies build dynamic teams made up of top global talent.",
    type: "website",
    url: "/about",
    images: [
      {
        url: "/avatar-nikita.jpg",
        width: 96,
        height: 96,
        alt: "MyTeam Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - MyTeam | Building Dynamic Global Teams",
    description:
      "Learn about MyTeam's leadership and mission to help companies build dynamic teams made up of top global talent.",
    images: ["/avatar-nikita.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <>
      <AboutUs />
      <MeetTheDirectors />
      <GetStarted />
    </>
  );
}
