import { useQuery } from "@tanstack/react-query";
import { getDolar } from "../services/dolar.service";

export const useDolar = () => {

  return useQuery({
    queryKey: ["dolar"],

    queryFn: getDolar,

    refetchInterval: 60000,
  });
};