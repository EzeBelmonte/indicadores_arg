import { useAniosIPC } from "../hooks/useIPC";
import { SameData, CardTitleSecond } from "@/components";
import { cn } from "@/utils/cn";

interface HistorialItem {
  fecha: string;
  valor: number;
};

interface Anual {
  anio: number;
  valor: number;
}


const IpcHistorial = () => {

  const {
    data = [],
    isPending,
    error,
  } = useAniosIPC();

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
  
  // Armarmos el arreglo para guardar la interanual
  const anual: Anual[] = [];

  // Guardamos el primer anio
  let controlYear  = data[0].anio;
  let accumulated = 1;

  data.forEach((i, index) => {

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
    
    historial.push({
      fecha: `${i.nombre_mes}/${i.anio}`,
      valor: i.valor,
    })

  });

  // Estilo en comun de los textos
  const textStyle = "text-white font-semibold me-1";

  const currentYear = new Date().getFullYear();

  return (

    <>

      <div className="mb-8">

        {anual.map((i) => {
          const isCurrentYear = i.anio === currentYear;

          return (
            <div key={i.anio} className={cn(
              "w-80 flex items-baseline px-2 py-1",
              isCurrentYear 
                ? "bg-[rgba(255,255,255,0.03)] rounded border border-white/10"
                : ""
            )}>
                
              <div className="flex">

                <p className={textStyle}>
                  {isCurrentYear
                    ? "ACUMULADA"
                    : "INFLACIÓN ANUAL EN"}
                </p>

                <p className={textStyle}>
                  {i.anio}:
                </p>

              </div>

              <p className="text-[rgb(160,73,241)] text-[1.1rem] font-bold ml-auto">
                {i.valor}%
              </p>

            </div>
          );
        })}

      </div>

      <div className="bg-[rgba(255,255,255,0.03)] rounded px-3 py-5">
        
        <CardTitleSecond className="mb-4">HISTORIAL (3 AÑOS)</CardTitleSecond>

        <SameData data={historial} />
      
      </div>

    </>

  );
};

export default IpcHistorial