/* React */
import React, {
  useState,
  useLayoutEffect,
  forwardRef,
  useContext
} from 'react';
/* Thorium-UI */
import { Block } from './Block';
/* Style */
import { messageStyle } from '../styles/messageStyle';
/* Hooks */
import { useTheme } from '../utils/hooks/useTheme';
/* Utils */
import { sleep } from '../utils/sleep';
/* Context */
import { MessageBoxContext } from '../context/MessageBoxContext';

export const Message = forwardRef(function ThMessage(props, ref) {
  const removeMessage = useContext(MessageBoxContext).removeMessage;
  const theme = useTheme().message[props.variant];
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [renderStyle, setRenderStyle] = useState({
    ...messageStyle.general,
    ...messageStyle.visible,
    ...theme,
    ...props.style
  });

  const handleDismiss = async () => {
    setIsVisible(false);
    await sleep(300);
    setIsDismissed(true);
    removeMessage(props.messageID);
  };

  useLayoutEffect(() => {
    isVisible && setRenderStyle({ ...renderStyle, ...theme });
  }, [theme, isVisible]);
  useLayoutEffect(() => {
    !isVisible &&
      setRenderStyle({ ...messageStyle.general, ...messageStyle.hidden });
  }, [isVisible]);

  useLayoutEffect(() => {
    isDismissed && setRenderStyle({ ...messageStyle.dismissed });
  }, [isDismissed]);

  return (
    <Block
      data-testid='message'
      all={12}
      style={renderStyle}
      justify='center'
      ref={ref}
    >
      <span style={{ paddingRight: '1rem' }}>{props.children}</span>
      <button
        onClick={handleDismiss}
        style={{ ...messageStyle.button, color: theme.color }}
      >
        &#128473;
      </button>
    </Block>
  );
});

export default Message;
