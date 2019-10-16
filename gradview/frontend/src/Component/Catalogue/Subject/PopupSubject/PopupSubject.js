import React from 'react';
import './PopupSubject.css';

class PopupSubject extends React.Component {
  render() {
    const subject = this.props.subject;
    const requisitos = subject.requisitos ? subject.requisitos.join(', ') : "Nenhum"
    return (
      <div className={"PopupSubject"}>
        <div className="closePopup" onClick={this.props.closeModal}>
          &times;
        </div>
        <p><strong>Nome:</strong> {subject.name}</p>
        <p><strong>Código:</strong> {subject.code}</p>
        <p><strong>Créditos:</strong> {subject.vector.C}</p>
        <p><strong>Ementa:</strong> {subject.ementa}</p>
        <p><strong>Requisitos:</strong> {requisitos}</p>
      </div>
    )
  }
}

export default PopupSubject;