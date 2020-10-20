import { useState, useEffect } from "react";
import { breakpoints } from "../../config";
import { updateViewportSizeName } from "../../utils/updateViewportSizeName";

export const useViewportSizeName = () => {
  const [sizeName, setSizeName] = useState(
    updateViewportSizeName(globalThis.innerWidth)
  );

  useEffect(() => {
    for (const [key, val] of Object.entries(breakpoints)) {
      const match =
        globalThis.innerWidth > val[0] && globalThis.innerWidth <= val[1];

      match && setSizeName(key);
    }
  }, [globalThis.innerWidth]);

  return sizeName;
};

export default useViewportSizeName;
