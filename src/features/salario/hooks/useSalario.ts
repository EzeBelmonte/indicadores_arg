import { useQuery } from "@tanstack/react-query";
import { getSalario } from "../services/salario.service";


export const useSalario = () => {
  return useQuery({

    queryKey: ["salario"],
    
    queryFn: getSalario,

  });
};