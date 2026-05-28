import React from "react";
import { cn } from "../../utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}


const Section = ({ children, className, id }: SectionProps) => {

  return (
    <section
      id={id}
      className={cn(
        `section-hover rounded border border-[#ffffff0c] p-4 
        bg-white/3 backdrop-blur-xl
        `,
        className
      )}
    >

      {children}

    </section>
    
  )
};

export default Section;