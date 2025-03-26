import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useNavbarTrigger } from "@/lib/nav-bar-trigger-context";

const ChatNavBar = () => {
  const { open } = useNavbarTrigger();
  return (
    <div className={`w-full flex items-center h-14`}>
      {!open && (
        <div className="px-2">
          <SidebarTrigger />
        </div>
      )}
      <div className="w-full flex justify-end pr-8">Profile</div>
    </div>
  );
};

export default ChatNavBar;
