import { useContext, useState, useEffect } from 'react';
import { ThoriumContext } from '../../context/ThoriumContext';

export const useRouterEnabledStatus = () => {
  const context = useContext(ThoriumContext);
  const [hasRouterEnabled, setHasRouterEnabled] = useState(
    context.hasRouterEnabled
  );

  useEffect(() => {
    setHasRouterEnabled(context.hasRouterEnabled);
  }, [context.hasRouterEnabled]);
  return hasRouterEnabled;
};
export default useRouterEnabledStatus;
