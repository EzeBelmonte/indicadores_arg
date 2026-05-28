import type { JubilacionData } from "../types/jubilacion.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


export const getJubilacion = async (): Promise<JubilacionData> => {

  const response = await apiFetcher<JubilacionData>(
    
    "/api/jubilaciones",
    "Error obteniendo jubilación mínimaa"

  );

  return response;

}


/* 
Metodo antiguo:

export const getJubilacion = async (): Promise<JubilacionData> => {

  const response = await fetch("/api/jubilaciones");
  
  if (!response.ok) {
    throw new Error("Error obteniendo jubilación mínimaa");
  }

  const data = await response.json();

  return data;
}
*/