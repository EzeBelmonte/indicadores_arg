import { lastMonths, lastYears } from "@/helpers/formatterDate.helper";
import type { IPCData } from "../types/ipc.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


// Indicamos cuantos meses quiero ver (1 = un mes, 2 = dos meses, etc...)
const months = lastMonths(3);


// Indicamos cuantos años queremos ver (4 = desde la fecha actual hasta 4 años completos atras, etc...)
const years = lastYears(4);

export const getUltimosMesesIPC = async (): Promise<IPCData[]> => {

  const params = new URLSearchParams({
    desde: months.from,
    hasta: months.to,
  });

  const response = await apiFetcher<{ data: IPCData[] }>(

    "/api/argly/ipc",
    "Error obteniendo datos del IPC",
    params.toString(),
    
  );

  return response.data;

};

export const getUltimosAniosIPC = async (): Promise<IPCData[]> => {

  const params = new URLSearchParams({
    desde: years.from,
    hasta: years.to,
  });

const response = await apiFetcher<{ data: IPCData[] }>(

    "/api/argly/ipc",
    "Error obteniendo datos del IPC",
    params.toString()
    
  );

  return response.data;
  
};