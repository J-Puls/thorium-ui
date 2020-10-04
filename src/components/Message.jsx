/* React */
import React, {
  useState,
  useLayoutEffect,
  forwardRef,
  useContext,
  Fragment
} from 'react';
/* Thorium-UI */
import { Block } from './Block';
import { Button } from './Button';
/* Style */
import { messageStyle } from '../styles/messageStyle';
/* Hooks */
import { useTheme } from '../utils/hooks/useTheme';
/* Utils */
import { sleep } from '../utils/sleep';
/* Context */
import { MessageBoxContext } from '../context/MessageBoxContext';
/* PropTypes */
import PropTypes, { node, string } from 'prop-types';

const propTypes = {
  messageID: PropTypes.number.isRequired,
  contents: PropTypes.oneOfType([string, node]),
  callToAction: PropTypes.object,
  title: PropTypes.string,
  isDismissed: PropTypes.bool,
  variant: PropTypes.oneOf([
    'danger',
    'dark',
    'light',
    'primary',
    'secondary',
    'success',
    'warning'
  ])
};

const defaultProps = {
  isDismissed: false,
  variant: 'primary'
};

export const Message = forwardRef(function ThMessage(props, ref) {
  const context = useContext(MessageBoxContext);
  const theme = useTheme().message[props.variant];
  const defaultStyle = {
    ...messageStyle.general,
    ...messageStyle.visible,
    ...theme,
    ...props.style
  };

  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [renderStyle, setRenderStyle] = useState(defaultStyle);

  const handleDismiss = async () => {
    setIsVisible(false);
    await sleep(300);
    setIsDismissed(true);
    context.remove(props.messageID);
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

  const callToAction = props.callToAction;
  return (
    <Block
      data-testid='message'
      all={12}
      style={renderStyle}
      justify='center'
      ref={ref}
      vertical
    >
      <div >
        {props.title && (
          <Fragment>
            <h3 style={messageStyle.title}>{props.title}</h3>
            <hr style={{ borderColor: theme.color }} />
          </Fragment>
        )}
        <span style={{ color: theme.color }}>{props.contents}</span>
        {callToAction && (
          <a
            href={callToAction.destination}
            rel='noopener noreferrer'
            target={callToAction.newTab ? '_blank' : null}
          >
            <Button
              variant={callToAction.variant}
              stretch={callToAction.stretch}
              onClick={callToAction.onClick}
            >
              {callToAction.text}
            </Button>
          </a>
        )}
      </div>

      <button
        onClick={handleDismiss}
        style={{ ...messageStyle.dismiss, color: theme.color }}
        title='dismiss'
      >
        &#128473;
      </button>
    </Block>
  );
});

Message.defaultProps = defaultProps;
Message.propTypes = propTypes;
export default Message;
