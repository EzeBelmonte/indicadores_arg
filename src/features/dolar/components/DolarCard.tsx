import { formatNormalDate, formatPrice } from "@/helpers";

import type { DolarData } from "../types/dolar.type";

import {
  Card, CardTitle, CardTitleSecond, CardFooter,
  Key, Value,
} from "@/components";

import { DollarKey, DollarValue } from "../typography/DolarTypography";

interface DolarCardProps {
  data: DolarData;
  variant?: "default" | "featured";
}


const DolarCard = ({ data, variant = "default" }: DolarCardProps) => {

  const isOfficial = variant === "featured";

  const name =
    data.nombre === "Contado con liquidación"
      ? "CCL"
      : data.nombre.toUpperCase();

  // Componentes dinámicos
  const TitleComponent = isOfficial ? CardTitle : CardTitleSecond;
  const KeyComponent = isOfficial ? DollarKey : Key;
  const ValueComponent = isOfficial ? DollarValue : Value;

  return (

    <Card 
      className="flex flex-col border-2 border-gray-400/10"
      variant={isOfficial ? "dollar" : "default"}
    >

      <TitleComponent>{name}</TitleComponent>


      <div className="flex justify-around items-center min-h-23">

        <div className="text-center">

          <KeyComponent>COMPRA</KeyComponent>

          <ValueComponent>${formatPrice(data.compra)}</ValueComponent>

        </div>

        <div className="text-center">

          <KeyComponent>VENTA</KeyComponent>

          <ValueComponent>${formatPrice(data.venta)}</ValueComponent>

        </div>

      </div>

      <CardFooter className="mt-auto">

        FECHA: {formatNormalDate(data.fechaActualizacion)}

      </CardFooter>
      
    </Card>
  );
};

export default DolarCard;