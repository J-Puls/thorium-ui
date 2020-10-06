import { useContext, useState, useEffect } from "react";
import { ThoriumContext } from "../../context/ThoriumContext";

export const useMobileStatus = () => {
  const context = useContext(ThoriumContext);
  const [isMobile, setIsMobile] = useState(context.isMobile);

  useEffect(() => {
    setIsMobile(context.isMobile);
  }, [context.isMobile]);
  return isMobile;
};
export default useMobileStatus;
