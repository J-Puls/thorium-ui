import { useState, useLayoutEffect, useContext } from "react";
import { NavContext } from "../../context/NavContext";

export const useNavVariant = () => {
  const context = useContext(NavContext);
  const [variant, setVariant] = useState(context.variant);

  useLayoutEffect(() => {
    setVariant(context.variant);
  }, [context.variant]);

  return variant;
};
export default useNavVariant;
