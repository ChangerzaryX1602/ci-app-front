"use client";
import AboutUS from "@/components/landing-page/about-us";
import Help from "@/components/landing-page/help";
import Home from "@/components/landing-page/home";
import { TimelineLayout } from "@/components/timeline/timeline-layout";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import React from "react";

const Page = () => {
  const activeSection = useIntersectionObserver();

  return (
    <div className="w-full flex">
      <div className="fixed top-1/2 z-10">
        <TimelineLayout activeSection={activeSection} />
      </div>
      <div className="w-full flex flex-col items-center">
        <Home />
        <AboutUS />
        <Help />
      </div>
    </div>
  );
};

export default Page;
