import React from "react";
import { ThoriumConsumer } from "../";
import { linkStyle } from "../Styles";
import { mapPropsToAttrs } from "../ThoriumUtils";
import { Link as RouterLink } from "react-router-dom";

export const Link = (props) => {
  let link;
  const handleClick = () => {
    link.click();
    props.onClick && props.onClick();
  };

  return (
    <ThoriumConsumer>
      {(context) => {
        const wrapper = {
          ...linkStyle.wrapper,
          ...context.theme.link.wrapper,
        };
        const text = { ...linkStyle.text, ...context.theme.link.text };
        return (
          <th-link onClick={handleClick} style={wrapper}>
            {context.hasRouterEnabled && props.asLink && (
              <RouterLink
                {...mapPropsToAttrs(props, "anchor")}
                to={props.to}
                rel="noreferrer noopener"
                ref={(el) => (link = el)}
                style={text}
              >
                <strong>{props.children}</strong>
              </RouterLink>
            )}
            {(props.asAnchor || !context.hasRouterEnabled || props.href) && (
              <a
                style={text}
                {...mapPropsToAttrs(props, "anchor")}
                ref={(el) => (link = el)}
                rel="noreferrer noopener"
              >
                <strong>{props.children}</strong>
              </a>
            )}
          </th-link>
        );
      }}
    </ThoriumConsumer>
  );
};

export default Link;
