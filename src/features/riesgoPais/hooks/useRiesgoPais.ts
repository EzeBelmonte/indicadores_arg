import { useQuery } from "@tanstack/react-query";

import {
  getRiesgoPaisActual,
  getRiesgoPaisAnterior,
  getRiesgoPaisHistorial,
} from "../services/riesgoPais.service";

export const useRiesgoPais = () => {

  return useQuery({
    queryKey: ["riesgoPais", "actual"],

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

export const useRiesgoPaisHistorial = () => {

  return useQuery({

    queryKey: ["riesgoPais", "historical"],
    queryFn: getRiesgoPaisHistorial,

  });
};