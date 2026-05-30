import { useQuery } from "@tanstack/react-query";
import { getEMAE } from "../services/emae.service";


export const useEmae = () => {

  return useQuery({

    queryKey: ["emae"],

    queryFn: getEMAE,

  });
}