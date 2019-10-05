import React from 'react';
import './Catalogue.css'
import Subject from './Subject/Subject';

class Catalogue extends React.Component {
  render() {
    const rowStyle = { margin: '20px', display: 'inherit', padding: "10px", justifyContent: 'space-between', };

    const catalogue = this.props.catalogueBySemester.map((sem, semId) => {
      const subjectsBySemester = sem.map((subject) => {
        return (
          <Subject
            key={subject.name + "_bt"}
            subject = {subject}
            />

        )
      });

      return (
        <div
          key={"Semestre "+semId}
          className={"Semestre "+semId}
          style={rowStyle}>
          {subjectsBySemester}
          <br/>
        </div>
      )
    });

    return (
      <div className="Catalogue">
        {catalogue}
      </div>
    )
  }
}

export default Catalogue;