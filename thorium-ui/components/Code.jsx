/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../";
/* Style */
import { codeStyle } from "../styles";

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
