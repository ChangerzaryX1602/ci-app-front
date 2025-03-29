"use client";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";
import { usePathname, useRouter } from "next/navigation";
import { useDeleteChatTrigger } from "@/lib/delete-chat-trigger-context";
import { useTheme } from "next-themes";

interface ChatResponse {
  answer: string;
}

interface Message {
  id: string;
  text: string;
  sender: string;
}

interface HistoryMessages {
  history: {
    id: number;
    place_holder: string;
  };
  history_id: number;
  id: number;
  message: {
    answer: string;
    created_at: string;
    id: number;
    question: string;
  };
  message_id: number;
}

const Page = ({ params }: { params: Promise<{ chatId: number }> }) => {
  const resolvedParams = React.use(params);
  const chatId = resolvedParams.chatId;

  const { theme } = useTheme();

  const [messages, setMessages] = useState<Message[]>([]);
  const [messageIdCounter, setMessageIdCounter] = useState(2);

  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [botIsAnswer, setBotIsAnswer] = useState(false);

  const pathname = usePathname();
  const { trigger, historyIdSave } = useDeleteChatTrigger();
  const router = useRouter();
  // Store the previous trigger value
  const prevTriggerRef = useRef(trigger);

  useEffect(() => {
    if (trigger !== prevTriggerRef.current) {
      if (pathname.includes(historyIdSave.toString())) {
        console.log("Navigating away from deleted chat");
        router.push("/chat");
      }

      // Update the previous trigger reference
      prevTriggerRef.current = trigger;
    }
  }, [trigger]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "" || botIsAnswer) return;

    setLoading(true);
    setBotIsAnswer(true);
    // Clear input
    setInputMessage("");

    const currentTime = Date.now();
    // Add user message
    const userMessage = {
      id: `user_${currentTime}_${messageIdCounter}`,
      text: inputMessage,
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botMessage = {
      id: `bot_${currentTime}_${messageIdCounter + 1}`,
      text: "",
      sender: "bot",
    };
    console.log("chatId, inputMessage", chatId, inputMessage);

    const data: ChatResponse = await askChatbot(chatId, inputMessage);
    botMessage.text = data.answer;
    setMessageIdCounter(messageIdCounter + 2);
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setLoading(false);
    setBotIsAnswer(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !botIsAnswer) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const askChatbot = async (historyId: number, question: string) => {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ historyId, question }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to get response");
    }

    const data: ChatResponse = await res.json();
    return data;
  };

  useEffect(() => {
    // if (isMounted) return;
    let isMounted = true;

    const loadHistoryMessages = async (historyId: number) => {
      // setIsMounted(true);
      const res = await fetch(
        `/api/get-history-message?historyId=${historyId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await res.json();
      const allHistoryMessage = data.history;

      if (isMounted) {
        const newMessages: Message[] = allHistoryMessage.flatMap(
          (message: HistoryMessages) => [
            {
              id: `user_${historyId}_${message.id}`, // Add historyId to ensure uniqueness
              text: message.message.question,
              sender: "user",
            },
            {
              id: `bot_${historyId}_${message.id}`, // Add historyId to ensure uniqueness
              text: message.message.answer,
              sender: "bot",
            },
          ]
        );

        setMessages(newMessages);
      }
    };

    // Reset messages before loading new ones
    setMessages([]);
    loadHistoryMessages(chatId);

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [chatId]);

  return (
    <div className="w-full flex flex-col items-center h-full">
      {isClient && (
        <>
          <div className="w-full max-w-4xl flex-grow p-4 z-10">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } `}
              >
                <div
                  className={`
                         max-w-[70%] p-3 rounded-2xl mt-2 mb-2 break-words 
                         ${
                           msg.sender === "user"
                             ? "bg-purple-500 text-white"
                             : "bg-purple-100 text-black"
                         }
                       `}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="pt-4 pl-2">
                <Bouncy
                  size="30"
                  speed="1.75"
                  color={`${theme == "dark" ? "white" : "black"}`}
                />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="sticky bottom-0 left-0 w-full p-4 pb-10 z-10">
            <div className="max-w-4xl mx-auto relative ">
              <div className="flex items-center space-x-2 ">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question here..."
                  className="pt-6 pb-6 rounded-xl bg-white z-10 text-black"
                />
                <Button
                  variant="link"
                  size="icon"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 "
                  onClick={handleSendMessage}
                >
                  <Image
                    src="/button.svg"
                    alt="button"
                    width={25}
                    height={25}
                    className="w-full z-10"
                  />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
