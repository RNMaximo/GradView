import React from 'react';
import './Catalogue.css'
import Subject from './Subject/Subject';
import PrerequisiteLine from './PrerequisiteLine/PrerequisiteLine';

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
    const prereqLines = this.props.catalogueBySemester.map((sem) => {
      const prereqBySemester = sem.map((subject) => {
        let prereqLinesBySubject = null;
        if (subject.requisitos && subject.requisitos.length > 0) {
          prereqLinesBySubject = subject.requisitos.map((req) => {
            //TODO achar a req no array de disciplinas ao inves de mandar so seu nome
            return (
              <PrerequisiteLine
                key={subject.name + "to" + req}
                subject={subject}
                requisite={req}
              />
            )
          })
        }
        return prereqLinesBySubject;
      });
      return prereqBySemester
    });

    return (
      <div className="Catalogue">
        {catalogue}
        <div className={"PrereqLines"}>
          {prereqLines}
        </div>
      </div>
    )
  }
}

export default Catalogue;