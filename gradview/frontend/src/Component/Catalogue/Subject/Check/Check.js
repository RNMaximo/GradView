import React from 'react';
import './Check.css';

class Check extends React.Component {

  render() {
    //const CHECK_MARK = "✓";
    const CHECK_MARK = "✔";
    return this.props.show ?
      <div
        className={"Check"}
        onClick={this.props.onClick}
      >{CHECK_MARK}</div>
    : null
  }
}

export default Check;