export interface MervalData {
  shortName: string;	                // Nombre corto de la empresa
  symbol: string;                   	// Ticker	Alta
  regularMarketPrice: number;	        // Precio actual
  regularMarketChange: number;	      // Cambio nominal en plata
  regularMarketChangePercent: number;	// Cambio en porcentaje %
  regularMarketOpen: number;	        // Precio de apertura
  regularMarketPreviousClose: number; // Precio de cierre
  regularMarketDayHigh: number;	      // Precio máximo del día
  regularMarketDayLow: number;	      // Precio mínimo del día
  regularMarketVolume: number;	      // Volumen operado (Cantidad de acciones operadas)
  marketCap: number;	                // Capitalización bursátil (Valor total de la empresa)
  fiftyTwoWeekHigh: number;	          // Máximo 52 semanas
  fiftyTwoWeekLow: number;	          // Mínimo 52 semanas
  marketState: string;	              // Mercado abierto/cerrado
  currency: string;                   // Tipo de moneda
};