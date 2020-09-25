/* React */
import React, { Fragment } from 'react';
/* Style */
import { linkStyle } from '../styles/linkStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
/* Hooks */
import { useTheme } from '../utils/useTheme';

export const Link = (props) => {
  const theme = useTheme().link;
  const text = { ...linkStyle, ...theme };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Link;
