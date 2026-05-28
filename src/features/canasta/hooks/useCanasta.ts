import { useQuery } from "@tanstack/react-query";
import { getCanasta } from "../services/canasta.service";


export const useCanasta = () => {
  return useQuery({
    queryKey: ["canasta"],

    queryFn: async () => {

      const res = await getCanasta();

      return res.data;

    },
  });
};