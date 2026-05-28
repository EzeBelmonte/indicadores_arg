import type { DolarData } from "../types/dolar.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


export const getDolar = async (): Promise<DolarData[]> => {

  const response = await apiFetcher<DolarData[]>(
    
    "/api/dolar",
    "Error obteniendo precios del dolar"
  );

  return response;

}