/* React */
import React, { Fragment } from 'react';
/* Hooks */
import { useMessageQueue } from '../hooks/messageBox/useMessageQueue';

export const MessageRenderer = () => {
  const messageQueue = useMessageQueue();
  return <Fragment>{messageQueue}</Fragment>;
};

export default MessageRenderer;
