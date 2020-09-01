/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../context/ThoriumContext";
/* Style */
import { codeStyle } from "../styles/codeStyle";

export const Code = (props) => (
  <ThoriumConsumer>
    {(context) => {
      return (
        <code
          data-testid="code"
          style={{
            ...codeStyle,
            ...context.theme.code,
          }}
        >
          {props.children}
        </code>
      );
    }}
  </ThoriumConsumer>
);

export default Code;
