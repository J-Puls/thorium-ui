import { useState, useEffect, useContext } from 'react';
import { MessageBoxContext } from '../../MessageBoxContext';

export const useMessageQueue = () => {
  const context = useContext(MessageBoxContext);
  const [messageQueue, setMessageQueue] = useState(context.messages);

  useEffect(() => {
    setMessageQueue(context.messages);
  }, [context]);
  return messageQueue;
};
export default useMessageQueue;
