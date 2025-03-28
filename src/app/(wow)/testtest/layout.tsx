"use client";
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

  return (
    <div className="max-h-screen flex">
      <SidebarProvider open={open} onOpenChange={toggleOpen} className="z-30">
        <ChatNavBar />
        <AppSidebar />
        <div className="flex flex-col w-full h-full -z-10 pt-10">{children}</div>
      </SidebarProvider>
      <Image
        src="landing-page\wave_notext_withComps.svg"
        alt="wave_notext"
        width={25}
        height={25}
        className="w-full bottom-0 fixed z-0"
      />
    </div>
  );
}
