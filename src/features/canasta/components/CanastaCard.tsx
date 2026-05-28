import type { CanastaData } from "../types/canasta.type";
import { Card, CardTitle, CardTitleSecond, Key, Value, Group } from "@/components";
import { Text } from "../typography/CanastaTypography";
import { percentFormatter, formatPrice } from "@/helpers";


interface CanastaProps {
  data: CanastaData;
}


const CanastaCard = ({ data }: CanastaProps) => {

  return (
    <>
      <div className="mb-3 ml-3">

        <Text>FECHA PUBLICACION: {data.fecha_publicacion}</Text>
       
        <Text>PERIODO: {data.periodo}</Text>
        
        <Text>FUERTE: {data.fuente}</Text>

      </div>

      <div className="grid grid-cols-2 gap-6">

        {/* Datos de canasta básica alimentaria */}
        <Card className="bg-[rgba(208,255,0,0.2)]">

          <CardTitle className="mb-2">CANASTA BÁSICA ALIMENTARIA</CardTitle>

          <Group>
            <Key>VARIACIÓN MENSUAL:</Key>
            <Value>{percentFormatter(data.cba.variacion_mensual)}%</Value>
          </Group>

          <Group>
            <Key>VARIACIÓN ACUMULADA (AÑO):</Key>
            <Value>{percentFormatter(data.cba.variacion_acumulada_anio)}%</Value>
          </Group>

          <Group>
            <Key>VARIACIÓN INTERANUAL:</Key>
            <Value>{percentFormatter(data.cba.variacion_interanual)}%</Value>
          </Group>

          <Group>
            <Key>ADULTO NECESITA:</Key>
            <Value>${formatPrice(data.cba.adulto_equivalente)}</Value>
          </Group>

          <br/>

          <CardTitleSecond className="mb-2">HOGARES</CardTitleSecond>
          
          {Object.entries(data.cba.hogares).map(([key, hogar]) => (
            <Group key={key}>
              <Key>CON {hogar.integrantes} INTEGRANTES NECESITA:</Key>
              <Value>${formatPrice(hogar.valor)}</Value>
            </Group>
          ))}
          
        </Card>

        {/* Datos de canasta básica total */}
        <Card className="bg-[rgba(255,187,0,0.2)]">

          <CardTitle className="mb-2">CANASTA BÁSICA TOTAL</CardTitle>

          <Group>
            <Key>VARIACIÓN MENSUAL:</Key>
            <Value>{percentFormatter(data.cbt.variacion_mensual)}%</Value>
          </Group>

          <Group>
            <Key>VARIACIÓN ACUMULADA (AÑO):</Key>
            <Value>{percentFormatter(data.cbt.variacion_acumulada_anio)}%</Value>
          </Group>

          <Group>
            <Key>VARIACIÓN INTERANUAL:</Key>
            <Value>{percentFormatter(data.cbt.variacion_interanual)}%</Value>
          </Group>

          <Group>
            <Key>ADULTO NECESITA:</Key>
            <Value>${formatPrice(data.cbt.adulto_equivalente)}</Value>
          </Group>

          <br/>

          <CardTitleSecond className="mb-2">HOGARES</CardTitleSecond>
          
          {Object.entries(data.cbt.hogares).map(([key, hogar]) => (
            <Group key={key}>
              <Key>CON {hogar.integrantes} INTEGRANTES NECESITA:</Key>
              <Value>${formatPrice(hogar.valor)}</Value>
            </Group>
          ))}
          
        </Card>

      </div>
    </>
  );
};

export default CanastaCard;