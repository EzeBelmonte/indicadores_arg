import { useState } from "react";
import { useMesesIPC } from "../hooks/useIPC";
import IpcCard from "./IpcCard";
import { Store } from "lucide-react";

import { Section, SectionTitle, CardTitleIcon, Modal } from "@/components";


const IpcSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data = [],
    isPending,
    error,
  } = useMesesIPC();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No hay datos</p>;
  }

  const ipc = data[data.length - 1];
  const others = data.slice(0, -1);

  // Abrir el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  return (
    <>
      {/* Contenido de la sección */}
      <Section 
        id="ipc"
        className="cursor-pointer"
        onClick={handleOpenModal}
      >

        <CardTitleIcon>

          <SectionTitle>INFLACIÓN MENSUAL</SectionTitle>

          <Store
            strokeWidth={3}
            className="icon-section text-[rgb(174,109,248)]"
          />

        </CardTitleIcon>
        
        <div className="flex gap-7 items-end">

          {others.map((i) => (
            <div className="flex-1" key={i.nombre_mes}>
              <IpcCard data={i} />
            </div>
          ))}

          <div className="flex-[1.3]">
            <IpcCard data={ipc} variant="featured" />
          </div>

        </div>
      </Section>

      {/* Contenido del modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h1>Abri el modal</h1>
      </Modal>
    </>
  );
};

export default IpcSection;