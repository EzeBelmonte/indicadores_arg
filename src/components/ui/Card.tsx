import React from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  backgroundIcon?: React.ReactNode;
  bgClassName?: string;
  onClick?: () => void;
  variant?: "default" | "dollar" | "ipc" | "riesgoPais";
}

const variants = {
  default: "", //bg-[#1a1a1a]
  dollar: "bg-[rgba(11,168,89,0.2)]",
  ipc: "bg-[rgba(85,26,151,0.4)]",
  riesgoPais: "bg-[rgba(214,32,32,0.5)]",
}


const Card = ({ children, onClick, className, variant = "default", backgroundIcon, bgClassName }: CardProps) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        `relative overflow-hidden card-hover text-[#ffffffce] rounded p-3
          backdrop-blur-xl
         border border-[#ffffff3b]
        `,
        variants[variant],
        className
      )}
    >

      {/* Imagen/Icono de fondo */}
      {backgroundIcon && (
        <div
          className={`
            absolute
            rotate-[-20deg]
            opacity-[0.1]
            pointer-events-none
            select-none
            ${bgClassName}
          `}
        >
          {backgroundIcon}
        </div>
      )}
    
      {/* Contenido recibido */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
      
    </div>
  );
};

export default Card;