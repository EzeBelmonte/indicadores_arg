import type { RiesgoPaisActualData, RiesgoPaisAnteriorData } from "../types/RiesgoPais.type";
import { Card, CardFooter, Key, Value } from "@/components";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { formatNormalDate } from "@/helpers";

interface RiskProps {
  current?: RiesgoPaisActualData;
  previous?: RiesgoPaisAnteriorData;
}


const RiesgoPaisCard = ({ current, previous }: RiskProps) => {

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-7 h-28">
      <Card 
        className="flex flex-col gap-4"
        variant="riesgoPais"
      >
        <div className="flex w-full justify-between items-center ">
          <div className="flex flex-col gap-1">
            <Key>VARIACIÓN</Key>

            {/* Icono y valor */}
            <div className="flex items-center gap-2">
              {/* Icono de la flecha */}
              {
                current?.tendencia === "baja" ? (
                  <ArrowBigDown size={20} color="#58daa2" absoluteStrokeWidth />
                ) : (
                  <ArrowBigUp size={20} color="#da5858" absoluteStrokeWidth />
                )
              }

              {/* Valor porcentual */}
              <Value
                className={`${current?.tendencia === "baja"
                  ? "text-[#4ece96]"
                  : "text-[#da5858]"
                }`}
              >
                {current?.variacion}%
              </Value> 
            </div>
          </div>

          {/* "Valor" y valor */}
          <div className="flex flex-col gap-1">
            <Key>VALOR</Key>
            
            <Value>{current?.ultimo}</Value> 
          </div>
        </div>

        <CardFooter className="mt-auto">{current && formatNormalDate(current?.fecha)}</CardFooter>
      </Card>

      {/* Riesgo país del día anterior */}
      <Card className="flex flex-col gap-4">
        <div className="flex justify-between gap-6">
          <div className="flex flex-col gap-1">
            <Key>VARIACIÓN PTS.</Key>

            <Value className="text-gray-400">{previous?.variacion_puntos}</Value>
          </div>

          <div className="flex flex-col gap-1">
            <Key>CIERRE ANT.</Key>

            <Value className="text-gray-400">{previous?.ultimo}</Value>
          </div>
        </div>

        <CardFooter className="mt-auto">ÚLTIMO CIERRE</CardFooter>

      </Card>
    </div>
  );
};

export default RiesgoPaisCard;