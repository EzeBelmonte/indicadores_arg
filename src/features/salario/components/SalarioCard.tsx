import { Card, CardFooter, Key, Value  } from "@/components";
import type { SalarioData } from "../types/salario.type";
import { formatPrice } from "@/helpers";

interface SalarioProps {
  data: SalarioData;
}


const SalarioCard = ({ data }: SalarioProps) => {

  // Estilo base de los grupos
  const group = "flex justify-between items-baseline";

  return (

    <Card className="flex flex-col flex-1 bg-[rgba(192,32,152,0.2)]">

      <div className="flex flex-col gap-1">

        <div className={group}>
          <Key>SALARIO MENSUAL:</Key>
          <Value>${formatPrice(data.smvm)}</Value>
        </div>

        <div className={group}>
          <Key>SALARIO DIARIO:</Key>
          <Value>${formatPrice(data.smvm_dia)}</Value>
        </div>

        <div className={group}>
          <Key>SALARIO POR HORA:</Key>
          <Value>${formatPrice(data.smvm_hora)}</Value>
        </div>

      </div>

      <div className="mt-auto">

        <div className="flex gap-2">

          <p className="text-[0.7rem]">VIGENTE DESDE:</p>
          <CardFooter> {data.vigente_desde}</CardFooter>

        </div>
        
      </div>
    </Card>

  );
};

export default SalarioCard;