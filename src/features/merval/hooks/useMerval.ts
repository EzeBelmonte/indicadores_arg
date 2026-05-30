import { useQuery } from "@tanstack/react-query";

import { 
  getMerval, 
  getBankMerval, 
  getEnergyMerval, 
  getIndustrialMerval,
  getTelecomMerval,
  getFinancialMerval,
  getRealEstateAgroMerval,
  getHoldingMerval,
} from "../services/meval.service";

export const useMerval = () => {

  return useQuery({
    
    queryKey: ["merval"],

    queryFn: getMerval,

    refetchInterval: 60000,

    staleTime: 30000,
  });
};

const sanitize = <T,>(arr: (T | null | undefined)[]): T[] =>
  arr.filter((item): item is T => item != null);

export const useMervalSector = () => {

  return useQuery({

    queryKey: ["merval", "historial"],

    queryFn: async () => {

      const [
        bankMerval, energyMerval, industrialMerval, 
        telecomMerval, financialMerval, realEstateAgro,
        holding,
      ] = await Promise.all([
        getBankMerval(),
        getEnergyMerval(),
        getIndustrialMerval(),
        getTelecomMerval(),
        getFinancialMerval(),  
        getRealEstateAgroMerval(),
        getHoldingMerval(),
      ]);

      return [
        {
          name: "BANCOS",
          data: sanitize(bankMerval),
        },
        {
          name: "ENERGÍA",
          data: sanitize(energyMerval),
        },
        {
          name: "INDUSTRIAL",
          data: sanitize(industrialMerval),
        },
        {
          name: "TELECOM",
          data: sanitize(telecomMerval),
        },
        {
          name: "FINANCIERO",
          data: sanitize(financialMerval),
        },
                {
          name: "REAL ESTATE Y AGRO",
          data: sanitize(realEstateAgro),
        },
                {
          name: "HOLDING Y CONGLOMERADOS",
          data: sanitize(holding),
        },
      ]

    },

    refetchInterval: 60000,

  });
};