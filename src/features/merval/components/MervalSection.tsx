import { useMerval } from "../hooks/useMerval";
import { TrendingUp } from "lucide-react";

import MervalCard from "./MervalCard";
import { Section, SectionTitle, CardTitleIcon } from "@/components";


const MervalSection = () => {

  const {
    data,
    isPending,
    error,
  } = useMerval();

  if (isPending) {
    return <p>Cargando MERVAL...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No hay datos del merval</p>;
  }

  return (
    <Section id="merval">

      <CardTitleIcon>
        
        <SectionTitle>MERVAL</SectionTitle>

        <TrendingUp
          strokeWidth={3}
          className="icon-section text-[rgb(60,255,0)]"
        />

      </CardTitleIcon>
      
      <div className="grid grid-cols-2 gap-7">

        {data.map((item) => (
          <MervalCard key={item.symbol} data={item} />
        ))}

      </div>

    </Section>
  );
};

export default MervalSection;