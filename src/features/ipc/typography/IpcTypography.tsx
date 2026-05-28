import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}


export const IpcValue = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "text-[1.3rem] text-gray-400 font-bold",
        className
      )}
    >
      {children}
    </p>
  );
};

export const IpcActualValue = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "text-[2.5rem] text-[#ffffff] font-bold",
        className
      )}
    >
      {children}
    </p>
  );
};