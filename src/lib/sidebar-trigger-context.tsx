"use client";
import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarContext = createContext({
  sidebarTrigger: true,
  createSidebarTrigger: () => {},
});

export const SidebarTriggerProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarTrigger, setSidebarTrigger] = useState(true); // default theme

  // Toggle theme between 'light' and 'dark'
  const createSidebarTrigger = () => {
    setSidebarTrigger((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ sidebarTrigger, createSidebarTrigger }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the context
export const useSidebarTrigger = () => useContext(SidebarContext);
