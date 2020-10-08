import { useState, useEffect } from "react";

const getTouchStatus = () =>
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

export const useTouchStatus = () => {
  const [isTouch, setIsTouch] = useState(getTouchStatus());

  useEffect(() => {
    setIsTouch(getTouchStatus());
  }, [navigator.maxTouchPoints, navigator.msMaxTouchPoints]);

  return isTouch;
};

export default useTouchStatus;
