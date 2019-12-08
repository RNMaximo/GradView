import React from 'react';

import './Subject.css';

import {Draggable} from 'react-beautiful-dnd';

import Alert from "./Alert/Alert";
import PopupSubjectInfo from "./PopupSubjectInfo/PopupSubjectInfo";
import PopupAlert from "./PopupAlert/PopupAlert";

import {getVisualCode, isEletiva} from "../../../Functions/SubjectCode/SubjectCode";
import Check from "./Check/Check";
import {getLinearGradColors} from "../../../Functions/Colors/catalogueColors";


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

    let color = subject.color ? subject.color : "#000";

    let divStyle;

    if (! this.props.borderColored && !this.props.coloredByVector) {
      divStyle =
        {
          backgroundColor: color,
          borderColor: "transparent",
          borderWidth: "1px",
          opacity: opacity
        }
    }
    else if (! this.props.borderColored && this.props.coloredByVector) {
      const linearGradColors = getLinearGradColors(subject.vector);

      divStyle =
        {
          background: "-webkit-linear-gradient(left, "+ linearGradColors + ")",
          opacity: opacity
        }
    }
    else {
      divStyle =
        {
          backgroundColor: "white",
          borderColor: color,
          borderWidth: "4px",
          opacity: opacity
        };
    }
    if (subject.planned && ! this.props.isNotDraggable) {
      divStyle =
        {
          ...divStyle,
          borderColor: "#000",
          borderWidth: "4px",
        }
    }

    const sizeStyle = this.props.sizedByCredits ?
      {
        width: 35*subject.vector.C+'px',
      } :
      {};

    let textStyle = {color: "black"};
    if (! this.props.borderColored && !this.props.coloredByVector) {
      textStyle = {color: "white"};
    } else if (! this.props.borderColored && this.props.coloredByVector) {
      textStyle = {color: "white"};
    }

    const subjectCode = isEletiva(subject.code) ? "ELE("+subject.vector.C+")": getVisualCode(subject.code);

    const visibleClass = this.state.visible ? "" : " lessVisible ";

    const creditsScale = this.state.onHover && this.props.sizedByCredits ?
      <div className={"scale"}>
        <p style={{margin: '0', padding: '0'}}>{subject.vector.C}</p>
      </div> : null;

    return (
      <React.Fragment>
        <div className={"subject-container " + (this.props.sizedByCredits ? " margin1" : "")}>
          {this.props.isNotDraggable ?
            <div
              title={subject.name}
              className={"subject " + visibleClass + " planned"}
              style={{...divStyle, ...sizeStyle}}
            >
              <Check
                show={true}
              />
              <span
                style={textStyle}
                onClick={this.openModal}
              >{subjectCode}</span>
            </div>
            :
            <Draggable
              key={subject.code}
              draggableId={subject.code}
              index={this.props.index}
              style={{margin: 1}}
            >
              {(provided, snapshot) => (
                <div
                  key={this.props.id}
                  className={"draggable " + subject.code}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  onMouseEnter={() => this.setState({onHover: true})}
                  onMouseLeave={() => this.setState({onHover: false})}
                >
                  <div
                    title={subject.name}
                    className={"subject " + subject.code + visibleClass}
                    style={{...divStyle, ...sizeStyle}}
                    onMouseEnter={this.props.onMouseEnter}
                    onMouseLeave={this.props.onMouseLeave}
                  >
                    {creditsScale}
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
          }

          <PopupSubjectInfo
            open={this.state.isDetailsOpen}
            closeOnDocumentClick
            onClose={this.closeModal}
            subject={subject}
          />

          { this.props.alert?
            <PopupAlert
              open={this.state.isAlertOpen}
              closeOnDocumentClick
              onClose={this.closeAlertModal}
              reason={this.props.reason}
            /> : null }
        </div>
      </React.Fragment>
    )
  }
}

export default Subject;