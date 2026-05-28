import type { RipteData } from "../types/ripte.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";

type RipteResponse = {
  success: boolean;
  data: [string, number][];
};


export const getRipte = async (): Promise<RipteData[]> => {

  const response = await apiFetcher<RipteResponse>(

    "/api/ripte",
    "Error obteniendo RIPTE"
    
  );

  return response.data.map(([fecha, value]) => ({
    fecha,
    value,
  }));

};