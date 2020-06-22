import React from "react";
import { ThoriumConsumer } from "../ThoriumContext";
import { codeStyle } from "../Styles";

export const Code = (props) => {
  return (
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
};

export default Code;
