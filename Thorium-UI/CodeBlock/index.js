/* React */
import React, { useState } from "react";
/* Thorium-UI */
import { Button, ThoriumConsumer } from "../";
/* Styles */
import { codeblockStyle } from "../Styles";
/* Utils */
import { codeParser, mapPropsToAttrs, copyToClipboard } from "../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  disableCopy: PropTypes.bool,
  disableSelect: PropTypes.bool,
  language: PropTypes.string,
};

const defaultProps = {
  disableCopy: false,
  disableSelect: false,
  language: null,
};

/**
 * A wrapper used to share any text that needs to retain a specific formatting
 */
export const CodeBlock = (props) => {
  const [text, setText] = useState("Copy");
  return (
    <ThoriumConsumer>
      {(context) => {
        /**
         * Copy the text contents to the device's clipboard
         */
        const handleCopyClick = () => {
          if (!context.isMobile) copyToClipboard(props.children, setText);
        };

        // Break down the style to its respective components
        const pre = { ...codeblockStyle.pre, ...context.theme.codeBlock };
        const code = codeblockStyle.code;
        const copyBtn = codeblockStyle.copyBtn;

        // Disable user text selection of specified
        if (props.disableSelect) code.userSelect = "none";
        return (
          <pre style={{ ...pre, ...props.style }} {...mapPropsToAttrs(props)}>
            {/* Add a copy button if not disabled */}
            {!props.disableCopy && !context.isMobile && (
              <Button
                size="sm"
                variant="link"
                onClick={() => handleCopyClick()}
                style={copyBtn}
              >
                {text}
              </Button>
            )}
            <code style={{ ...code, ...props.style }}>
              {codeParser(
                props.children,
                context.theme.colors.code,
                props.language
              )}
            </code>
          </pre>
        );
      }}
    </ThoriumConsumer>
  );
};

CodeBlock.propTypes = propTypes;
CodeBlock.defaultProps = defaultProps;
export default CodeBlock;
