"use client";
import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface DeleteChatProviderProps {
  children: ReactNode;
}

const DeleteChatContext = createContext({
  trigger: true,
  triggerDelete: (historyId: number) => {},
  historyIdSave: 0,
});

export const DeleteChatTriggerProvider = ({
  children,
}: DeleteChatProviderProps) => {
  const [trigger, setTrigger] = useState(true);
  const [historyIdSave, setHistoryIdSave] = useState<number>(0);

  const triggerDelete = (historyId: number) => {
    setTrigger((prev) => !prev);
    setHistoryIdSave(historyId);
  };

  return (
    <DeleteChatContext.Provider value={{ trigger, triggerDelete, historyIdSave }}>
      {children}
    </DeleteChatContext.Provider>
  );
};

// Custom hook to use the context
export const useDeleteChatTrigger = () => useContext(DeleteChatContext);
