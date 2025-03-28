"use client";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";
import { useRouter } from "next/navigation";
import { useSidebarTrigger } from "@/lib/sidebar-trigger-context";

interface ChatResponse {
  answer: string;
  historyId: number;
}

interface Message {
  id: number;
  text: string;
  sender: string;
}

const Testside = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([{ id: 1, text: "Welcome to the chat!", sender: "bot" }]);
  }, []);

  const [messageIdCounter, setMessageIdCounter] = useState(2);

  const [inputMessage, setInputMessage] = useState("");
  // const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // For handle error hydation
  const [isClient, setIsClient] = useState(false);
  const [botIsAnswer, setBotIsAnswer] = useState(false);
  const router = useRouter();

  const { createSidebarTrigger } = useSidebarTrigger();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Create a ref for the messages container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "" || botIsAnswer) return;

    setLoading(true);
    setBotIsAnswer(true);
    // Clear input
    setInputMessage("");

    // Add user message
    const userMessage = {
      id: messageIdCounter,
      text: inputMessage,
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const botMessage = {
      id: messageIdCounter + 1,
      text: "",
      sender: "bot",
    };

    // try {
    const res = await fetch("/api/create-history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: inputMessage }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      botMessage.text = errorData.error;
      setMessageIdCounter(messageIdCounter + 2);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setLoading(false);
      setBotIsAnswer(false);
      throw new Error(errorData.error || "Failed to get response");
    }

    const data: ChatResponse = await res.json();

    botMessage.text = data.answer;
    // } catch (err: any) {
    //   botMessage.text = err.message;
    //   console.error("Error:", err);
    // } finally {
    setMessageIdCounter(messageIdCounter + 2);
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setLoading(false);
    setBotIsAnswer(false);
    createSidebarTrigger();
    router.replace(`/chat/${data.historyId}`);

    // }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !botIsAnswer) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
                <Bouncy size="30" speed="1.75" color="black" />
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
                  className="pt-6 pb-6 rounded-xl bg-white z-10 "
                />
                <Button
                  variant="link"
                  size="icon"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 "
                  onClick={handleSendMessage}
                >
                  <Image
                    src="button.svg"
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

export default Testside;
