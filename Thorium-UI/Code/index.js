/* React */
import React from "react";
/* ThoriumContext */
import { ThoriumConsumer } from "../";
/* Style */
import { codeStyle } from "../Styles";

export const Code = (props) => (
  <ThoriumConsumer>
    {(context) => {
      return (
        <code
          data-testid="code"
          style={{
            ...codeStyle,
            backgroundColor: context.theme.codeblock.backgroundColor,
            color: context.theme.colors.secondary,
          }}
        >
          {props.children}
        </code>
      );
    }}
  </ThoriumConsumer>
);

export default Code;
