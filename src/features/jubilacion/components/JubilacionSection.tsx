import { useJubilacion } from "../hooks/useJubilacion";
import { UserRound } from "lucide-react";

import { Section, SectionTitle, CardTitleIcon } from "@/components";
import JubilacionCard from "./JubilacionCard";


const JubilacionSection = () => {
  const { 
    data, 
    isPending, 
    error,
  } = useJubilacion();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No hay datos de la jubilación básica</p>
  }

  return (

    <Section id="jubilacion">

      <CardTitleIcon>

        <SectionTitle>JUBILACIÓN MÍNIMA</SectionTitle>  

        <UserRound 
          strokeWidth={3}
          className="icon-section text-[rgb(255,255,255)]"
        />

      </CardTitleIcon>

      <JubilacionCard data={data} />

    </Section>

  );
};

export default JubilacionSection;