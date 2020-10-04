/* React */
import React, { Fragment } from 'react';
/* Hooks */
import { useMessageQueue } from '../context/hooks/messageBox/useMessageQueue';

export const MessageRenderer = () => {
  const messageQueue = useMessageQueue();
  return <Fragment>{messageQueue}</Fragment>;
};

export default MessageRenderer;
