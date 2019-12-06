import React from 'react';

import './Legend.css';

class Legend extends React.Component {
  render() {
    return (
      <div className={"legend"}>
        <div className={"color"} style={{backgroundColor: this.props.color}}/>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Legend;