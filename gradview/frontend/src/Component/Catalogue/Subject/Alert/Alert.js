import React from 'react';
import './Alert.css';

class Alert extends React.Component {
  render() {
    return this.props.show ?
      <div
        className={"Alert"}
        onClick={this.props.onClick}
      >!</div>
    : null
  }
}

export default Alert;