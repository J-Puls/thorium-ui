import { useState, useLayoutEffect, useContext } from "react";
import { NavContext } from "../../context/NavContext";

export const useNavType = () => {
  const context = useContext(NavContext);
  const [type, setType] = useState(context.type);

  useLayoutEffect(() => {
    setType(context.type);
  }, [context.type]);

  return type;
};
export default useNavType;
