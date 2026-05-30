import type { VercelRequest, VercelResponse } from "@vercel/node";

import YahooFinance from "yahoo-finance2";


const yahooFinance = new YahooFinance({
  suppressNotices: ["yahooSurvey"],
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  try {

    const tickersParam = req.query.tickers;

    const tickers =
      typeof tickersParam === "string"
        ? tickersParam.split(",")
        : [];

    const data = await Promise.all(

      tickers.map((ticker) => 
        yahooFinance.quote(ticker)
      )
    );

    return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({
      error: "Error obteniendo datos del MERVAL",

      detail:
        error instanceof Error
          ? error.message
          : "Error desconocido",
    });
    
  }
}