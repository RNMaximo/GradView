import React from 'react';
import Popup from "reactjs-popup";
import './Alert.css';
import {getVisualCode} from "../../../../Functions/SubjectCode/SubjectCode";

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        open: false,
      };
  }

  openModal = () =>  {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const realCodes = this.props.reason.map((code) => getVisualCode(code))
    const notCompleted = realCodes.join(", ");

    const alert =
      <React.Fragment>
        <div
          className={"Alert"}
          onClick={this.openModal}
          onMouseEnter={()=> console.log(this.props.reason)}
        >!</div>

        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="closePopup" onClick={this.closeModal}>
            &times;
          </div>
          <div>
            <p>Pré-requisitos não cumpridos: </p>
            <p>{notCompleted}</p>
          </div>
        </Popup>
      </React.Fragment>;
    return this.props.show ? alert : null
  }
}

export default Alert;