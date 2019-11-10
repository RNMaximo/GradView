import React from 'react';
import {getVisualCode} from "../../../../Functions/SubjectCode/SubjectCode";

class PopupAlert extends React.Component {
  render() {

    const realCodes = this.props.reason.map((code) => getVisualCode(code))
    const notCompleted = realCodes.join(", ");

    return (
      <React.Fragment>
        <div className="closePopup" onClick={this.props.closeModal}>
          &times;
        </div>
        <div>
          <p>Pré-requisitos não cumpridos: </p>
          <p>{notCompleted}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default PopupAlert;