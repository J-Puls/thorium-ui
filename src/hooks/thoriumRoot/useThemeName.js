import { useContext, useState, useEffect } from 'react';
import { ThoriumContext } from '../../context/ThoriumContext';
export const useThemeName = () => {
  const context = useContext(ThoriumContext);
  const [themeName, setThemeName] = useState(context.themeName);
  useEffect(() => {
    setThemeName(context.themeName);
  }, [context.themeName]);

  return themeName;
};
export default useThemeName;
