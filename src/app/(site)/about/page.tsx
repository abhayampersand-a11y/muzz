
import React, { Suspense } from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Progresswork from "@/components/Home/WorkProgress";
import Portfolio from "@/components/portfolio/PortfolioList";
export const metadata: Metadata = {
    title: "About | Dana Electrical",
};

const galleryLabels: Record<string, string> = {
  "bowling-machine-motor": "Bowling Machine Motor",
  "high-frequency-converter": "High Frequency Converter",
  "shrimp-farming-motors-and-pumps": "Shrimp Farming Motors and Pumps",
  "three-phase-water-pumps": "Three Phase Water Pumps",
  "system-solution-and-panel-making": "System Solution and Panel Making",
  "ceiling-fan-rewinding": "Ceiling Fan Rewinding",
  "3-phase-ac-induction-motor": "3 phase AC Induction Motor",
  "shutter-vibrator-motor": "Shutter Vibrator Motor",
  "single-phase-water-pumps": "Single Phase Water Pumps",
  "ac-gear-motor": "AC Gear Motor",
  "borewell-pumps": "Borewell Pumps",
  "dewatering-pumps": "Dewatering Pumps",
  "torrent-work": "Torrent Work",
};

type AboutPageProps = {
  searchParams?: Promise<{ gallery?: string }>;
};

const page = async ({ searchParams }: AboutPageProps) => {
  const resolvedParams = (await searchParams) ?? {};
  const galleryKey = resolvedParams.gallery;
  const activeLabel = galleryKey ? galleryLabels[galleryKey] : undefined;

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    ...(activeLabel
      ? [{ href: `/about?gallery=${galleryKey}#portfolio`, text: activeLabel }]
      : []),
  ];

  return (
    <>
      <HeroSub
        title={activeLabel ?? "About Us"}
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
       <Suspense fallback={null}>
         <Portfolio />
       </Suspense>
       <Counter isColorMode={true} />
       <Progresswork isColorMode={true} />
    </>
  );
};

export default page;
