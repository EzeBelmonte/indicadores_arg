import { lastCompleteYears } from "@/helpers";
import type { RiesgoPaisActualData, RiesgoPaisAnteriorData, RiesgoPaisHistorialData} from "../types/RiesgoPais.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";

const years = lastCompleteYears(2);

export const getRiesgoPaisActual = async (): Promise<RiesgoPaisActualData> => {
  
  const response = await apiFetcher<{ data: RiesgoPaisActualData}>(

    "/api/argly/riesgoPais",
    "Error obteniendo datos del riesgo país actual"

  );

  return response.data;

};

export const getRiesgoPaisAnterior = async (): Promise<RiesgoPaisAnteriorData> => {

  const params = new URLSearchParams({
    anterior: "true"
  });

  const response = await apiFetcher<{ data: RiesgoPaisAnteriorData}>(

    "/api/argly/riesgoPais",
    "Error obteniendo datos del riesgo país anterior",
    params.toString()

  );

  return response.data;
};

export const getRiesgoPaisHistorial = async (): Promise<RiesgoPaisHistorialData[]> => {

  const params = new URLSearchParams({
    desde: years.from,
    hasta: years.to,
  });
  
  const response = await apiFetcher<{ data: RiesgoPaisHistorialData[]}>(

    "/api/argly/riesgoPais",
    "Error obteniendo datos del riesgo país anterior",
    params.toString()

  );

  return response.data;

}