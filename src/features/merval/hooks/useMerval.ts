import { useQuery } from "@tanstack/react-query";

import { getMerval } from "../services/meval.service";

export const useMerval = () => {

  return useQuery({
    queryKey: ["merval"],

    queryFn: getMerval,

    refetchInterval: 60000,

    staleTime: 30000,
  });
};