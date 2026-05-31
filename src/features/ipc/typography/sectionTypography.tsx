import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}


export const S_Key = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "font-bold text-[#ffffff] text-[1.3rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const S_Value = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "font-bold text-[#ffffff] text-[2rem]",
        className
      )}
    >
      {children}
    </div>
  );
};