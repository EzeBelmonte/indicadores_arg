export const percentFormatter = (value: number) => {

  return new Intl.NumberFormat("es-AR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: "always",
  }).format(value);

};