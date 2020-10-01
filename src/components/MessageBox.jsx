import React, { Component, createRef } from 'react';
import { Layer } from './Layer';
import { MessageBoxProvider } from '../context/MessageBoxContext';

class MessageBox extends Component {
  constructor() {
    super();
    this.messageBox = createRef();
  }

  componentDidMount() {
    console.log(this.messageBox.current);
  }
  render() {
    return (
      <MessageBoxProvider value={{ parent: this.messageBox.current }}>
        <Layer
          vertical
          data-testid='message-box'
          style={{ margin: '15px' }}
          ref={this.messageBox}
        >
          {this.props.children}
        </Layer>
      </MessageBoxProvider>
    );
  }
}

export default MessageBox;
