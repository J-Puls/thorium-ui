import { useContext, useState, useEffect } from 'react';
import { ThoriumContext } from '../context/ThoriumContext';
import { useThemeName } from '../utils/useThemeName';
import { themes } from '../themes';

export const useTheme = () => {
  const context = useContext(ThoriumContext);
  const themeName = useThemeName();
  const [theme, setTheme] = useState(context.theme);

  useEffect(() => {
    setTheme(themes[themeName]);
  }, [themeName]);
  return theme;
};
export default useTheme;
