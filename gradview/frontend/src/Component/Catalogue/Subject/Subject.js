import React from 'react';
import Popup from "reactjs-popup";

import './Subject.css';
import PopupSubject from "./PopupSubject/PopupSubject";
import * as Constants from '../constants';

import {Draggable} from 'react-beautiful-dnd';
import {getVisualCode} from "../../../Functions/SubjectCode/SubjectCode";

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
    const opacity = this.state.visible ? this.props.opacity : Constants.invisibleOpacity;

    let color = subject.color && this.props.coloredBy==="Random" ? subject.color : "#000";
    if (! this.state.visible) {
      color = Constants.invisibleColor;
    }
    let divStyle;

    if (! this.props.borderColored && this.props.coloredBy==="Random") {
      divStyle =
        {
          backgroundColor: color,
          borderColor: "transparent",
          borderWidth: "1px",
          opacity: opacity
        }
    }
    else if (! this.props.borderColored && this.props.coloredBy==="Credits") {
      const TColor = " rgb(86, 120, 189) ";
      const PColor = " rgb(212, 137, 102) ";
      const LColor = " rgb(176, 209, 85) ";
      const OColor = " rgb(146, 100, 203) ";
      const DColor = " rgb(90, 132, 157) ";
      const RestColor = " rgb(0, 0, 0) ";

      const TPercent = subject.vector.T/subject.vector.C*100;
      const PPercent = TPercent + subject.vector.P/subject.vector.C*100;
      const LPercent = PPercent + subject.vector.L/subject.vector.C*100;
      const OPercent = LPercent + subject.vector.O/subject.vector.C*100;
      const DPercent = OPercent + subject.vector.D/subject.vector.C*100;

      const T = TColor +"," + TColor + " "+TPercent +"%, ";
      const P = PColor + TPercent +"%, " + PColor +"," + PColor + PPercent +"%, ";
      const L = LColor + PPercent +"%, " + LColor +"," + LColor + LPercent +"%, ";
      const O = OColor + LPercent +"%, " + OColor +"," + OColor + OPercent +"%, ";
      const D = DColor + OPercent +"%, " + DColor +"," + DColor + DPercent +"%, ";
      const Rest = RestColor + DPercent +"%, " + RestColor;
      const linearGradColors = T + P + L + O + D + Rest;

      divStyle =
        {
          background: "-webkit-linear-gradient(left, "+ linearGradColors + ")",
          borderColor: "transparent",
          borderWidth: "1px",
          opacity: opacity
        }
    }
    else {
      divStyle =
        {
          backgroundColor: "white",
          borderColor: color,
          borderWidth: "3px",
          opacity: opacity
        };
    }


    const sizeStyle = this.props.sizedByCredits ?
      {
        width: 35*subject.vector.C+'px',
      } :
      {};

    let textStyle = {color: "black"};
    if (! this.props.borderColored && this.props.coloredBy==="Random") {
      textStyle = {color: "white"};
    } else if (! this.props.borderColored && this.props.coloredBy==="Credits") {
      textStyle = {color: "white"};
    }
    const alert = this.props.alert ? <div className={"Alert"}>!</div> : null;

    const subjectCode = getVisualCode(subject.code);
    return (

      <Draggable
        key={subject.code}
        draggableId={subject.code}
        index={this.props.index}
        style={{margin: 1}}
      >
        {(provided, snapshot) => (
          <div
            key={this.props.id}
            className={"draggable " + subject.code + (this.props.sizedByCredits ? " margin1" : "")}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              className={"subject " + subject.code}
              style={{...divStyle, ...sizeStyle}}
              onClick={this.openModal}
              onMouseEnter={this.props.onMouseEnter}
              onMouseLeave={this.props.onMouseLeave}
            >
              {alert}
              <span style={textStyle}>{subjectCode}</span>
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
          </div>
        )
        }
      </Draggable>
    )
  }
}

export default Subject;