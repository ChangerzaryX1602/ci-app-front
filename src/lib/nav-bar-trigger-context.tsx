"use client"
import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface NavbarProviderProps {
  children: ReactNode;
}

const NavbarContext = createContext({
  open: true,
  toggleOpen: () => {},
});

export const NavbarTriggerProvider = ({ children }: NavbarProviderProps) => {
  const [open, setOpen] = useState(true); // default theme

  // Toggle theme between 'light' and 'dark'
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <NavbarContext.Provider value={{ open, toggleOpen }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook to use the context
export const useNavbarTrigger = () => useContext(NavbarContext);
