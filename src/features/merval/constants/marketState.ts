export const marketStateMap: Record<
  string,
  {
    label: string;
    color: string;
  }
> = {
  REGULAR: {
    label: "ABIERTO",
    color: "text-green-500",
  },

  CLOSED: {
    label: "CERRADO",
    color: "text-red-500",
  },

  PRE: {
    label: "PRE-MARKET",
    color: "text-yellow-500",
  },

  POST: {
    label: "POST-MARKET",
    color: "text-blue-500",
  },
};