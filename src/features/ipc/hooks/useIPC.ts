import { useQuery } from "@tanstack/react-query";
import { getIPC, getIPCHistorial } from "../services/ipc.service";


export const useIPC = () => {
  return useQuery({

    queryKey: ["ipc", "dashboard"],
    queryFn: getIPC,

  });
};

export const useIPCHistorial = () => {
  return useQuery({

    queryKey: ["ipc", "historial"],
    queryFn: getIPCHistorial,

  });
};