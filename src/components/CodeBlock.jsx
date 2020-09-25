/* React */
import React, { useState } from 'react';
/* Thorium-UI */
import Button from './Button';
/* Styles */
import { codeBlockStyle } from '../styles/codeBlockStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
import copyToClipboard from '../utils/copyToClipboard';
/* PropTypes */
import PropTypes from 'prop-types';
/* Hooks */
import { useMobileStatus } from '../utils/hooks/useMobileStatus';
import { useTheme } from '../utils/hooks/useTheme';

const propTypes = {
  disableCopy: PropTypes.bool,
  disableSelect: PropTypes.bool,
  language: PropTypes.string
};

const defaultProps = {
  disableCopy: false,
  disableSelect: false,
  language: null
};

/**
 * A wrapper used to share any text that needs to retain a specific formatting
 */
export const CodeBlock = (props) => {
  const isMobile = useMobileStatus();
  const theme = useTheme().codeBlock;
  const [text, setText] = useState('Copy');

  /**
   * Copy the text contents to the device's clipboard
   */
  const handleCopyClick = () => {
    if (!isMobile) copyToClipboard(props.children, setText);
  };

  // Break down the style to its respective components
  const pre = { ...codeBlockStyle.pre, ...theme };
  const code = codeBlockStyle.code;
  const copyBtn = codeBlockStyle.copyBtn;

  // Disable user text selection of specified
  if (props.disableSelect) code.userSelect = 'none';
  return (
    <pre style={{ ...pre, ...props.style }} {...mapPropsToAttrs(props)}>
      {/* Add a copy button if not disabled */}
      {!props.disableCopy && !isMobile && (
        <Button
          size='sm'
          variant='link'
          onClick={() => handleCopyClick()}
          style={copyBtn}
          wrapperStyle={{ display: 'block' }}
        >
          {text}
        </Button>
      )}
      <code style={{ ...code, ...props.style }}>{props.children}</code>
    </pre>
  );
};

CodeBlock.propTypes = propTypes;
CodeBlock.defaultProps = defaultProps;
export default CodeBlock;
