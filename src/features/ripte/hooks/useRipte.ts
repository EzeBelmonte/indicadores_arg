import { useQuery } from "@tanstack/react-query";
import { getRipte } from "../services/ripte.service";


export const useRipte = () => {

  return useQuery({

    queryKey: ["ripte"],

    queryFn: getRipte,
  
  });
};