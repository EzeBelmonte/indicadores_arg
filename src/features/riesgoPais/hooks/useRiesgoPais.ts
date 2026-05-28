import { useQuery } from "@tanstack/react-query";

import {
  getRiesgoPaisActual,
  getRiesgoPaisAnterior,
} from "../services/riesgoPais.service";

export const useRiesgoPais = () => {

  return useQuery({
    queryKey: ["riesgoPais"],

    queryFn: async () => {

      const [current, previous] = await Promise.all([
        getRiesgoPaisActual(),
        getRiesgoPaisAnterior(),
      ]);

      return {
        current: current,
        previous: previous,
      };
    },

    refetchInterval: 60000,
  });
};