// Devuelve la fecha como la conocemos normalmente en Argentina
export const formatNormalDate = (iso: string) =>

  new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

// Devuelve fechas desde la actual hasta X meses atras
export const lastMonths = (mouthsAgo: number) => {

  const currentDate  = new Date();

  const monthsAgo = new Date();
  monthsAgo.setMonth(monthsAgo.getMonth() - mouthsAgo);

  const from = `${monthsAgo.getFullYear()}-${String(monthsAgo.getMonth() + 1).padStart(2, "0")}`;
  const to = `${currentDate .getFullYear()}-${String(currentDate .getMonth() + 1).padStart(2, "0")}`;
  
  return {
    from,
    to
  };

};

// Devuelve fechas AAAA-MM
export const lastYears = (years: number ) => {

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  return {
    from: `${currentYear - years}-01`,
    to: `${currentYear}-${String(currentMonth).padStart(2, "0")}`,
  };

};

// Devuelve fechas AAAA-MM-DD
export const lastCompleteYears = (years: number) => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  return {
    from: `${currentYear - years}-01-01`,
    to: currentDate.toISOString().slice(0, 10),
  };
};

// Devuelve el nombre del mes
export const monthName = (dateString: string): string => {

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("es-AR", {
    month: "long"
  }).format(date);

};