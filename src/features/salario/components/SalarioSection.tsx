import { useSalario } from "../hooks/useSalario";
import { Banknote } from "lucide-react";

import { Section, SectionTitle, CardTitleIcon } from "@/components";
import SalarioCard from "./SalarioCard";


const SalarioSection = () => {
  const {
    data,
    isPending,
    error,
  } = useSalario();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No hay datos del salario mínumo</p>;
  }

  return (

    <Section id="salario" className="h-full flex flex-col">
      
      <CardTitleIcon>

        <SectionTitle>SALARIO MÍNIMO, VITAL Y MOVIL</SectionTitle>

        <Banknote 
          strokeWidth={3}
          className="icon-section text-[rgb(252,87,211)]"
        />

      </CardTitleIcon>

      <SalarioCard data={data} />

    </Section>
    
  );
};

export default SalarioSection;