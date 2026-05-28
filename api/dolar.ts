import type { VercelRequest, VercelResponse } from '@vercel/node';
import { fetchExternal } from './sources/utils/fetchExternal';
import { sendResponse } from './sources/utils/sendResponse';


export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  try {
   
    const url = "https://dolarapi.com/v1/dolares";

    const data = await fetchExternal(url, "Error consultando API externa");

    return sendResponse(res, data);

  } catch (error) {

    return res.status(500).json({
      error: "Error consultando Argly",
      detail: error instanceof Error ? error.message : error,

    });
  
  };
};