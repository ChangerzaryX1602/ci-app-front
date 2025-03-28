"use client";
import React, { useState, useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appsidebar/app-sidebar";
import ChatNavBar from "@/components/chatnavbar/chat-nav-bar";
import { useNavbarTrigger } from "@/lib/nav-bar-trigger-context";
import Image from "next/image";

export default function Test1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { open, toggleOpen } = useNavbarTrigger();
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);

  // Handle mobile detection on client side only
  useEffect(() => {
    // Initial check
    setIsMobile(window.innerWidth <= 768);

    // Add resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsIpad(
        window.innerWidth > 768 && window.innerWidth <= 1024)
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="max-h-screen flex">
      <SidebarProvider open={open} onOpenChange={toggleOpen} className="z-30">
        <ChatNavBar />
        <AppSidebar />
        <div className="flex flex-col w-full h-full -z-10 pt-10">
          {children}
        </div>
      </SidebarProvider>
      {isMobile ? (
        <Image
          src="/chat/bg-mobile.svg"
          alt="wave_notext"
          width={25}
          height={25}
          className="w-full bottom-0 fixed z-0"
        />
      ) : (
        <Image
          src="/landing-page/wave_notext_withComps.svg"
          alt="wave_notext"
          width={25}
          height={25}
          className="w-full bottom-0 fixed z-0"
        />
      )}
    </div>
  );
}
