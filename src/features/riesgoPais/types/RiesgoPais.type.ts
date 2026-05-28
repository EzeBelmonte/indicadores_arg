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

// Respuesta normalizada del front
export interface RisesgoPaisResponse {
  current?: RiesgoPaisActualData;
  previous?: RiesgoPaisAnteriorData;
}