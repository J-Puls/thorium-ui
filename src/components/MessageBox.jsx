import React from 'react';
import { Layer } from './Layer';

export const MessageBox = (props) => {
  return (
    <Layer vertical data-testid='message-box' style={{ margin: '15px' }}>
      {props.children}
    </Layer>
  );
};

export default MessageBox;
