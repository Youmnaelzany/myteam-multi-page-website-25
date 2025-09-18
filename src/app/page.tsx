import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports with loading fallbacks for better performance
const BestTalent = dynamic(() => import("@/components/Home/BestTalent"), {
  loading: () => <div className="h-screen bg-[#002529]" />,
  ssr: true, // Keep SSR for above-the-fold content
});

const ManageDistributed = dynamic(
  () => import("@/components/Home/ManageDistributed"),
  {
    loading: () => <div className="h-96 animate-pulse bg-[#012F34]" />,
    ssr: true,
  }
);

const DeliveringRealResults = dynamic(
  () => import("@/components/Home/DeliveringRealResults"),
  {
    loading: () => <div className="h-96 animate-pulse bg-[#F67E7E]" />,
    ssr: true,
  }
);

const GetStarted = dynamic(() => import("@/components/Navigation/GetStarted"), {
  loading: () => <div className="h-32 animate-pulse bg-[#002529]" />,
  ssr: true,
});

export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen bg-[#002529]" />}>
      <BestTalent />
      <ManageDistributed />
      <DeliveringRealResults />
      <GetStarted />
    </Suspense>
  );
}
