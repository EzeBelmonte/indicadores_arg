import { useEmae } from "../hooks/useEmae";
import { CardTitleIcon, Section, SectionTitle } from "@/components";
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

    <Section id="emae">

        <CardTitleIcon>

          <SectionTitle>EMAE</SectionTitle>

          <Factory 
            strokeWidth={3}
            className="icon-section text-[rgb(11,230,200)]"
          />

        </CardTitleIcon>

        <EmaeCard data={data} />

    </Section>
  
  );
};

export default EmaeSection;