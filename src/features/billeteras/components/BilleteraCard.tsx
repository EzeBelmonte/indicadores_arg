import type { BilleteraData } from "../types/billetera.type";
import { Card, Image, CardFooter, Key, Value } from "@/components";
import { percentFormatter, formatNormalDate, normalizedName } from "@/helpers";
import { billeteraLogo } from "../constants/billeteraLogo";

interface WalletProps {
  data: BilleteraData
}


const BilleteraCard = ({ data }: WalletProps) => {

  // Nombre normalizado
  const walletKey = normalizedName(data.name) as keyof typeof billeteraLogo;

  // Se verifca si tiene logo
  const logo = billeteraLogo[walletKey]?.logo;

  return (
    <Card className="flex flex-col gap-5 items-center bg-[rgba(255,255,255,0.1)]">
      
      {logo && 
        <Image 
          src={logo} 
          alt={data.name} 
          width={120}
          className="rounded"
        />
      }

      <div className="flex items-baseline gap-2">
        <Key>ANUAL:</Key> 
        <Value>{percentFormatter(data.rate)}%</Value>
      </div>

      <CardFooter className="mt-auto">{formatNormalDate(data.updatedAt)}</CardFooter>

    </Card>
  );
};

export default BilleteraCard;