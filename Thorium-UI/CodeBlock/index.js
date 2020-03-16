import React, { useContext } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { codeblockStyle } from "../Styles";

const CodeBlock = props => {
  const context = useContext(ThoriumContext);
  const style = {...codeblockStyle}
  style.pre.backgroundColor = context.theme.codeblock.backgroundColor;

  return (
    <pre style={{ ...style.pre, ...props.style }} className={props.className}>
      <code style={{ ...style.code, ...props.style }}>{props.children}</code>
    </pre>
  );
};

export default CodeBlock;
