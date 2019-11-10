import React from "react";
import Switch from "react-switch";

import './SwitchButton.css';

class SwitchButton extends React.Component {

  render() {
    return (
      <label className={"SwitchButton"}>
        <span>{this.props.text}</span>
        <Switch onChange={this.props.onChange} checked={this.props.checked} />
      </label>
    )
  }
}

export default SwitchButton;