import type { SalarioData } from "../types/salario.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


export const getSalario = async (): Promise<SalarioData> => {

  const response = await apiFetcher<{ data: SalarioData }>(

      "/api/argly/salario",
      "Error obteniendo datos del salario"
      
    );
  
    return response.data;
  
};