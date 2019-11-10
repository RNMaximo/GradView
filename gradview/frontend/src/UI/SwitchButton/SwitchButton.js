import React from "react";
import Switch from "react-switch";

class SwitchButton extends React.Component {

  render() {
    return (
      <label style={{display: 'flex'}}>
        <span>{this.props.text}</span>
        <Switch onChange={this.props.onChange} checked={this.props.checked} />
      </label>
    )
  }
}

export default SwitchButton;