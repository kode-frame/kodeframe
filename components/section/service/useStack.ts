import { useEffect, useState } from "react";

export function useStack(length: number, interval = 3000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((i) => (i + 1) % length),
      interval
    );

    return () => clearInterval(id);
  }, [length, interval]);

  return activeIndex;
}