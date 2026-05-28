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

export const Key = ({ children, className }: Props) => {
  return (
    <h3
      className={cn(
        "text-[0.7rem] font-bold text-gray-400",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const Value = ({ children, className }: Props) => {
  return (
    <h3
      className={cn(
        "text-[0.9rem] font-bold ms-4",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const Price = ({ children, className }: Props) => {
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