import { formatNormalDate, formatPrice } from "@/helpers";
import type { DolarData } from "../types/dolar.type";
import { Card, Key, Value } from "@/components";
import { S_Key, S_Value } from "../typography/sectionTypography";
import { cn } from "@/utils/cn";

type DolarCardProps = {
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
  const KeyComponent = isOfficial ? S_Key : Key;
  const ValueComponent = isOfficial ? S_Value : Value;

  return (

    <Card 
      variant={isOfficial ? "dollar" : "default"}
    >
      {isOfficial 
        ? <h2 className="mb-5">{name}</h2>
        : <h3 className="mb-5">{name}</h3>
      }

      <div className="flex flex-col gap-5">
        <div className="text-center">
          <KeyComponent>COMPRA</KeyComponent>

          <ValueComponent>${formatPrice(data.compra)}</ValueComponent>
        </div>

        <div className="text-center">
          <KeyComponent>VENTA</KeyComponent>

          <ValueComponent>${formatPrice(data.venta)}</ValueComponent>
        </div>
      </div>

      <p className={cn(
        "footer-date",
        isOfficial
          ? "mt-10 sm:mt-auto"
          : "md:mt-10"
      )}>
        {formatNormalDate(data.fechaActualizacion)}
      </p>
    </Card>
  );
};

export default DolarCard;