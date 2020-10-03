/* React */
import React, { forwardRef, useState } from 'react';
/* Thorium-UI */
import { Layer } from './Layer';
/* Context */
import { MessageBoxProvider } from '../context/MessageBoxContext';

const MessageBox = forwardRef(function ThMessageBox(props, ref) {
  const children = new Set();
  props.children.forEach((child, ind) => {
    children.add(React.cloneElement(child, { messageID: ind, key: ind }));
  });

  const [messages, setMessages] = useState(children);

  const removeMessage = (ID) => {
    let newMessages = new Set(messages);
    for (let message of messages) {
      console.log(message.props.messageID, ID);
      message.props.messageID === ID && newMessages.delete(message);
    }
    setMessages(newMessages);
  };

  return (
    <MessageBoxProvider
      value={{
        messages,
        removeMessage: (ID) => removeMessage(ID)
      }}
    >
      <Layer
        vertical
        data-testid='message-box'
        style={{ margin: '15px' }}
        ref={ref}
      >
        {messages}
      </Layer>
    </MessageBoxProvider>
  );
});

export default MessageBox;
