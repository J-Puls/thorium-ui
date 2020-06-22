/* React */
import React, { useState } from "react";
/* Thorium components */
import { Block, Button } from "../";
/* Context */
import { ThoriumConsumer } from "../ThoriumContext";
/* Styles */
import { codeblockStyle } from "../Styles";
/* Utils */
import { codeParser } from "../ThoriumUtils";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  disableCopy: PropTypes.bool,
  language: PropTypes.string,
};

const defaultProps = {
  disableCopy: false,
  language: null,
};

export const CodeBlock = (props) => {
  const [text, setText] = useState("Copy");
  return (
    <ThoriumConsumer>
      {(context) => {
        const handleClick = () => {
          if (!context.isMobile)
            try {
              navigator.clipboard
                .writeText(props.children.replace(/~>/g, "\t"))
                .then(setText("Copied to clipboard!"));
            } catch {
              navigator.clipboard
                .writeText(props.children.props.children)
                .then(setText("Copied to clipboard!"));
            }
        };
        const pre = { ...codeblockStyle.pre, ...context.theme.codeblock };
        const code = codeblockStyle.code;
        const copyBtn = codeblockStyle.copyBtn;
        return (
          <Block>
            <pre style={{ ...pre, ...props.style }} className={props.className}>
              {!props.disableCopy && !context.isMobile && (
                <Button
                  size="sm"
                  variant="link"
                  onClick={() => handleClick()}
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
          </Block>
        );
      }}
    </ThoriumConsumer>
  );
};

CodeBlock.propTypes = propTypes;
CodeBlock.defaultProps = defaultProps;
export default CodeBlock;
