import React from "react";
import { ThoriumConsumer } from "../ThoriumContext";
import { codeblockStyle } from "../Styles";

const CodeBlock = props => {
  return (
    <ThoriumConsumer>
      {context => {
        const pre = { ...codeblockStyle.pre, ...context.theme.codeblock };
        const code = codeblockStyle.code;
        return (
          <pre style={{ ...pre, ...props.style }} className={props.className}>
            <code style={{ ...code, ...props.style }}>{props.children}</code>
          </pre>
        );
      }}
    </ThoriumConsumer>
  );
};

export default CodeBlock;
