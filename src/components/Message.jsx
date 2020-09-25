import React, { useState } from 'react';
import { Block } from './Block';
import { messageStyle } from '../styles/messageStyle';
import { useTheme } from '../utils/hooks/useTheme';

export const Message = (props) => {
  const theme = useTheme().message[props.variant];
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => setIsVisible(false);

  return (
    <Block
      data-testid='message'
      all={12}
      style={{
        ...messageStyle.general,
        ...theme,
        display: isVisible ? 'flex' : 'none',
        ...props.style
      }}
      justify='center'
    >
      <span style={{ paddingRight: '1rem' }}>{props.children}</span>
      <button
        onClick={handleClose}
        style={{ ...messageStyle.button, color: theme.color }}
      >
        &#128473;
      </button>
    </Block>
  );
};

export default Message;
