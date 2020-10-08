import { useEffect, useState } from "react";

export const useViewportSize = () => {
  const [width, setWidth] = useState(globalThis.innerWidth);
  const [height, setHeight] = useState(globalThis.innerHeight);

  const updateWidth = () => setWidth(globalThis.innerWidth);
  const updateHeight = () => setHeight(globalThis.innerHeight);
  const updateSize = (prevW, newW, prevH, newH) => {
    prevW !== newW && updateWidth();
    prevH !== newH && updateHeight();
  };

  const handleResize = () => {
    updateSize(width, globalThis.innerWidth, height, globalThis.innerHeight);
  };
  useEffect(() => {
    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);
  return { width, height };
};

export default useViewportSize;
