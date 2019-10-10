import React from 'react';
import './Catalogue.css'
import Subject from './Subject/Subject';
import PrerequisiteLine from './PrerequisiteLine/PrerequisiteLine';

class Catalogue extends React.Component {
  state={
    hasMountSubjects:false
  };
  componentDidMount() {
    this.setState({hasMountSubjects: true})
  }

  render() {
    const rowStyle = { margin: '20px', display: 'inherit', padding: "10px", justifyContent: 'space-between', };

    const catalogue = this.props.catalogueBySemester.map((sem, semId) => {
      const subjectsBySemester = sem.map((subject) => {
        let opacity = 1;
        if (subject.opacity) {
          opacity = subject.opacity;
        }
        return (
          <Subject
            key={subject.code + "_bt"}
            subject = {subject}
            opacity = {opacity}
            borderColored={this.props.borderColored}
            coloredBy={this.props.coloredBy}
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

    let prereqLines = null;
    if (this.state.hasMountSubjects) {
      prereqLines = this.props.catalogueBySemester.map((sem) => {
        const prereqBySemester = sem.map((subject) => {
          let prereqLinesBySubject = null;
          if (subject.requisitos && subject.requisitos.length > 0) {
            prereqLinesBySubject = subject.requisitos.map((req) => {
              //TODO achar a req no array de disciplinas ao inves de mandar so seu nome
              return (
                <PrerequisiteLine
                  key={subject.code + "to" + req}
                  subject={subject}
                  requisite={req}
                  coloredBy={this.props.coloredBy}
                />
              )
            })
          }
          return prereqLinesBySubject;
        });
        return prereqBySemester
      });
    }

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