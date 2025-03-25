'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeButton } from "@/components/button/theme-button";

export default function testttt() {

  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to the chat!", sender: 'bot' }
  ]);

  const [inputMessage, setInputMessage] = useState('');
  
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

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user'
    };

    // Add bot response (simulated)
    const botMessage = {
      id: Date.now() + 1,
      text: `Don't know how to respond to "${inputMessage}" yet!`,
      sender: 'bot'
    };

    setMessages(prevMessages => [
      ...prevMessages, 
      userMessage, 
      botMessage
    ]);

    // Clear input
    setInputMessage('');
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Send message on Enter key
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

    return (
        <>
            {/* NAV bar */}

            <div className='flex flex-col h-screen'>
              {/* middle page */}
              <div className='z-10'><ThemeButton /></div>
              <div className="flex-grow p-4 overflow-y-auto z-10 pr-40 pl-40">
                {messages.map((msg) => (
                <div key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} `}>
                  <div 
                    className={`
                      max-w-[70%] p-3 rounded-2xl mt-2 mb-2 break-words 
                      ${msg.sender === 'user' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-purple-100 text-black'}
                    `}>
                    {msg.text}
                  </div>
                </div>
                ))}
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

