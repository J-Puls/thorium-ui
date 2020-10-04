/* React */
import React from 'react';
/* Style */
import { linkStyle } from '../styles/linkStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
/* Hooks */
import { useTheme } from '../utils/hooks/useTheme';

export const Link = (props) => {
  const theme = useTheme();
  const text = { ...linkStyle, ...theme.link };
  if (props.useParentColor) text.color = 'inherit';

  return (
    <React.Fragment>
      {!props.asAnchor && ReactRouterDom && (
        <ReactRouterDom.Link
          {...mapPropsToAttrs(props, 'anchor')}
          to={props.to}
          rel='noreferrer noopener'
          style={text}
        >
          <strong>{props.children}</strong>
        </ReactRouterDom.Link>
      )}
      {(props.asAnchor || !ReactRouterDom) && (
        <a
          style={text}
          {...mapPropsToAttrs(props, 'anchor')}
          rel='noreferrer noopener'
        >
          <strong>{props.children}</strong>
        </a>
      )}
    </React.Fragment>
  );
};

export default Link;
