import { Card, Key, Value, Group } from "@/components";
import { percentFormatter } from "@/helpers";
import type { PobrezaData } from "../types/pobreza.type";

type PobrezaProps = {
  data: PobrezaData;
}


const PobrezaCard = ({ data }: PobrezaProps) => {

  return (

    <Card className="flex flex-col h-full gap-2 bg-[rgba(0,0,0,0.2)]">
      <Group>
        <Key>HOGARES BAJO LA LÍNEA DE POBREZA:</Key>
        <Value>{data.hogares}%</Value>
      </Group>

      <Group>      
        <Key>POBLACIÓN BAJO LA LÍNEA DE POBREZA:</Key>
        <Value>{percentFormatter(data.poblacion)}%</Value>
      </Group>
    </Card>
  );
};

export default PobrezaCard;