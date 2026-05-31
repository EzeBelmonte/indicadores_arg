import { useJubilacion } from "../hooks/useJubilacion";
import { UserRound } from "lucide-react";

import { Section, TitleIcon } from "@/components";
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

      <TitleIcon>

        <h1>JUBILACIÓN MÍNIMA</h1>  

        <UserRound 
          strokeWidth={3}
          className="icon-section text-[rgb(255,255,255)]"
        />

      </TitleIcon>

      <JubilacionCard data={data} />

    </Section>

  );
};

export default JubilacionSection;