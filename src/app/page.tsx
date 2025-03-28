"use client";
import AboutUS from "@/components/landing-page/about-us";
import Help from "@/components/landing-page/help";
import Home from "@/components/landing-page/home";
import Knowledge from "@/components/landing-page/knowledge";
import { TimelineLayout } from "@/components/timeline/timeline-layout";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import React from "react";
import Image from "next/image";

const Page = () => {
  const activeSection = useIntersectionObserver();

  return (
    <div className="relative w-full min-h-screen flex">
      <div className="hidden fixed top-1/2 z-10">
        <TimelineLayout activeSection={activeSection} />
      </div>
      <div className="absolute top-0 w-full z-0">
        <Image
          src="/landing-page/bg-upper.svg"
          alt="wave_notext"
          width={1920}
          height={300}
          className="w-full"
        />
      </div>
      <div className="w-full flex flex-col items-center z-20">
      <div className="bg-orange-400 sm:bg-slate-900 md:bg-blue-600 lg:bg-red-800 xl:bg-pink-700 2xl:bg-purple-600 mt-60">sdfsdf</div>
        <Home />
        <Knowledge />
        <AboutUS />
        <Help />
      </div>
      <div className="absolute bottom-0 w-full z-0">
        <Image
          src="/landing-page/bg-lower.svg"
          alt="wave_notext"
          width={1920}
          height={300}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
