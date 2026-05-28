import type { JubilacionData } from "../types/jubilacion.type";
import { Card, Key, Value, CardFooter } from "@/components";

import { formatNormalDate, formatPrice } from "@/helpers";

interface JubilacionProps {
  data: JubilacionData;
}


const JubilacionCard = ({ data }: JubilacionProps) => {

  return (

    <Card className="flex flex-col h-25 bg-[rgba(108,179,201,0.2)]">

      <div className="flex justify-between items-baseline gap-4">
        <Key>JUBILACIÓN: </Key>
        <Value>${formatPrice(data.jubilacionMinima)}</Value>
      </div>

      <CardFooter className="mt-auto">{formatNormalDate(data.fecha)}</CardFooter>

    </Card>

  );
};

export default JubilacionCard;