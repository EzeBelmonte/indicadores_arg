import { useQuery } from "@tanstack/react-query";
import { getUltimosMesesIPC, getUltimosAniosIPC } from "../services/ipc.service";


export const useMesesIPC = () => {
  return useQuery({

    queryKey: ["ipc", "dashboard"],
    queryFn: getUltimosMesesIPC,

  });
};

export const useAniosIPC = () => {
  return useQuery({

    queryKey: ["ipc", "historical"],
    queryFn: getUltimosAniosIPC,

  });
};