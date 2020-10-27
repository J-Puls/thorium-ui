import { useEffect, useState } from "react";

export const useViewportSize = () => {
  const [dimensions, setDimensions] = useState({
    width: globalThis.innerWidth,
    height: globalThis.innerHeight
  });

  const handleResize = () => {
    setDimensions({
      width: globalThis.innerWidth,
      height: globalThis.innerHeight
    });
  };

  useEffect(() => {
    globalThis.addEventListener("resize", handleResize);
    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);
  return dimensions;
};

export default useViewportSize;
