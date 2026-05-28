import type { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchExternal, sendResponse } from "../sources/utils";


export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {

    const option = "riesgo-pais";

    const { anterior } = req.query;

    const searchParams = new URLSearchParams();

    if (anterior === "true") {
      searchParams.append("anterior", "true");
    }

    const query = searchParams.toString();

    const url = `https://api.argly.com.ar/v1/${option}${
      query ? `?${query}` : ""
    }`;

    const data = await fetchExternal(url, "Error consultando API externa");

    return sendResponse(res, data);
  } catch (error) {

    return res.status(500).json({
      error: "Error consultando Argly",
      detail: error instanceof Error ? error.message : error,
    });

  };
};