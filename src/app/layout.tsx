import type { Metadata } from "next";
import { Livvic } from "next/font/google";

import Header from "@/components/Navigation/Header";
import Wrapper from "@/components/Navigation/Wrapper";

import "./globals.css";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "myteam — Find the best talent",
    template: "%s | myteam",
  },
  description:
    "Finding the right people and building high-performing teams can be hard. Most companies aren&apos;t tapping into the abundance of global talent. We&apos;re about to change that.",
  keywords: [
    "talent acquisition",
    "recruiting",
    "global talent",
    "remote teams",
    "team building",
    "hiring platform",
    "staff augmentation",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "myteam",
    title: "myteam — Find the best talent",
    description:
      "Finding the right people and building high-performing teams can be hard. Most companies aren&apos;t tapping into the abundance of global talent. We&apos;re about to change that.",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "myteam logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "myteam — Find the best talent",
    description:
      "Finding the right people and building high-performing teams can be hard. Most companies aren&apos;t tapping into the abundance of global talent. We&apos;re about to change that.",
    images: ["/favicon-32x32.png"],
    creator: "@myteam",
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic.className} bg-[#014E56] antialiased`}>
        <Wrapper>
          <Header />
        </Wrapper>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
