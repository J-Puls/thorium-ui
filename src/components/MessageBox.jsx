/* React */
import React, { useState, useEffect, forwardRef } from 'react';
/* Thorium-UI */
import { Layer } from './Layer';
import { Message } from './Message';
import { MessageRenderer } from './MessageRenderer';
/* Context */
import { MessageBoxProvider } from '../context/MessageBoxContext';
/* Style */
import { messageBoxStyle } from '../styles/messageBoxStyle';
/* PropTypes */
import PropTypes from 'prop-types';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func.isRequired
};

const defaultProps = {
  onRemove: () =>
    console.warn(
      `MessageBox 'onRemove' prop has not been assigned a function.
Dismissed messages will not be accounted for in the MessageBoxContext message queue.`
    )
};

export const MessageBox = forwardRef(function ThMessageBox(props, ref) {
  const mapMessages = () => {
    if (!props.messages) return null;
    const toBeMapped = props.messages;
    const messages = new Set();
    for (let message of toBeMapped) {
      if (!message.props.isDismissed) {
        messages.add(
          <Message
            {...message.props}
            messageID={toBeMapped.indexOf(message)}
            key={toBeMapped.indexOf(message)}
            handleRemove={props.onRemove}
          />
        );
      }
    }
    return messages;
  };

  const [messages, setMessages] = useState(mapMessages());
  const [isActive, setIsActive] = useState(messages.size !== 0);

  useEffect(() => {
    setIsActive(messages.size === 0 ? false : true);
  }, [messages]);

  useEffect(() => {
    setMessages(mapMessages());
  }, [props.messages]);

  const renderStyle = isActive
    ? { ...messageBoxStyle.active }
    : { ...messageBoxStyle.inactive };

  const context = {
    messages,
    remove: (id) => props.onRemove(id)
  };
  return (
    <MessageBoxProvider value={context}>
      <Layer vertical data-testid='message-box' style={renderStyle} ref={ref}>
        <MessageRenderer />
      </Layer>
    </MessageBoxProvider>
  );
});

MessageBox.defaultProps = defaultProps;
MessageBox.propTypes = propTypes;
export default MessageBox;
