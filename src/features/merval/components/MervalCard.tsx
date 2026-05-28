import type { MervalData } from "../types/merval.type";

import { Card, CardTitleSecond } from "@/components";
import { State, Key, Value, Price } from "../typography/MarvelTypography";

import { marketStateMap } from "../constants/marketState";
import { cn } from "@/utils/cn";

import { formatPrice, formatCompactPrice, percentFormatter } from "@/helpers";


interface MervalCardProps {
  data: MervalData;
}


const MervalCard = ({ data }: MervalCardProps) => {

  // Traducción del estado en el mercado
  const estado = marketStateMap[data.marketState] ?? {
    label: data.marketState,
    color: "text-gray-500",
  };

  // Obtener signo de la moneda
  const moneda = data.currency === "ARS" ? "$" : "US$"

  // Estilo compartido para cada grupo de datos
  const group = "grid grid-rows-2";

  // Estilo compartido para los títulos de los datos
  const marketSubTitle = "grid grid-cols-[1fr_1fr] items-baseline";

  return (

    <Card className="flex flex-col gap-3 bg-[#053c4d7a]">

      {/* Nombre y estado */}
      <div className="flex gap-3 items-baseline">

        <CardTitleSecond>{data.shortName}</CardTitleSecond>

        <State className={estado.color}>
          {estado.label}
        </State>

      </div>

      <div className="grid grid-cols-[1fr_1fr] gap-5">

        {/* Precio actual */}
        <div>
          <Key>PRECIO ACT.:</Key> 
          <Price className="text-[#4ece96]">{moneda}{formatPrice(data.regularMarketPrice)}</Price> 
        </div>

        {/* Cambio nominal/porcentual */}
        <div className={group}>

          <div className={marketSubTitle}>
            <Key>VAR. NOMINAL:</Key> 
            <Value className={cn(
              data.regularMarketChange >= 0 
                ? "text-[#4ece96]"
                : "text-[#da5858]"
              )}
            >
              {moneda}{formatPrice(data.regularMarketChange)}
            </Value>
          </div>

          <div className={marketSubTitle}>
            <Key>VAR. PORCEN.:</Key> 
            <Value className={cn(
              data.regularMarketChangePercent >= 0 
                ? "text-[#4ece96]"
                : "text-[#da5858]"
              )}
            >
              {percentFormatter(data.regularMarketChangePercent)}%
            </Value>
          </div>

        </div>

        {/* Apertura y cierre */}
        <div className={group}>

          <div className={marketSubTitle}>
            <Key>CIERRE ANT.:</Key>
            <Value>{moneda}{formatPrice(data.regularMarketPreviousClose)}</Value>
          </div>

          <div className={marketSubTitle}>
            <Key>APERTURA:</Key>
            <Value>{moneda}{formatPrice(data.regularMarketOpen)}</Value>
          </div>

        </div>

        {/* Mínimo y máximo */}
        <div className={group}>

          <div className={marketSubTitle}>
            <Key>MÍN. (DÍA):</Key>
            <Value>{moneda}{formatPrice(data.regularMarketDayLow)}</Value>
          </div>

          <div className={marketSubTitle}>
            <Key>MÁX. (DÍA):</Key>
            <Value>{moneda}{formatPrice(data.regularMarketDayHigh)}</Value>
          </div>

        </div>

        {/* Mínimo y maximo en 52 semana */}
        <div className={group}>

          <div className={marketSubTitle}>
            <Key>MÍN. (MAX. 52 SEM.):</Key>
            <Value>{moneda}{formatPrice(data.fiftyTwoWeekLow)}</Value>
          </div>

          <div className={marketSubTitle}>
            <Key>MÁX. (MAX. 52 SEM.):</Key>
            <Value>{moneda}{formatPrice(data.fiftyTwoWeekHigh)}</Value>
          </div>

        </div>

        {/* Volumen y capitalización */}
        <div className={group}>

          <div className={marketSubTitle}>
            <Key>VOL. OPERADO:</Key>
            <Value>{data.regularMarketVolume}</Value>
          </div>
          
          <div className={marketSubTitle}>
            <Key>CAP. BURSÁTIL:</Key>
            <Value className="text-[#e9ab02]">{moneda}{formatCompactPrice(data.marketCap)}</Value>
          </div>

        </div>

      </div>

    </Card>

  );
};

export default MervalCard;