import { 
  MERVAL_TICKERS, BANK_TICKERS, ENERGY_TICKERS, INDUSTRIAL_TICKERS,
  TELECOM_TICKERS, FINANCIALMARKET_TICKERS,
} from "../constants/mervalTickers";
import type { MervalData } from "../types/merval.type";
import { apiFetcher } from "@/shared/lib/apiFetcher";


// Merval principales
export const getMerval = async (): Promise<MervalData[]> => {

  const params = new URLSearchParams({
    tickers: MERVAL_TICKERS.join(","),
  }).toString();

  const response = await apiFetcher<MervalData[]>(
    
    "/api/yahoo/merval",
    "Error obteniendo MERVAL",
    params
  );

  return response;

};

// Merval principales
export const getBankMerval = async (): Promise<MervalData[]> => {

  const params = new URLSearchParams({
    tickers: BANK_TICKERS.join(","),
  }).toString();

  const response = await apiFetcher<MervalData[]>(
    
    "/api/yahoo/merval",
    "Error obteniendo MERVAL",
    params
  );

  return response;

};

// Merval principales
export const getEnergyMerval = async (): Promise<MervalData[]> => {

  const params = new URLSearchParams({
    tickers: ENERGY_TICKERS.join(","),
  }).toString();

  const response = await apiFetcher<MervalData[]>(
    
    "/api/yahoo/merval",
    "Error obteniendo MERVAL",
    params
  );

  return response;

};

// Merval principales
export const getIndustrialMerval = async (): Promise<MervalData[]> => {

  const params = new URLSearchParams({
    tickers: INDUSTRIAL_TICKERS.join(","),
  }).toString();

  const response = await apiFetcher<MervalData[]>(
    
    "/api/yahoo/merval",
    "Error obteniendo MERVAL",
    params
  );

  return response;

};

// Merval principales
export const getTelecomMerval = async (): Promise<MervalData[]> => {

  const params = new URLSearchParams({
    tickers: TELECOM_TICKERS.join(","),
  }).toString();

  const response = await apiFetcher<MervalData[]>(
    
    "/api/yahoo/merval",
    "Error obteniendo MERVAL",
    params
  );

  return response;

};

// Merval principales
export const getFinancialMerval = async (): Promise<MervalData[]> => {

  const params = new URLSearchParams({
    tickers: FINANCIALMARKET_TICKERS.join(","),
  }).toString();

  const response = await apiFetcher<MervalData[]>(
    
    "/api/yahoo/merval",
    "Error obteniendo MERVAL",
    params
  );

  return response;

};
