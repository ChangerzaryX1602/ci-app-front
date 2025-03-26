"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appsidebar/app-sidebar";
import ChatNavBar from "@/components/chatnavbar/chat-nav-bar";
import { useNavbarTrigger } from "@/lib/nav-bar-trigger-context";

export default function Test1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { open, toggleOpen } = useNavbarTrigger();

  return (
    <div className="max-h-screen flex">
      <SidebarProvider open={open} onOpenChange={toggleOpen}>
        <AppSidebar />
        <div className="flex flex-col w-full h-full">
          <ChatNavBar />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
