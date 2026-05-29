import { useRef, useState } from "react";

export function useHorizontalDragScroll() {

  // Referencia al div que tiene scroll horizontal
  // Permite acceder al elemento HTML directamente
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Estado que indica si actualmente estamos arrastrando
  // el mouse sobre el contenedor
  const [isDragging, setIsDragging] = useState(false);
 
  // Guarda la posición X inicial del mouse cuando se hace click
  // useRef evita rerenders
  const startX = useRef(0);

  // Guarda el scrollLeft inicial del contenedor
  // al momento de empezar a arrastrar  
  const scrollLeft = useRef(0);

  // ============================
  // CLICK DEL MOUSE
  // ============================
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {

    // Si el div todavía no existe, salimos
    if (!scrollRef.current) return;

    // Indicamos que comenzó el drag
    setIsDragging(true);

    // Guardamos la posición horizontal inicial del mouse
    //
    // e.pageX: posición absoluta del mouse en la página
    //
    // offsetLeft: posición izquierda del div respecto al padre
    //
    // Esto nos da la posición relativa dentro del contenedor
    startX.current = e.pageX - scrollRef.current.offsetLeft;

    // Guardamos cuánto scroll horizontal tenía el div
    // antes de comenzar a arrastrar
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  // ============================
  // EL MOUSE SALE DEL DIV
  // ============================
  const onMouseLeave = () => {
    // Terminamos el drag
    setIsDragging(false);
  };

  // ============================
  // SE SUELTA EL CLICK
  // ============================
  const onMouseUp = () => {
    // Terminamos el drag
    setIsDragging(false);
  };

  // ============================
  // MOVIMIENTO DEL MOUSE
  // ============================
  const onMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    // Si no estamos arrastrando
    // o no existe el div, no hacemos nada
    if (!isDragging || !scrollRef.current) return;

    // Evita comportamiento por defecto del navegador
    // como selección de texto
    e.preventDefault();

    // Posición actual horizontal del mouse
    // relativa al contenedor
    const x = e.pageX - scrollRef.current.offsetLeft;

    // Distancia recorrida por el mouse
    //
    // Si el mouse va hacia la derecha: x aumenta
    //
    // Si va hacia la izquierda: x disminuye
    //
    // Multiplicamos por 1.5 para aumentar
    // la velocidad/sensibilidad del scroll
    const walk = (x - startX.current) * 1.5;

    // Actualizamos el scroll horizontal
    //
    // scrollLeft.current: scroll inicial
    //
    // walk: cuánto se movió el mouse
    //
    // Restamos para que el movimiento
    // se sienta natural
    scrollRef.current.scrollLeft =
      scrollLeft.current - walk;
  };

  return {
    scrollRef,
    isDragging,
    dragHandlers: {
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onMouseMove,
    },
  };
}