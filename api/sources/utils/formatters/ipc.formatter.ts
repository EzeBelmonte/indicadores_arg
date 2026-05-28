import type { IPCResponse } from "@/features/ipc/types/ipc.type";


export const formatIPCData = (data: any): IPCResponse => {

  return {

    success: data.success,

    data: data.data.map((item: any) => ({
      
      date: item.date,

      values: {
        accumulated: item.values.accumulated,
        monthly: item.values.monthly
      }

    })),

    metadata: {
      timestamp: data.metadata.timestamp,
      source: data.metadata.source
    }

  };
};