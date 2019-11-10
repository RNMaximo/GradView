import React from 'react';
import Popup from "reactjs-popup";

import './Subject.css';
import PopupSubject from "./PopupSubject/PopupSubject";
import * as Constants from '../constants';

import {Draggable} from 'react-beautiful-dnd';
import {getVisualCode} from "../../../Functions/SubjectCode/SubjectCode";
import * as colorConstans from "../colorConstants";
import Alert from "./Alert/Alert";
import PopupAlert from "./PopupAlert/PopupAlert";

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        visible: true,
        isDetailsOpen: false,
        isAlertOpen: false,
      };
  }
  openModal = () => {
    this.setState({ isDetailsOpen: true });
  };
  closeModal = () => {
    this.setState({ isDetailsOpen: false });
  };
  openAlertModal = () => {
    this.setState({ isAlertOpen: true });
  };
  closeAlertModal = () => {
    this.setState({ isAlertOpen: false });
  };

  render() {
    const subject = this.props.subject;
    const opacity = this.props.opacity;

    let color = subject.color && this.props.coloredBy==="Random" ? subject.color : "#000";

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
      const TColor = colorConstans.TColor;
      const PColor = colorConstans.PColor;
      const LColor = colorConstans.LColor;
      const OColor = colorConstans.OColor;
      const DColor = colorConstans.DColor;
      const RestColor = colorConstans.RestColor;

      const TPercent = subject.vector.T/subject.vector.C*100;
      const PPercent = TPercent + subject.vector.P/subject.vector.C*100;
      const LPercent = PPercent + subject.vector.L/subject.vector.C*100;
      const OPercent = LPercent + subject.vector.O/subject.vector.C*100;
      const DPercent = OPercent + subject.vector.D/subject.vector.C*100;

      const T = TColor +", " + TColor+" "+TPercent +"%, ";
      const P = PColor +" "+ TPercent +"%, " + PColor +", " + PColor +" "+ PPercent +"%, ";
      const L = LColor +" "+ PPercent +"%, " + LColor +", " + LColor +" "+ LPercent +"%, ";
      const O = OColor +" "+ LPercent +"%, " + OColor +", " + OColor +" "+ OPercent +"%, ";
      const D = DColor +" "+ OPercent +"%, " + DColor +", " + DColor +" "+ DPercent +"%, ";
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

    const subjectCode = getVisualCode(subject.code);

    const visibleClass = this.state.visible ? "" : " lessVisible ";


    return (
      <React.Fragment>
        <div className={"subject-container"}>
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
                  className={"subject " + subject.code + visibleClass}
                  style={{...divStyle, ...sizeStyle}}
                  onMouseEnter={this.props.onMouseEnter}
                  onMouseLeave={this.props.onMouseLeave}
                >
                  <Alert
                    show={this.props.alert}
                    onClick={this.openAlertModal}
                  />
                  <span
                    style={textStyle}
                    onClick={this.openModal}
                  >{subjectCode}</span>
                </div>
              </div>
            )
            }
          </Draggable>

          <Popup
            open={this.state.isDetailsOpen}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <PopupSubject
              subject={subject}
              closeModal={this.closeModal}
            />
          </Popup>

          <Popup
            open={this.state.isAlertOpen}
            closeOnDocumentClick
            onClose={this.closeAlertModal}
          >
            <PopupAlert
              reason={this.props.reason}
              closeModal={this.closeAlertModal}
            />
          </Popup>
        </div>


      </React.Fragment>
    )
  }
}

export default Subject;