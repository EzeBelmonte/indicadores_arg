import { useIPCHistorial } from "../hooks/useIPC";
import { SameData, CardTitleSecond } from "@/components";


interface HistorialItem {
  fecha: string;
  valor: number;
};

interface Anual {
  anio: number;
  valor: number;
}

interface Inter {
  fecha: string;
  valor: number;
}


const IpcHistorial = () => {

  const {
    data = [],
    isPending,
    error,
  } = useIPCHistorial();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No hay datos</p>;
  }


  // Armamos el arreglo para el historial de inflacion
  const historial: HistorialItem[] = [];
  // Armarmos el arreglo para guardar la ANUAL
  const anual: Anual[] = [];
  // Armarmos el arreglo para guardar la INTERANUAL
  const inter: Inter[] = [];

  // Guardamos el primer anio
  let controlYear  = data[0].anio;
  let accumulated = 1;

  data.forEach((i, index) => {

    // ====================== HISTORIAL
    historial.push({
      fecha: `${i.nombre_mes}/${i.anio}`,
      valor: i.valor,
    })

    // ====================== ACUMULADA
    // Acumulamos inflación mensual
    accumulated *= 1 + i.valor / 100;

    const nextItem = data[index + 1];

    // Si cambia el año o es el último registro
    if (!nextItem || nextItem.anio !== controlYear) {
      anual.push({
        anio: controlYear,
        valor: Number(((accumulated - 1) * 100).toFixed(2)),
      });

      // Reset para el próximo año
      controlYear = nextItem?.anio;
      accumulated = 1;
    }

    // ====================== INTERANUAL
    if (index >= 11) {

      let interAccumulated = 1;

      for (let j = index - 11; j <= index; j++) {
        interAccumulated *= 1 + data[j].valor/ 100;
      }

      inter.push({
        fecha: `${i.nombre_mes}/${i.anio}`,
        valor: Number(((interAccumulated - 1) * 100).toFixed(2)),
      });

    }
  });

  // Estilo en comun de los textos
  const grapContainer = "bg-[rgba(255,255,255,0.03)] rounded px-3 py-5";


  return (

    <div className="flex flex-col gap-12">

      {/* Gráfico del historial */}
      <div className={grapContainer}>
        
        <CardTitleSecond className="mb-4">HISTORIAL</CardTitleSecond>
        <SameData
          paramKey="fecha"
          paramValue="valor"
          data={historial}
          suffix="porcentaje"
        />
      
      </div>

      {/* Gráfico del interanual */}
      <div className={grapContainer}>
        
        <CardTitleSecond className="mb-4">INTERANUAL</CardTitleSecond>
        <SameData 
          paramKey="fecha" 
          paramValue="valor" 
          data={inter} 
          suffix="porcentaje"
        />
      
      </div>

      {/* Gráfico del anual */}
      <div className={grapContainer}>
        
        <CardTitleSecond className="mb-4">ANUAL</CardTitleSecond>
        <SameData 
          paramKey="anio" 
          paramValue="valor"
          data={anual} 
          suffix="porcentaje"
        />
      
      </div>

    </div>

  );
};

export default IpcHistorial