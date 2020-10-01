import React, { useState, useContext } from 'react';
import { Block } from './Block';
import { messageStyle } from '../styles/messageStyle';
import { useTheme } from '../utils/hooks/useTheme';
// import { sleep } from '../utils/sleep';
import { MessageBoxContext } from '../context/MessageBoxContext';

export const Message = (props) => {
  // const parent = useContext(MessageBoxContext).parent;
  let thisMessage;
  const theme = useTheme().message[props.variant];
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = async () => {
    setIsVisible(false);
    // await sleep(350);
    // console.log(parent.props.children.delete(thisMessage));
  };

  const renderStyle = isVisible
    ? { ...messageStyle.general, ...messageStyle.visible }
    : { ...messageStyle.general, ...messageStyle.hidden };

  return (
    <Block
      data-testid='message'
      all={12}
      style={{ ...renderStyle, ...theme, ...props.style }}
      justify='center'
      ref={(el) => (thisMessage = el)}
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
