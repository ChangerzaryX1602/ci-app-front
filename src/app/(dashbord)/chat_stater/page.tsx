"use client";
import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeButton } from "@/components/button/theme-button";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

interface ChatResponse {
  answer: string;
}

interface Message {
  id: number;
  text: string;
  sender: string;
}

export default function testttt() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([{ id: 1, text: "Welcome to the chat!", sender: "bot" }]);
  }, []);

  const [messageIdCounter, setMessageIdCounter] = useState(2);

  const [inputMessage, setInputMessage] = useState("");
  // const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    if (inputMessage.trim() === "") return;

    setLoading(true);
    setError("");
    // Clear input
    setInputMessage("");

    // Add user message
    const userMessage = {
      id: messageIdCounter,
      text: inputMessage,
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: inputMessage }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data: ChatResponse = await res.json();

      const botMessage = {
        id: messageIdCounter + 1,
        text: data.answer,
        sender: "bot",
      };

      setMessageIdCounter(messageIdCounter + 2);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Send message on Enter key
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* NAV bar */}

      <div className="flex flex-col h-screen">
        {/* middle page */}
        <div className="z-10">
          <ThemeButton />
        </div>
        <div className="flex-grow p-4 overflow-y-auto z-10 pr-40 pl-40">
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
          {/* Invisible div to help with scrolling */}
          <div ref={messagesEndRef} />
        </div>
        {/* footer page */}
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
        <Image
          src="landing-page\wave_notext_withComps.svg"
          alt="wave_notext"
          width={25}
          height={25}
          className="w-full bottom-0 absolute z-0"
        />
      </div>
    </>
  );
}
