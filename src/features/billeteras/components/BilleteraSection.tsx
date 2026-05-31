import { useBilletera } from "../hooks/useBilletera";
import { Wallet } from "lucide-react";

import BilleteraCard from "./BilleteraCard";
import { Section, TitleIcon } from "@/components";


const BilleteraSection = () => {

  const {
    data,
    isPending,
    error,
  } = useBilletera();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No hay datos de billeteras</p>;
  }

  return (

    <Section id="billetera">
      <TitleIcon>
        <h1>RENDIMIENTO BILLETERAS VIRTUALES</h1>
      
        <Wallet
          strokeWidth={3}
          className="icon-section text-[rgb(255,255,255)]"
        />

      </TitleIcon>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {data.map((item) => (
          <BilleteraCard key={item.name} data={item} />
        ))}
      </div>
    </Section>

  );
};

export default BilleteraSection;