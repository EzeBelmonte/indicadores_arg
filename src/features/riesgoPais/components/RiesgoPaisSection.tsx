import { useRiesgoPais } from "../hooks/useRiesgoPais";
import { TriangleAlert } from "lucide-react";

import RiesgoPaisCard from "./RiesgoPaisCard";
import { Section, SectionTitle, CardTitleIcon } from "@/components";


const RiskCountrySection = () => {
  const {
    data,
    isPending,
    error,
  } = useRiesgoPais();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  const riesgoPaisActual = data?.current;
  const riesgoPaisAnterior = data?.previous;

  if (!riesgoPaisActual) {
    return <p>No hay datos del riesgo país de hoy</p>
  }

   if (!riesgoPaisAnterior) {
    return <p>No hay datos del riesgo país de ayer</p>
  }

  // A futuro abre un modal con el historial
  const handleOpenHistory = () => {
    alert("abrir modal");
  };

  return (

    <Section id="riesgo-pais">

      <CardTitleIcon>

        <SectionTitle>RIESGO PAÍS</SectionTitle>

        {/* Historial */}
        {/*<Button 
          onClick={handleOpenHistory}
          className="cursor-pointer"
        >
          <ButtonHistorial>HISTORIAL</ButtonHistorial>
        </Button>*/}

        <TriangleAlert
          strokeWidth={3}
          className="icon-section text-[rgb(247,61,61)]"
        />

      </CardTitleIcon>

      {/* Riesgo país actual y anterior*/}
      <RiesgoPaisCard
        current={riesgoPaisActual}
        previous={riesgoPaisAnterior}
      />

    </Section>
    
  );
};

export default RiskCountrySection;