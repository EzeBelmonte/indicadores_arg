export interface EMAEData {
  success: boolean;
  date: string;
  monthly: number;    // Variación respecto al mes anterior (desestacionalizado)
  yearly: number;     // Interanual
  cycleTrend: number; // Tendencia-ciclo
}