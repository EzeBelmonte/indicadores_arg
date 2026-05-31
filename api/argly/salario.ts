import type { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchExternal } from '../sources/utils/fetchExternal.js';
import { sendResponse } from '../sources/utils/sendResponse.js';


export default async function handler(
  _req: VercelRequest,
  res: VercelResponse
) {
  try {
    
    const option = "smvm"

    const url = `https://api.argly.com.ar/v1/${option}`;

    const data = await fetchExternal(url, "Error consultando API externa");

    return sendResponse(res, data);

  } catch (error) {

    return res.status(500).json({
      error: "Error consultando Argly",
      detail: error instanceof Error ? error.message : error,
    });

  };
};