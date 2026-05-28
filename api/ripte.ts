import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    
    const url = "https://apis.datos.gob.ar/series/api/series/?ids=158.1_REPTE_0_0_5&last=12&metadata=none";

    const response = await fetch(url);

    const json = await response.json();

    return res.status(200).json({
      data: json.data
    });

  } catch (error) {

    return res.status(500).json({
      
      error: "Error obteniendo datos del RIPTE",

      detail:
        error instanceof Error
          ? error.message
          : "Error desconocido",
    });

  }
}