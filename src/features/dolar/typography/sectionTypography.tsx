import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}


export const S_Key = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "text-[1.2rem] text-[#ffffff] font-bold",
        className
      )}
    >
      {children}
    </p>
  );
};

export const S_Value = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "text-[1.6rem] text-[#4efcd0ce] font-bold",
        className
      )}
    >
      {children}
    </p>
  );
};