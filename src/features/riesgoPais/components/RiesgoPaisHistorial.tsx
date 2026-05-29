import { useRiesgoPaisHistorial } from "../hooks/useRiesgoPais";
import { SameData, CardTitleSecond } from "@/components";
import type { RiesgoPaisHistorialData } from "../types/RiesgoPais.type";


const RiesgoPaisHistorial = () => {

  const {
    data = [],
    isPending,
    error,
  } = useRiesgoPaisHistorial();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No hay datos</p>;
  }

  const historial: RiesgoPaisHistorialData[] = [];

  data.map((i) => (
    historial.push({
      fecha: i.fecha,
      valor: i.valor,
    })
  ))


  return (

    <div className="flex flex-col gap-12">

      {/* Gráfico del historial */}
      <div className="bg-[rgba(255,255,255,0.03)] rounded px-3 py-5">
        
        <CardTitleSecond className="mb-4">HISTORIAL</CardTitleSecond>

        <SameData 
          paramKey="fecha" 
          paramValue="valor" 
          data={historial} 
          suffix="puntos"
        />
      
      </div>

    </div>

  );
};

export default RiesgoPaisHistorial;