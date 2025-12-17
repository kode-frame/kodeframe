import { createContext, useContext } from "react";

type CardContextValue = {
  variant?: string;
  hasImage?: boolean;
};

const CardContext = createContext<CardContextValue | null>(null);

export const useCardContext = () => {
  const ctx = useContext(CardContext);
  if (!ctx) {
    throw new Error("Card subcomponent must be used inside <Card />");
  }
  return ctx;
};

export default CardContext;
