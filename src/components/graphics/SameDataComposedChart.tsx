import {
  ResponsiveContainer, ComposedChart, Line, Bar,
  XAxis,YAxis, CartesianGrid, Tooltip, LabelList 
} from "recharts";

import type { IPCData } from "@/features/ipc/types/ipc.type";

interface ChartProps {
  data: IPCData[];
}



export default function Chart({ data }: ChartProps) {
  
  // Armamos el arreglo
  const historial = data.map((i) => ({
    fecha: i.nombre_mes + "/" + i.anio,
    valor: i.valor
  }));

  // Ancho dinámico
  const charWidth = Math.max(historial.length * 80, 800);

  return (

    <div 
      className="w-full overflow-x-auto"
      onWheel={(e) => {
        e.currentTarget.scrollLeft += e.deltaY;
      }}
    >

      <div style={{ width: charWidth, height: 400 }}>

        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart 
            data={historial}
            margin={{
              top: 20,
              right: 0,
              bottom: 20,
              left: 0,
            }}
          >

            {/* Cuadricula de la gráfica */}
            <CartesianGrid 
              stroke="rgb(34,36,37)"
            />

            <XAxis
              dataKey="fecha"
              angle={-45}
              textAnchor="end"
              height={90}
              interval={0}
              stroke="rgb(255,255,255)"
            />

            <YAxis stroke="rgb(255,255,255)" />

            <Tooltip />
            {/* <Legend /> */}

            {/* Barras */}
            <Bar 
              dataKey="valor" 
              fill="rgba(85,26,151,0.8)" 
              barSize={20}
              tabIndex={-1}
            >
              {/* Agrega valor a las barras */}
              <LabelList 
                dataKey="valor"
                position="top"
                fill="rgb(255,255,255)"
                fontSize={16}
                fontWeight={500}
              />
            </Bar>

            {/* Linea que toca las barras */}
            <Line
              type="monotone"
              dataKey="valor"
              stroke="#ff7300"
            />

          </ComposedChart>
        </ResponsiveContainer>
        
      </div>

    </div>

  );
}