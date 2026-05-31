import { Card, Key, Value  } from "@/components";
import type { SalarioData } from "../types/salario.type";
import { formatPrice } from "@/helpers";

type SalarioProps = {
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

      <p className="footer-date sm:mt-auto"> {data.vigente_desde}</p>
    </Card>

  );
};

export default SalarioCard;