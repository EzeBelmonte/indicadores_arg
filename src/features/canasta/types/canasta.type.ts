export interface HogaresData {
  hogar_1: {
    integrantes: number;
    valor: number;
  };

  hogar_2: {
    integrantes: number;
    valor: number;
  };

  hogar_3: {
    integrantes: number;
    valor: number;
  };
}

export interface CanastaData {
  variacion_mensual: number;
  variacion_acumulada_anio: number;
  variacion_interanual: number;
  adulto_equivalente: number;
  hogares: HogaresData;
}

export interface CanastaData {
  periodo: string;
  fecha_publicacion: string;
  fuente: string;

  cba: CanastaData;
  cbt: CanastaData;
}

export interface CanastaResponse {
  data: CanastaData;
}