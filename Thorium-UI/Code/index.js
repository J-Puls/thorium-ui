import React, { useContext } from "react";
import ThoriumContext from "../ThoriumRoot/ThoriumContext";
import { codeStyle } from "../Styles";

const Code = props => {
  const context = useContext(ThoriumContext);
  const style = {
    ...codeStyle,
    backgroundColor: context.theme.codeblock.backgroundColor
  };
  return <code style={style}>{props.children}</code>;
};

export default Code;
