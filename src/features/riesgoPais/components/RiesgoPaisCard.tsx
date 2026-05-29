import type { RiesgoPaisActualData, RiesgoPaisAnteriorData } from "../types/RiesgoPais.type";
import { Card, CardFooter, Key, Value } from "@/components";
import { ArrowBigUp, ArrowBigDown, Equal } from "lucide-react";
import { formatNormalDate } from "@/helpers";

interface RiskProps {
  current?: RiesgoPaisActualData;
  previous?: RiesgoPaisAnteriorData;
}


const RiesgoPaisCard = ({ current, previous }: RiskProps) => {

  const isEqual = current?.variacion == 0;
  const isDown = current?.tendencia === "baja";

  const TrendIcon = isEqual 
    ? Equal 
    : current?.ultimo
      ? ArrowBigDown 
      : ArrowBigUp;

  const trendColor = isEqual
    ? "text-white"
    : isDown 
      ? "text-[#4ece96]"
      : "text-[#da5858]";

  const iconColor = isEqual
    ? "#ffffff"
    : isDown 
      ? "#58daa2"
      : "#da5858";


  return (

    <div className="grid grid-cols-2 gap-7 h-28">

      {/* Riesgo país actual */}
      <Card 
        className="flex flex-col gap-4"
        variant="riesgoPais"
      >
        <div className="flex w-full justify-between items-center">

          {/* Variación */}
          <div className="flex flex-col gap-1">
            <Key>VARIACIÓN</Key>

            {/* Icono y valor */}
            <div className="flex items-center gap-2">

              {/* Icono de la flecha */}
              <TrendIcon
                size={20}
                color={iconColor}
                absoluteStrokeWidth
              />

              {/* Valor porcentual */}
              <Value className={trendColor}>
                {current?.variacion}%
              </Value> 

            </div>

          </div>

          {/* Valor */}
          <div className="flex flex-col gap-1">

            <Key>VALOR</Key>
            
            <Value>{current?.ultimo}</Value> 

          </div>
        </div>

        <CardFooter className="mt-auto">
          {current && formatNormalDate(current?.fecha)}
        </CardFooter>

      </Card>

      {/* Riesgo país del día anterior */}
      <Card className="flex flex-col gap-4">
        <div className="flex justify-between gap-6">
          <div className="flex flex-col gap-1">

            <Key>VARIACIÓN PTS.</Key>

            <Value className="text-gray-400">
              {previous?.variacion_puntos}
            </Value>

          </div>

          <div className="flex flex-col gap-1">

            <Key>CIERRE ANT.</Key>

            <Value className="text-gray-400">
              {previous?.ultimo}
            </Value>

          </div>
        </div>

        <CardFooter className="mt-auto">
          ÚLTIMO CIERRE
        </CardFooter>

      </Card>
    </div>
  );
};

export default RiesgoPaisCard;