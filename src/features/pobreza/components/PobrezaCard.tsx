import { Card, Key, Value } from "@/components";
import { percentFormatter } from "@/helpers";
import type { PobrezaData } from "../types/pobreza.type";

interface PobrezaProps {
  data: PobrezaData;
}


const PobrezaCard = ({ data }: PobrezaProps) => {

  return (
    
    <Card className="flex flex-col gap-2 bg-[rgba(0,0,0,0.2)]">

      <div className="flex justify-between items-baseline gap-4">
        <Key>HOGARES BAJO LA LÍNEA DE POBREZA</Key>
        <Value>{data.hogares}%</Value>
      </div>

      <div className="flex justify-between items-baseline gap-4">      
        <Key>POBLACIÓN BAJO LA LÍNEA DE POBREZA</Key>
        <Value>{percentFormatter(data.poblacion)}%</Value>
      </div>

    </Card>

  );
};

export default PobrezaCard;