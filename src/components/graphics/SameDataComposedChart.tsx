import {
  ResponsiveContainer, ComposedChart, Line, Bar,
  XAxis,YAxis, CartesianGrid, LabelList 
} from "recharts";

import { cn } from "@/utils/cn";
import { useHorizontalDragScroll } from "@/hooks/useHorizontalDragScroll";

type ChartProps = {
  data: any[];
  className?: string;
}


export default function Chart({ data, className }: ChartProps) {

  const {
    scrollRef,
    isDragging,
    dragHandlers,
  } = useHorizontalDragScroll();
  
  // Ancho dinámico
  const charWidth = Math.max(data.length * 80, 800);


  return (

    <div 
      ref={scrollRef}
      className={cn(
        "w-full overflow-x-auto overscroll-x-contain select-none",
        isDragging
          ? "cursor-grabbing"
          : "cursor-grab",
        className
      )}
      {...dragHandlers}
    >

      <div style={{ width: charWidth, height: 400 }}>

        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart 
            data={data}
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
            
            {/* Cartelito que aparece al poner el mouse sobre las barras */}
            {/* <Tooltip /> */}

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