import React, { Fragment } from 'react';
import { ThoriumConsumer } from '../context/ThoriumContext';
import { linkStyle } from '../styles/linkStyle';
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
import { Link as RouterLink } from 'react-router-dom';

export const Link = (props) => {
  return (
    <ThoriumConsumer>
      {(context) => {
        const text = { ...linkStyle, ...context.theme.link };
        return (
          <Fragment>
            {context.hasRouterEnabled && props.asLink && (
              <RouterLink
                {...mapPropsToAttrs(props, 'anchor')}
                to={props.to}
                rel='noreferrer noopener'
                style={text}
              >
                <strong>{props.children}</strong>
              </RouterLink>
            )}
            {(props.asAnchor || !context.hasRouterEnabled || props.href) && (
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
      }}
    </ThoriumConsumer>
  );
};

export default Link;
