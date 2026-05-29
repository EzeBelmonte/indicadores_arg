import { useRef, useState } from "react";

export function useHorizontalDragScroll() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);

    startX.current =
      e.pageX - scrollRef.current.offsetLeft;

    scrollLeft.current =
      scrollRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();

    const x =
      e.pageX - scrollRef.current.offsetLeft;

    const walk = (x - startX.current) * 1.5;

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