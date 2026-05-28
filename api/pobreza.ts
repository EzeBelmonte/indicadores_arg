import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as cheerio from "cheerio";


export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  try {
    // URL DEL INDEC
    const url = "https://www.indec.gob.ar/Nivel3/Tema/4/46";

    // Obtener HTML
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    // Convertimos en texto el HTML
    const html = await response.text();

    // Cargar HTML en cheerio
    const $ = cheerio.load(html);

    // Buscar div que contenga estas clases
    const bloques = $(".indicadores-inicio.shadow.bg-white.rounded.p-4.text-center");
    
    // Dentro del bloque encontrado, busco el siguiente div/divs que tengan las clases indicadas
    const indicadores = bloques.find(".col-md-3.col-centered");

    let hogares = 0;
    let poblacion = 0;

    // Aca se recorre "indicadores" que representa al div que contiene la clase previamente indicada
    // elemento: representa cada etiqueta del html: div, section, ect...
    indicadores.each((_, element) => {
      // Guardamos en la constante el elemento que tiene la clase "font-2"
      const titulo = $(element)
        .find(".font-2")
        .text()
        .trim();

      // Guardamos en la constante el elemento que tiene las clases ".font-1.mt-1.mb-1"
      const valor = $(element)
        .find(".font-1.mt-1.mb-1")
        .text()
        .trim();

      // Como el resultado es un string del tipo "10.00%", se le quita el % y se convierte en número
      const parsePorcentaje = (value: string) =>
        Number(value.replace("%", "").replace(",", "."));

      // Verificar cada titulo para guardarlo en el lugar que corresponda el porcentaje
      if (titulo.includes("Hogares bajo la línea de pobreza")) {
        hogares = parsePorcentaje(valor);
      }

      if (titulo.includes("Población bajo la línea de pobreza")) {
        poblacion = parsePorcentaje(valor);
      }
    });

    // Respuesta JSON
    return res.status(200).json({
      hogares,
      poblacion,
    });
    
  } catch (error) {
    
    return res.status(500).json({
      error: "Error obteniendo datos de pobreza",

      detail:
        error instanceof Error
          ? error.message
          : "Error desconocido",
    });

  }

}