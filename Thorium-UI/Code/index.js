import React from "react";
import { ThoriumConsumer } from "../ThoriumContext";
import { codeStyle } from "../Styles";

const Code = props => {
  return (
    <ThoriumConsumer>
      {context => {
        return (
          <code
            style={{
              ...codeStyle,
              backgroundColor: context.theme.codeblock.backgroundColor
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
