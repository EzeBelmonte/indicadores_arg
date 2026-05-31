import type { MervalData } from "../types/merval.type";

import { Card, Key, Value, Group } from "@/components";
import { State, Price } from "../typography/MarvelTypography";

import { marketStateMap } from "../constants/marketState";
import { cn } from "@/utils/cn";

import { formatPrice, formatCompactPrice, percentFormatter } from "@/helpers";


type MervalCardProps = {
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

  return (

    <Card className="flex flex-col gap-3 bg-[#053c4d7a]">

      {/* Nombre y estado */}
      <div className="flex gap-3 items-baseline">

        <h2>{data.shortName}</h2>

        <State className={estado.color}>
          {estado.label}
        </State>

      </div>

      <div className="grid grid-cols-1 gap-4">

        {/* Precio actual */}
        <div>
          <Key>PRECIO ACT.:</Key> 
          <Price className="text-[#4ece96]">{moneda}{formatPrice(data.regularMarketPrice)}</Price> 
        </div>

        {/* Cambio nominal/porcentual */}
        <div>
          <Group>
            <Key>VAR. NOMINAL:</Key> 
            <Value className={cn(
              data.regularMarketChange >= 0 
                ? "text-[#4ece96]"
                : "text-[#da5858]"
              )}
            >
              {moneda}{formatPrice(data.regularMarketChange)}
            </Value>
          </Group>

          <Group>
            <Key>VAR. PORCEN.:</Key> 
            <Value className={cn(
              data.regularMarketChangePercent >= 0 
                ? "text-[#4ece96]"
                : "text-[#da5858]"
              )}
            >
              {percentFormatter(data.regularMarketChangePercent)}%
            </Value>
          </Group>
        </div>

        {/* Apertura y cierre */}
        <div>
          <Group>
            <Key>CIERRE ANT.:</Key>
            <Value>{moneda}{formatPrice(data.regularMarketPreviousClose)}</Value>
          </Group>

          <Group>
            <Key>APERTURA:</Key>
            <Value>{moneda}{formatPrice(data.regularMarketOpen)}</Value>
          </Group>
        </div>

        {/* Mínimo y máximo */}
        <div>
          <Group>
            <Key>MÍN. (DÍA):</Key>
            <Value>{moneda}{formatPrice(data.regularMarketDayLow)}</Value>
          </Group>

          <Group>
            <Key>MÁX. (DÍA):</Key>
            <Value>{moneda}{formatPrice(data.regularMarketDayHigh)}</Value>
          </Group>
        </div>

        {/* Mínimo y maximo en 52 semana */}
        <div>
          <Group>
            <Key>MÍN. (MAX. 52 SEM.):</Key>
            <Value>{moneda}{formatPrice(data.fiftyTwoWeekLow)}</Value>
          </Group>

          <Group>
            <Key>MÁX. (MAX. 52 SEM.):</Key>
            <Value>{moneda}{formatPrice(data.fiftyTwoWeekHigh)}</Value>
          </Group>
        </div>

        {/* Volumen y capitalización */}
        <div>

          <Group>
            <Key>VOL. OPERADO:</Key>
            <Value>{data.regularMarketVolume}</Value>
          </Group>
          
          <Group>
            <Key>CAP. BURSÁTIL:</Key>
            <Value className="text-[#e9ab02]">{moneda}{formatCompactPrice(data.marketCap)}</Value>
          </Group>
        </div>
      </div>
    </Card>

  );
};

export default MervalCard;