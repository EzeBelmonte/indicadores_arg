export interface RiesgoPaisActualData {
  ultimo: number;
  fecha: string;
  variacion: number;
  tendencia: string;
  fuente: string;
}

export interface RiesgoPaisAnteriorData {
  ultimo: number;
  fecha: string;
  variacion_puntos: number;
  fuente: string;
}

// Respuesta normalizada del front para día actual y anterior
export interface RisesgoPaisResponse {
  current?: RiesgoPaisActualData;
  previous?: RiesgoPaisAnteriorData;
}

// Respuesta para obtener el historial
export interface RiesgoPaisHistorialData {
  fecha: string;
  valor: number;
}