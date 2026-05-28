import type { MervalData } from "../types/merval.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


export const getMerval = async (): Promise<MervalData[]> => {

  const response = await apiFetcher<MervalData[]>(
    
    "/api/yahoo/merval",
    "Error obteniendo MERVAL"

  );

  return response;

};

/* 
import type { MervalData } from "../types/merval.type";

export const getMerval = async (): Promise<MervalData[]> => {

  const response = await fetch("/api/yahoo/merval");

  if (!response.ok) {
    throw new Error("Error obteniendo MERVAL");
  }

  const data = await response.json();

  return data;
};
*/