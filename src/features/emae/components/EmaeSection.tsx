import { useEmae } from "../hooks/useEmae";
import { Section, TitleIcon } from "@/components";
import EmaeCard from "./EmaeCard";

import { Factory } from "lucide-react";


const EmaeSection = () => {

  const {
    data,
    isPending,
    error
  } = useEmae();

  if (isPending) {
    return <p>Cargando...</p>
  };

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>
  };

  if (!data) {
    return <p>No hay datos.</p>
  }


  return (

    <Section id="emae" className="h-full flex flex-col">
        <TitleIcon>

          <h1>EMAE</h1>

          <Factory 
            strokeWidth={3}
            className="icon-section text-[rgb(11,230,200)]"
          />

        </TitleIcon>

        <EmaeCard data={data} />
    </Section>
  
  );
};

export default EmaeSection;