import { useQuery } from "@tanstack/react-query";
import { getPobreza } from "../services/pobreza.service";


export const usePobreza = () => {

  return useQuery({

    queryKey: ["pobreza"],

    queryFn: getPobreza,

  });
};