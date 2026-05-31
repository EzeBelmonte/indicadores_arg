import { useState } from "react";
import { useIPC } from "../hooks/useIPC";
import { Store } from "lucide-react";

import { Section, TitleIcon, Modal } from "@/components";
import IpcCard from "./IpcCard";
import IpcHistorial from "./IpcHistorial";


const IpcSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data = [],
    isPending,
    error,
  } = useIPC();

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

        <TitleIcon>

          <h1>INFLACIÓN MENSUAL</h1>

          <Store
            strokeWidth={3}
            className="icon-section text-[rgb(174,109,248)]"
          />

        </TitleIcon>
        
        <div className="grid grid-cols-1 items-end gap-2 sm:grid-cols-4 lg:gap-4">

          {others.map((i) => (
            <div className="flex-1" key={i.nombre_mes}>
              <IpcCard data={i} />
            </div>
          ))}

          <div>
            <IpcCard data={ipc} variant="featured" />
          </div>

        </div>
      </Section>

      {/* Contenido del modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="IPC"
      >

        <IpcHistorial />
        
      </Modal>
      
    </>
  );
};

export default IpcSection;