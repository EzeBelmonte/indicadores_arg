// Devuelve la cantidad monetaria como la conocemos en Argentina
export const formatPrice = (value: number) => {

  return new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

};

// Devuelve la cantidad monetaria compacta: millon = m, billon = b, etc
export const formatCompactPrice = (
  value: number
) => {

  return new Intl.NumberFormat("es-AR", {
    notation: "compact",

    maximumFractionDigits: 2,
  }).format(value);

};