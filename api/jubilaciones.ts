import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const response = await fetch(
      'https://apis.datos.gob.ar/series/api/series?ids=58.1_MP_0_M_24&last=1'
    );

    if (!response.ok) {
      throw new Error('Error consultando datos.gob.ar');
    }

    const json = await response.json();

    const registro = json.data?.[0];

    if (!registro) {
      return res.status(404).json({
        error: 'No hay datos',
      });
    }

    const [fecha, jubilacionMinima] = registro;

    res.setHeader('Cache-Control', 's-maxage=3600');

    return res.status(200).json({
      fecha,
      jubilacionMinima,
    });
  } catch (error) {
    
    return res.status(500).json({
      error: "Error obteniendo datos de la jubilación mínima",

      detail:
        error instanceof Error
          ? error.message
          : "Error desconocido",
    });

  }
}