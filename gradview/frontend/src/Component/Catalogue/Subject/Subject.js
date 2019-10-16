import React from 'react';
import Popup from "reactjs-popup";

import './Subject.css';
import PopupSubject from "./PopupSubject/PopupSubject";

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        open: false,
        visible: true
      };
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
    const opacity = this.state.visible ? this.props.opacity : 0.2;

    const color = subject.color && this.props.coloredBy==="Random" ? subject.color : "#000";

    const divStyle = ! this.props.borderColored && this.props.coloredBy==="Random" ?
      {
        backgroundColor: color,
        borderColor: "transparent",
        borderWidth: "1px",
        opacity: opacity
      } :
      {
        backgroundColor: "white",
        borderColor: color,
        borderWidth: "3px",
        opacity: opacity
      };
    const textStyle = ! this.props.borderColored && this.props.coloredBy==="Random" ?
      {
        color: "white"
      } :
      {
        color: "black"
      };
    return (
      <React.Fragment>
        <div
          className={"subject " + subject.code}
          style={divStyle}
          onClick={this.openModal}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}

        >
          <span style={textStyle}>{subject.code}</span>
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