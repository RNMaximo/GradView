import React from 'react';
import {getVisualCode} from "../../../../Functions/SubjectCode/SubjectCode";
import Popup from "reactjs-popup";

class PopupAlert extends React.Component {
  render() {

    const realCodes = this.props.reason.map((code) => getVisualCode(code))
    const notCompleted = realCodes.join(", ");

    return (
      <Popup
        open={this.props.open}
        onClose={this.onClose}
        {...this.props}
      >
        <div className="closePopup" onClick={this.props.onClose}>
          &times;
        </div>
        <div>
          <p>Pré-requisitos não cumpridos: </p>
          <p>{notCompleted}</p>
        </div>
      </Popup>
    )
  }
}

export default PopupAlert;