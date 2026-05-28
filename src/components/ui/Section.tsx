import React from "react";
import { cn } from "../../utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}


const Section = ({ children, className, id, onClick }: SectionProps) => {

  return (
    <section
      id={id}
      // scroll-mt-24 es el margen extra por el Navbar
      className={cn(
        `section-hover rounded border border-[#ffffff0c] scroll-mt-24 p-4
        bg-white/3 backdrop-blur-xl
        `,
        className
      )}
      onClick={onClick}
    >

      {children}

    </section>
    
  )
};

export default Section;