import type { PobrezaResponse } from "@/features/pobreza/types/pobreza.type";


export const formatPovertyData = (data: any): PobrezaResponse => {

  // Obtenemos los últimos datos
  const totals = data.data.filter(
    (item: any) =>
      item.region === "Total 31 aglomerados"
  );

  // Además la que tiene la fecha mas reciente
  const latest = totals.sort(
    (a: any, b: any) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )[0];

  return {

    success: data.success,

    data: {
      period: latest.period,
      semester: latest.semester,
      poverty: latest.poverty,

      indigence: latest.indigence,

    },

    metadata: {
      timestamp: data.metadata.timestamp,
      source: data.metadata.source
    }

  };
};