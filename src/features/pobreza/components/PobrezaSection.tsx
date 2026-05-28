import { usePobreza } from "../hooks/usePobreza";
import { BanknoteArrowDown } from "lucide-react";

import { Section, SectionTitle, CardTitleIcon } from "@/components";
import PobrezaCard from "./PobrezaCard";


const PobrezaSection = () => {

  const {
    data,
    isPending,
    error
  } = usePobreza();

  if (isPending) {
    return <p>Cargando...</p>;
  };

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  };

  if (!data) {
    return <p>No hay datos de pobreza</p>;
  };
  
  return (

    <Section id="pobreza">
      
      <CardTitleIcon>

        <SectionTitle>POBREZA</SectionTitle>

        <BanknoteArrowDown
          strokeWidth={3}
          className="icon-section text-[rgb(161,161,161)]"
        />
      
      </CardTitleIcon>

      <PobrezaCard data={data} />

    </Section>

  );
};

export default PobrezaSection;