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

// Devuelve fechas desde la actual hasta X años atras
export const lastYears = (years: number ) => {

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // Cantidad de años a mostrar
  const YEARS_BACK = years;

  // Año inicial fijo durante todo el año actual
  const startYear = currentYear - YEARS_BACK;

  const from = `${startYear}-01`;
  const to = `${currentYear}-${String(currentMonth).padStart(2, "0")}`;

  return { 
    from, 
    to
  };

};

// Devuelve el nombre del mes
export const monthName = (dateString: string): string => {

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("es-AR", {
    month: "long"
  }).format(date);

};