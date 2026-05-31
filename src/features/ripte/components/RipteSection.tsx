import { useRipte } from "../hooks/useRipte";
import { HandCoins } from "lucide-react";

import { Section, TitleIcon } from "@/components";
import RipteCard from "./RipteCard";


const RipteSection = () => {
  
  const {
    data,
    isPending,
    error
  } = useRipte();

  if (isPending) {
    return <p>Cargando...</p>;
  };

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No hay datos de RIPTE</p>;
  }

  return (
    <Section id="ripte">

      <TitleIcon>

        <h1>RIPTE</h1>

        <HandCoins
          strokeWidth={3}
          className="icon-section text-[rgb(161,171,255)]"
        />

      </TitleIcon>

      <RipteCard data={data[11]} />

    </Section>
  
  );
};

export default RipteSection;