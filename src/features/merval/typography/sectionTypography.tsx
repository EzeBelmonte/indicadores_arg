import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}


export const State = ({ children, className }: Props) => {
  return (
    <h3
      className={cn(
        "text-[0.75rem] font-bold",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const S_Value = ({ children, className }: Props) => {
  return (
    <h3
      className={cn(
        "text-[1.5rem] font-bold",
        className
      )}
    >
      {children}
    </h3>
  );
};