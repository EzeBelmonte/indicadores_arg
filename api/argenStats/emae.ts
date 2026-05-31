import type { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchExternal } from "../sources/utils";

interface EMAEResponse {
  success: boolean;
  data:{
    date: string;
    variations: {
      monthly: number;
      yearly: number;
      cycleTrend: number;
    };
  };
};


export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    
    const url = "https://argenstats.com/api/v1/economic-activity?view=current"

    const data = await fetchExternal<EMAEResponse>(url, "Error consultando API externa", {
      headers: {
        'x-api-key': process.env.ARGENSTATS_API_KEY as string,
      }
    });

    return res.status(200).json({
      success: data.success,
      date: data.data.date,
      monthly: data.data.variations.monthly,        // Variación respecto al mes anterior (desestacionalizado)
      yearly: data.data.variations.yearly,          // Interanual
      cycleTrend: data.data.variations.cycleTrend,  // Tendencia-circulo
    });

  } catch (error) {
    
    return res.status(500).json({
      error: "Error consultando ArgenStats",
      detail: error instanceof Error ? error.message : error,
    });

  }
}