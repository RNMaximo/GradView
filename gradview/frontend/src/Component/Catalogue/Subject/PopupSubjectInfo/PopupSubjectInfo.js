import React from 'react';
import './PopupSubjectInfo.css';
import {getVisualCode, isEletiva} from "../../../../Functions/SubjectCode/SubjectCode";
import Popup from "reactjs-popup";

class PopupSubjectInfo extends React.Component {
  render() {
    const subject = this.props.subject;
    const requisitesCodes = subject.requisitos ? subject.requisitos.map((r) => {return getVisualCode(r)}) : null;
    const requisites = subject.requisitos ? requisitesCodes.join(', ') : "Nenhum";
    let code =  subject.code;
    if (isEletiva(subject.code)) {
      code = ""
    } else {
      code = getVisualCode(subject.code)
    }

    return (
      <Popup
        open={this.props.open}
        onClose={this.onClose}
        {...this.props}
      >
        <div className={"PopupSubject"}>
          <div className="closePopup" onClick={this.props.onClose}>
            &times;
          </div>
          <p><strong>Nome:</strong> {subject.name}</p>
          <p><strong>Código:</strong> {code}</p>
          <p><strong>Créditos:</strong> {subject.vector.C}</p>
          <p><strong>Ementa:</strong> {subject.ementa}</p>
          <p><strong>Requisitos:</strong> {requisites}</p>
        </div>
      </Popup>
    )
  }
}

export default PopupSubjectInfo;