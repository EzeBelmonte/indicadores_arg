import { useQuery } from "@tanstack/react-query";
import { getBilleteras } from "../services/billetera.service";


export const useBilletera = () => {

  return useQuery({
    queryKey: ["billeteras"],
    
    queryFn: getBilleteras,

    refetchInterval: 60000,

    staleTime: 30000,
  });
};