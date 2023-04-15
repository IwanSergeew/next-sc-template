import { createContext, useContext } from "react";

export type GlobalContextType = {};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default () => {
  const ctx = useContext(GlobalContext);

  if (ctx === null) {
    throw new Error("[GlobalContext] No context found.");
  }

  return ctx;
};

