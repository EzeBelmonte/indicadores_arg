import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}


export const TitleIcon = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "flex justify-between mb-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Key = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "font-semibold text-[#d8d8d8] text-[0.75rem] sm:text-[0.9rem]",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Value = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "font-bold text-[#ffffff] text-[0.8rem] sm:text-[1.05rem] ",
        className
      )}
    >
      {children}
    </p>
  );
};

export const ButtonHistorial = ({ children, className }: Props) => {
  return (
    <p 
      className={cn(
        "bg-[#023075] text-[0.9rem] rounded px-4 py-1 text-white font-semibold",
        className
      )}
    >
      {children}
    </p>
  );
};


export const Group = ({ children, className }: Props) => {
  return(
    <div
      className={cn(
        "flex justify-between items-end sm:items-baseline gap-2",
        className
      )}
    >
      {children}
    </div>
  )
}