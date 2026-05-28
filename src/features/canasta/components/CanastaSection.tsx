import { useCanasta } from "../hooks/useCanasta";
import { ShoppingBasket } from "lucide-react";

import CanastaCard from "./CanastaCard";
import { Section, SectionTitle, CardTitleIcon } from "@/components";


const CanastaSection = () => {

  const {
    data,
    isPending,
    error,
  } = useCanasta();

  if (isPending) {
    return <p>Cargando...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No hay datos de canasta básica</p>;
  }

  return (

    <Section id="canasta">
      
      <CardTitleIcon>

        <SectionTitle>CANASTA BÁSICA</SectionTitle>

        <ShoppingBasket
          strokeWidth={3}
          className="icon-section text-[rgb(247,245,103)]"
        />

      </CardTitleIcon>

      <CanastaCard data={data} />

    </Section>

  );
};

export default CanastaSection;