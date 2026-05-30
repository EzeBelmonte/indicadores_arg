import { useState } from "react";
import { useMerval } from "../hooks/useMerval";
import { TrendingUp } from "lucide-react";

import { Section, SectionTitle, CardTitleIcon, Modal } from "@/components";
import MervalCard from "./MervalCard";
import MervalSector from "./MervalSector";


const MervalSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data,
    isPending,
    error,
  } = useMerval();

  if (isPending) {
    return <p>Cargando MERVAL...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No hay datos del merval</p>;
  }

  // Abrir el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (

    <>
    
      {/* Contenido de la sección */}
      <Section 
        id="merval"
        className="cursor-pointer"
        onClick={handleOpenModal}
      >

        <CardTitleIcon>
          
          <SectionTitle>MERVAL</SectionTitle>

          <TrendingUp
            strokeWidth={3}
            className="icon-section text-[rgb(60,255,0)]"
          />

        </CardTitleIcon>
        
        <div className="grid grid-cols-2 gap-7">

          {data.map((item) => (
            <MervalCard key={item.symbol} data={item} />
          ))}

        </div>

      </Section>
      
      {/* Contenido del modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="MERCADO"
      >

        <MervalSector />
        
      </Modal>
    </>
  );
};

export default MervalSection;