import type { RiesgoPaisActualData, RiesgoPaisAnteriorData } from "../types/RiesgoPais.type";
import { Card, Key, Value } from "@/components";
import { ArrowBigUp, ArrowBigDown, Equal } from "lucide-react";
import { formatNormalDate } from "@/helpers";

type RiskProps = {
  current?: RiesgoPaisActualData;
  previous?: RiesgoPaisAnteriorData;
}


const RiesgoPaisCard = ({ current, previous }: RiskProps) => {

  const isCero = current?.variacion == 0;
  const isDown = current?.tendencia === "baja";

  const TrendIcon = isCero 
    ? Equal 
    : current?.ultimo
      ? ArrowBigDown 
      : ArrowBigUp;

  const trendColor = isCero
    ? "text-white"
    : isDown 
      ? "text-[#4ece96]"
      : "text-[#da5858]";

  const iconColor = isCero
    ? "#ffffff"
    : isDown 
      ? "#58daa2"
      : "#da5858";


  return (

    <div className="flex flex-col gap-2 sm:flex-row lg:gap-4">

      {/* Riesgo país actual */}
      <Card 
        variant="riesgoPais"
      >
        <div className="flex justify-between">
          {/* Variación */}
          <div>
            <Key>VARIACIÓN</Key>

            {/* Icono y valor */}
            <div className="flex items-center gap-1">

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
          <div>
            <Key>VALOR</Key>
            
            <Value>{current?.ultimo}</Value> 
          </div>
        </div>

        <p className="footer-date mt-7">
          {current && formatNormalDate(current?.fecha)}
        </p>
      </Card>

      {/* Riesgo país del día anterior */}
      <Card>
        <div className="flex justify-between">
          <div>
            <Key>VARIACIÓN PTS.</Key>

            <Value className="text-gray-400">
              {previous?.variacion_puntos}
            </Value>
          </div>

          <div>
            <Key>CIERRE ANT.</Key>

            <Value className="text-gray-400">
              {previous?.ultimo}
            </Value>
          </div>
        </div>

        <p className="footer-date mt-7">
          ÚLTIMO CIERRE
        </p>
      </Card>
    </div>
  );
};

export default RiesgoPaisCard;