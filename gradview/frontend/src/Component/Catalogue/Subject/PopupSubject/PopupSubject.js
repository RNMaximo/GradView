import React from 'react';
import './PopupSubject.css';
import {getVisualCode} from "../../../../Functions/SubjectCode/SubjectCode";

class PopupSubject extends React.Component {
  render() {
    const subject = this.props.subject;
    const requisitesCodes = subject.requisitos ? subject.requisitos.map((r) => {return getVisualCode(r)}) : null;
    const requisites = subject.requisitos ? requisitesCodes.join(', ') : "Nenhum";

    return (
      <div className={"PopupSubject"}>
        <div className="closePopup" onClick={this.props.closeModal}>
          &times;
        </div>
        <p><strong>Nome:</strong> {subject.name}</p>
        <p><strong>Código:</strong> {getVisualCode(subject.code)}</p>
        <p><strong>Créditos:</strong> {subject.vector.C}</p>
        <p><strong>Ementa:</strong> {subject.ementa}</p>
        <p><strong>Requisitos:</strong> {requisites}</p>
      </div>
    )
  }
}

export default PopupSubject;