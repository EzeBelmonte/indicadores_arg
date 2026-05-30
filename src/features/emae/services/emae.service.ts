import type { EMAEData } from "../types/emae.types";
import { apiFetcher } from "@/shared/lib/apiFetcher";


export const getEMAE = async (): Promise<EMAEData> => {

  const response = await apiFetcher<EMAEData>(

    "api/argenStats/emae",
    "Error obteniendo datos de EMAE"

  );

  return response;
  
}