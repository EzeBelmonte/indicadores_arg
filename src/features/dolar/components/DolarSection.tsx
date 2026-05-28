import { useDolar } from "../hooks/useDolar";
import DolarCard from "./DolarCard";

import { Section, SectionTitle, CardTitleIcon } from "@/components";
import { DollarSign } from "lucide-react";


const DolarSection = () => {
  const { 
    data, 
    isPending, 
    error,
  } = useDolar();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No hay datos de los precios del dolar</p>
  }

  // Guardo el dolar oficial
  const oficial = data[0];
  const others = data.slice(1);

  return (

    <Section id="dolar" className="scroll-mt-24">

      <CardTitleIcon>

        <SectionTitle>COTIZACIÓN DEL DÓLAR</SectionTitle>

        <DollarSign
          strokeWidth={3}
          className="icon-section text-[rgb(11,168,89)]"
        />

      </CardTitleIcon>

      <div className="grid grid-cols-[1.1fr_2.6fr] gap-7">

        <DolarCard 
          data={oficial}
          variant="featured"
        />

        <div className="grid grid-cols-3 grid-rows-2 gap-7">

          {others.map((d) => (
            
            <DolarCard 
              key={d.casa}
              data={d}
            />
          
          ))}
          
        </div>
      </div>
    </Section>
  );
};

export default DolarSection;