import { useState, useContext, useEffect } from 'react';
import { ThoriumContext } from '../context/ThoriumContext';

export const useViewportSizeName = () => {
  const context = useContext(ThoriumContext);
  const [sizeName, setSizeName] = useState(context.viewportSizeName);
  useEffect(() => {
    setSizeName(context.viewportSizeName);
  }, [context.viewportSizeName]);

  return sizeName;
};

export default useViewportSizeName;
