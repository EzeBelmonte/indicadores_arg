import type { RiesgoPaisActualData, RiesgoPaisAnteriorData} from "../types/RiesgoPais.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


export const getRiesgoPaisActual = async (): Promise<RiesgoPaisActualData> => {
  
  const response = await apiFetcher<{ data: RiesgoPaisActualData}>(

    "/api/argly/riesgoPais",
    "Error obteniendo datos del riesgo país actual"

  );

  return response.data;

};

export const getRiesgoPaisAnterior = async (): Promise<RiesgoPaisAnteriorData> => {

  const response = await apiFetcher<{ data: RiesgoPaisAnteriorData}>(

    "/api/argly/riesgoPais",
    "Error obteniendo datos del riesgo país anterior",
    "true"

  );

  return response.data;
};

