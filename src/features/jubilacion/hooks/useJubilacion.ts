import { useQuery } from "@tanstack/react-query";
import { getJubilacion } from "../services/jubilacion.service";


export const useJubilacion = () => {
  
  return useQuery({
    queryKey: ["jubilaciones"],

    queryFn: getJubilacion,
  
  });
};