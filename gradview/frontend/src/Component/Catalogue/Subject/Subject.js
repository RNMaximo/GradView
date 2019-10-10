import React from 'react';
import Popup from "reactjs-popup";

import './Subject.css';
import PopupSubject from "./PopupSubject/PopupSubject";

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const subject = this.props.subject;
    const opacity = this.props.opacity;

    const color = subject.color && this.props.coloredBy==="Random" ? subject.color : "#ffffff";

    const style = this.props.borderColored && this.props.coloredBy==="Random" ?
      {
        backgroundColor: "white",
        borderColor: color,
        borderWidth: "3px",
        opacity: opacity
      } :
      {
        backgroundColor: color,
        borderColor: "black",
        borderWidth: "1px",
        opacity: opacity
      };
    return (
      <React.Fragment>
        <div
          className={"subject " + subject.code}
          style={style}
          onClick={this.openModal}>
          <span>{subject.code}</span>
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <PopupSubject
            subject={subject}
            closeModal={this.closeModal}
          />
        </Popup>
      </React.Fragment>
    )
  }
}

export default Subject;