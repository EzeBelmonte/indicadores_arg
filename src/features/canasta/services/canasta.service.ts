import type { CanastaResponse } from "../types/canasta.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";

export const getCanasta = async(): Promise<CanastaResponse> => {

  const response = await apiFetcher<CanastaResponse>(
    "/api/argly/canasta",
    "Error obteniendo datos de la canasta básica"
  );

  return response;
 
}