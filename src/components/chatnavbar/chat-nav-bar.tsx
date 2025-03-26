"use client";
import React, { useState,useEffect } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useNavbarTrigger } from "@/lib/nav-bar-trigger-context";
import Image from "next/image";

const ChatNavBar = () => {
  const { open } = useNavbarTrigger();

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle mobile detection on client side only
  useEffect(() => {
    setMounted(true);
    
    // Initial check
    setIsMobile(window.innerWidth <= 768);
    
    // Add resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`w-full flex items-center h-14`}>
      {(!open || (mounted && isMobile)) && (
        <div className="px-2 block">
          <SidebarTrigger />
        </div>
      )}
      <div className="w-full flex justify-end pr-4">
        <Image
          src="/profiles/best.jpg"
          width={100}
          height={100}
          alt="profile"
          className="w-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default ChatNavBar;
