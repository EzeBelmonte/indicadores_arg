export const fetchExternal = async <T>(
  url: string,
  errorMessage = "Error en API externa",
  options?: RequestInit
): Promise<T> => {

  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(errorMessage);
  }

  return res.json();
};