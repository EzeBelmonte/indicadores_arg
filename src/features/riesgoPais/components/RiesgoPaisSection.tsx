import { useState } from "react";
import { useRiesgoPais } from "../hooks/useRiesgoPais";
import { TriangleAlert } from "lucide-react";

import { Section, SectionTitle, CardTitleIcon, Modal } from "@/components";
import RiesgoPaisCard from "./RiesgoPaisCard";
import RiesgoPaisHistorial from "./RiesgoPaisHistorial";


const RiskCountrySection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Abrir el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  return (

    <>
    
      {/* Contenido de la sección */}
      <Section 
        id="riesgo-pais"
        className="cursor-pointer"
        onClick={handleOpenModal}
      >

        <CardTitleIcon>

          <SectionTitle>RIESGO PAÍS</SectionTitle>

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

      {/* Contenido del modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="RIESGO PAIS"
      >
        <RiesgoPaisHistorial/>
      </Modal>
    </>
  );
};

export default RiskCountrySection;