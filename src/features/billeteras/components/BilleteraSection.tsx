import { useBilletera } from "../hooks/useBilletera";
import { Wallet } from "lucide-react";

import BilleteraCard from "./BilleteraCard";
import { Section, SectionTitle, CardTitleIcon } from "@/components";


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

      <CardTitleIcon>

        <SectionTitle>RENDIMIENTO BILLETERAS VIRTUALES</SectionTitle>
      
        <Wallet
          strokeWidth={3}
          className="icon-section text-[rgb(255,255,255)]"
        />

      </CardTitleIcon>

      <div className="grid grid-cols-6 gap-7">
        {data.map((item) => (
          <BilleteraCard key={item.name} data={item} />
        ))}
      </div>

    </Section>

  );
};

export default BilleteraSection;