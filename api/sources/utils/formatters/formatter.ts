import { formatIPCData } from "./ipc.formatter"


export const applyFormatter = (
  option: string,
  data: any
) => {

  // Diccionario para formatear data
  const formatters: Record<string, (data: any) => any> = {
    inflation: formatIPCData,
  } as const;

  // Formatear la data correspondiente
  const formatter = formatters[option as keyof typeof formatters];

  // Si no se dio formato, se retorna el original
  if (!formatter) {
    return data;
  }

  try {
    
    return formatter(data);
  
  } catch(error) {

    console.error(`Formatter error (${option})`, error);

    return data;

  }
  
}