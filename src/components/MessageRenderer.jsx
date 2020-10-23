/* React */
import React from "react";
/* Hooks */
import { useMessageQueue } from "../hooks/messageBox/useMessageQueue";

export const MessageRenderer = () => {
  const messageQueue = useMessageQueue();
  return <React.Fragment>{messageQueue}</React.Fragment>;
};

export default MessageRenderer;
