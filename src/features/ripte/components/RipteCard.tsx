import type { RipteData } from "../types/ripte.type";
import { Card, Key, Value, CardFooter } from "@/components";

import { formatNormalDate, formatPrice } from "@/helpers";

interface RipteProps {
  data: RipteData;
};


const RipteCard = ({ data }: RipteProps) => {
  
  return (
    
    <Card className="flex flex-col h-25 bg-[rgba(0,26,255,0.2)]">
    
      <div className="flex justify-between items-baseline gap-4">
        <Key>MONTO: </Key>
        <Value>${formatPrice(data.value)}</Value>
      </div>

      <CardFooter className="mt-auto">{formatNormalDate(data.fecha)}</CardFooter>

    </Card>
  );
};

export default RipteCard;