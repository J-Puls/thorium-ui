import React from "react";
import Block from "../Block";
import Layer from "../Layer";

const Nav = props => {
  return (
    <Layer style={{ ...props.style }}>
      {props.small && (
        <Block justify="around" xs={6} sm={6} md={6} lg={4} xl={4}>
          {props.children}
        </Block>
      )}

      {props.large && (
        <Block justify="around" xs={8} sm={8} md={8} lg={6} xl={6}>
          {props.children}
        </Block>
      )}
      {!props.large && !props.small && (
        <Block justify="around">{props.children}</Block>
      )}
    </Layer>
  );
};

export default Nav;
