import type { BilleteraData } from "../types/billetera.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


export const getBilleteras = async (): Promise<BilleteraData[]> => {

  const response = await apiFetcher<BilleteraData[]>(

    "/api/billetera",
    "Error obteniendo datos de las billeteras"

  );

  return response;

}