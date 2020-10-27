import { useState, useLayoutEffect } from "react";
import { useViewportSize } from "../thoriumRoot/useViewportSize";
import { breakpoints } from "../../config";

export const useViewportSizeName = () => {
  const viewportSize = useViewportSize();

  const getSizeName = () => {
    for (const [key, val] of Object.entries(breakpoints)) {
      if (viewportSize.width >= val[0] && viewportSize.width < val[1]) {
        return key;
      }
    }
  };
  const [sizeName, setSizeName] = useState(getSizeName());

  useLayoutEffect(() => {
    setSizeName(getSizeName());
  }, [viewportSize.width]);

  return sizeName;
};

export default useViewportSizeName;
