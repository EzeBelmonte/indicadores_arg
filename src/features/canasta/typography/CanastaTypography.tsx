import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}


export const Text = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "text-gray-100 font-semibold text-[0.9rem]",
        className
      )}
    >
      {children}
    </p>
  );
};

