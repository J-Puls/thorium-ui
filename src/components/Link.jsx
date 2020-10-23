/* React */
import React from "react";
/* Style */
import { linkStyle } from "../styles/linkStyle";
/* Utils */
import mapPropsToAttrs from "../utils/mapPropsToAttrs";
/* Hooks */
import { useTheme } from "../hooks/thoriumRoot/useTheme";
/* PropTypes */
import PropTypes from "prop-types";

const propTypes = {
  useParentColor: PropTypes.bool
};
const defaultProps = {
  useParentColor: false
};

export const Link = (props) => {
  const theme = useTheme();
  const style = { ...linkStyle, ...theme.link };
  if (props.useParentColor) style.color = "inherit";

  const genericProps = {
    ...mapPropsToAttrs(props, "anchor"),
    className: props.className ? props.className : "th-link",
    "data-testid": "th-link",
    rel: "noreferrer noopener",
    style
  };

  return (
    <React.Fragment>
      {!props.asAnchor && ReactRouterDom && (
        <ReactRouterDom.Link {...genericProps} to={props.to}>
          <strong>{props.children}</strong>
        </ReactRouterDom.Link>
      )}
      {(props.asAnchor || !ReactRouterDom) && (
        <a {...genericProps}>
          <strong>{props.children}</strong>
        </a>
      )}
    </React.Fragment>
  );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
export default Link;
