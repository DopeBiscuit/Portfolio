"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

export function Reveal({ children, index = 0, className = "" }: RevealProps) {
  const ref = useReveal(index);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
