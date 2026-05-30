import { Card, Key, Value, CardFooter } from "@/components";
import type { EMAEData } from "../types/emae.types";
import { formatNormalDate, percentFormatter } from "@/helpers";

type EMAEProps = {
  data: EMAEData;
}


const EmaeCard = ({ data }: EMAEProps) => {

  // Guardamos si dio 0 la variable respecto al mes anterior
  const isMCero = data.monthly == 0;
  // Guardamos si dio 0 la variable interanual
  const isYCero = data.yearly == 0;
  // Guardamos si dio 0 la variable tendencia-ciclo
  const isCCero = data.cycleTrend == 0;

  // Guardamos los colores para usar en los % de cada valor
  const colorMonthly = isMCero 
    ? "text-white"
    : data.monthly < 0
      ? "text-[#da5858]"
      : "text-[#4ece96]";

  const colorYearly = isYCero 
    ? "text-white"
    : data.yearly < 0
      ? "text-[#da5858]"
      : "text-[#4ece96]";

  const colorCycle = isCCero 
    ? "text-white"
    : data.cycleTrend < 0
      ? "text-[#da5858]"
      : "text-[#4ece96]";

  return (

    <Card className="bg-[rgba(8,75,66,0.5)]">

      <div className="flex justify-between">
        <Key>VARIACIÓN RESPECTO AL MES ANTERIOR</Key>
        <Value className={colorMonthly}>{percentFormatter(data.monthly)}</Value>
      </div>

      <div className="flex justify-between">
        <Key>INTERANUAL</Key>
        <Value className={colorYearly}>{percentFormatter(data.yearly)}</Value>
      </div>

      <div className="flex justify-between">
        <Key>TENDENCIA-CICLO</Key>
        <Value className={colorCycle}>{percentFormatter(data.cycleTrend)}</Value>
      </div>

      <CardFooter className="flex gap-1 mt-10">
        <p>FECHA:</p>
        <p>{formatNormalDate(data.date)}</p>
      </CardFooter>

      
    </Card>

  );
};

export default EmaeCard;