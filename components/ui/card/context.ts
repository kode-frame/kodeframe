import { createContext, useContext } from "react";
import { CardContextType } from "./types";

export const CardContext = createContext<CardContextType | null>(null);

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("Card components must be used within a Card");
  }

  return context;
};