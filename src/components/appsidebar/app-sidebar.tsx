import React, { useEffect, useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { SquarePen, Ellipsis } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import DialogDeletePlaceHolder from "../dialog/dialog-delete-history";
import { useDeleteChatTrigger } from "@/lib/delete-chat-trigger-context";
import { useSidebarTrigger } from "@/lib/sidebar-trigger-context";
import { usePathname } from "next/navigation";
import { NavUser } from "../navuser/nav-user";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

interface History {
  id: number;
  main_user_id: string;
  history_id: number;
  main_user: {
    id: string;
    name_th: string;
    name_en: string;
    email: string;
  };
  history: {
    id: number;
    place_holder: string;
  };
}
export function AppSidebar() {
  const [history, setHistory] = useState<History[]>([]);
  const { triggerDelete } = useDeleteChatTrigger();
  const { sidebarTrigger } = useSidebarTrigger();
  const pathname = usePathname();

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await fetch("/api/get-history", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        console.error("Failed to get history");
        return;
      }

      const data = await res.json();

      setHistory(data.data);
    };

    fetchHistory();
  }, [sidebarTrigger]);

  const handleDelete = async (historyId: string) => {
    const res = await fetch("/api/manage-chat", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ historyId }),
    });

    if (!res.ok) {
      console.error("Failed to delete history");
      return;
    }

    triggerDelete(Number(historyId));
    setHistory((prevHistory) =>
      prevHistory.filter(
        (data: History) => data.history_id !== Number(historyId)
      )
    );
  };

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedPlaceholder, setEditedPlaceholder] = useState<string>("");

  const handleEditStart = (historyItem: History) => {
    setEditingId(historyItem.history_id);
    setEditedPlaceholder(historyItem.history.place_holder);
  };

  const handleEdit = async () => {
    const res = await fetch("/api/manage-chat", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chatId: editingId,
        place_holder: editedPlaceholder,
      }),
    });

    if (!res.ok) {
      console.error("Failed to edit history");
      return;
    }

    setHistory((prevHistory) =>
      prevHistory.map((data: History) =>
        data.history_id === editingId
          ? {
              ...data,
              history: { ...data.history, place_holder: editedPlaceholder },
            }
          : data
      )
    );

    setEditingId(null);
  };

  return (
    <Sidebar>
      <div className="flex px-2 justify-between items-center h-14">
        <SidebarTrigger />
        <Link href={"/"}>Rag bot</Link>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuButton asChild>
            <Link className="flex items-center space-x-2" href="/chat">
              <SquarePen />
              <span>New chat</span>
            </Link>
          </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>History</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {history.map((data: History) => {
                const history_id = data.history_id.toString();
                return (
                  <SidebarMenuItem key={data.id}>
                    <SidebarMenuButton asChild>
                      {editingId === data.history_id ? (
                        <Input
                          value={editedPlaceholder}
                          onChange={(e) => setEditedPlaceholder(e.target.value)}
                          onBlur={handleEdit}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleEdit();
                            }
                          }}
                        />
                      ) : (
                        <Link
                          href={`/chat/${history_id}`}
                          className={`${
                            pathname.includes(history_id) && "bg-gray-200"
                          }`}
                        >
                          <span>{data.history.place_holder}</span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        {editingId !== data.history_id && (
                          <SidebarMenuAction>
                            <Ellipsis />{" "}
                          </SidebarMenuAction>
                        )}
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>
                          <span onClick={() => handleEditStart(data)}>
                            Edit
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <DialogDeletePlaceHolder
                            place_holder={data.history.place_holder}
                            handleDelete={() =>
                              handleDelete(data.history_id.toString())
                            }
                          />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <span className="flex items-center space-x-2 content-center">
          {/* <Image
            src={"/images/kku-icon.png"}
            alt={"None"}
            width={50}
            height={50}
          />
          <Image
            src={"/images/enkku-logo.png"}
            alt={"None"}
            width={50}
            height={50}
          /> */}
          <NavUser user={data.user} />
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}
