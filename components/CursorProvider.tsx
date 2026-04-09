"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import CustomCursor, { CursorState } from "@/components/CustomCursor";

type CursorContextValue = {
  state: CursorState;
  content: React.ReactNode;
  setCursor: (state: CursorState, content?: React.ReactNode) => void;
  setCursorState: (state: CursorState) => void;
  setCursorContent: (content: React.ReactNode) => void;
  resetCursor: () => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<CursorState>("default");
  const [content, setContent] = useState<React.ReactNode>(null);

  const setCursor = useCallback((nextState: CursorState, nextContent?: React.ReactNode) => {
    setState(nextState);
    setContent(nextContent ?? null);
  }, []);

  const resetCursor = useCallback(() => {
    setState("default");
    setContent(null);
  }, []);

  const value = useMemo<CursorContextValue>(
    () => ({
      state,
      content,
      setCursor,
      setCursorState: setState,
      setCursorContent: setContent,
      resetCursor,
    }),
    [state, content, setCursor, resetCursor]
  );

  return (
    <CursorContext.Provider value={value}>
      <CustomCursor eventType={state} children={content} />
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    throw new Error("useCursor must be used within <CursorProvider>");
  }
  return ctx;
}

