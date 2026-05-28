import type { PobrezaData } from "../types/pobreza.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


export const getPobreza = async (): Promise<PobrezaData> => {

  const response = await apiFetcher<PobrezaData>(

    "/api/pobreza",
    "Error obteniendo datos de la pobreza e indigencia"
    
  );

  return response;
  
};