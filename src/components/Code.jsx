/* React */
import React from 'react';
/* Style */
import { codeStyle } from '../styles/codeStyle';
/* Hooks */
import { useTheme } from '../hooks/thoriumRoot/useTheme';

export const Code = (props) => {
  const theme = useTheme();
  return (
    <code data-testid='code' style={{ ...codeStyle, ...theme.code }}>
      {props.children}
    </code>
  );
};

export default Code;
