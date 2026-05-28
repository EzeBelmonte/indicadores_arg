import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}


export const SectionTitle = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "text-2xl text-[#ffffff] font-bold",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }: Props) => {
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

export const CardTitleIcon = ({ children, className }: Props) => {
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

export const CardTitleSecond = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "font-bold text-[#ffffff] text-[1.1rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className }: Props) => {
  return (
    <p 
      className={cn(
        "text-gray-400 text-[0.7rem]",
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

export const Key = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        "font-semibold text-[0.9rem] text-[#d8d8d8]",
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
        "text-[1.05rem] font-bold text-[#ffffff]",
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
        "flex justify-between items-baseline gap-2",
        className
      )}
    >
      {children}
    </div>
  )
}