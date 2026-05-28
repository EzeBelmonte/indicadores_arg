import type { VercelRequest, VercelResponse } from "@vercel/node";
import { walletNames } from "./sources/constants/walletNames";


export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    
    const response = await fetch(
      "https://apidatos.com/route/resumen-tna"
    );

    const data = await response.json();

    // Le asigno un formato mas cómodo
    const wallets = data.map((wallet: any) => ({
      name: walletNames[wallet.alias] ?? wallet.alias,
      rate: wallet.tna,
      source: wallet.fuente,
      updatedAt: wallet.reference_day,
    }));

    res.setHeader(
      "Cache-Control",
      "s-maxage=3600, stale-while-revalidate"
    );

    res.status(200).json(wallets);

  } catch (error) {
    
    return res.status(500).json({
      error: "Error obteniendo datos de las billeteras",

      detail:
        error instanceof Error
          ? error.message
          : "Error desconocido",
    });

  }
}