import { useState, useEffect } from "react";

const getMobileStatus = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};

export const useMobileStatus = () => {
  const [isMobile, setIsMobile] = useState(getMobileStatus());

  useEffect(() => {
    setIsMobile(getMobileStatus);
  }, [window.orientation, navigator.userAgent]);
  return isMobile;
};
export default useMobileStatus;
