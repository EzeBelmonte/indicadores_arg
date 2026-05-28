export const apiFetcher = async <T>(
  url: string,
  errorMessage = "Error en la petición",
  params?: string,
): Promise<T> => {

  const res = await fetch(
    `${url}${params ? `?${params}` : ""}`
  );

  if (!res.ok) {
    throw new Error(errorMessage);
  }

  return res.json();

};