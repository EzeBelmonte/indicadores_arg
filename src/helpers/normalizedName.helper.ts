export const normalizedName = (name: string) => {

  const normalized = name
    .normalize("NFD") // separa letras y acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina acentos
    .toLowerCase() // minúsculas
    .replace(/[^a-z0-9]/g, ""); // elimina espacios y signos
  
  return normalized;
}
