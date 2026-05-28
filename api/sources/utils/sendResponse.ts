import type { VercelResponse } from "@vercel/node";

export const sendResponse = <T>(res: VercelResponse, data: T, status = 200) => {
  
  return res.status(status).json(data);
  
};