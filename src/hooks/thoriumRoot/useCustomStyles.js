import { useState, useContext, useEffect } from "react";
import { ThoriumContext } from "../../context/ThoriumContext";

export const useCustomStyles = () => {
  const context = useContext(ThoriumContext);
  const [customStyles, setCustomStyles] = useState(context.customStyles);

  useEffect(() => {
    setCustomStyles(context.customStyles);
  }, [context.customStyles]);
  return customStyles;
};
export default useCustomStyles;
