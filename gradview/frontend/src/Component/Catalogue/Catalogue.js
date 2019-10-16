import React from 'react';
import './Catalogue.css'
import Subject from './Subject/Subject';
import PrerequisiteLine from './PrerequisiteLine/PrerequisiteLine';

class Catalogue extends React.Component {
  state={
    hasMountSubjects:false,
    catalogueIsOnHover: false,
  };
  subjects={}
  prereq={}

  componentDidMount() {
    this.setState({hasMountSubjects: true})
  }
  handleMouseEnter = (event) => {
    this.setVisibleToAllSubjects(false)
    this.setVisibleToAllPrereq(false)
    const subjectClassName = event.currentTarget.classList[1];
    const requisites = this.subjects[subjectClassName].props.subject.requisitos;
    this.subjects[subjectClassName].setState({visible: true});
    this.setVisibleToRequisites(subjectClassName, requisites, true)
    this.setState({catalogueIsOnHover: true})
  };
  handleMouseLeave = (event) => {
    this.setVisibleToAllSubjects(true)
    this.setVisibleToAllPrereq(true)
  };

  setVisibleToAllSubjects = (boolean) => {
    const subjects = {...this.subjects}
    for (let key in subjects) {
      this.subjects[key].setState({visible: boolean});
    }
  };
  setVisibleToAllPrereq = (boolean) => {
    const prereq = {...this.prereq}
    for (let key in prereq) {
      this.prereq[key].setState({visible: boolean});
    }
  };

  setVisibleToRequisites = (from, to, boolean) => {
    if (to) {
      to.map((r) => {
        console.log(from + "to" + r)
        this.prereq[from + "to" + r].setState({visible: boolean});
        this.subjects[r].setState({visible: boolean});
        const newRequisites = this.subjects[r].props.subject.requisitos;
        this.setVisibleToRequisites(r, newRequisites, boolean)
      });
    }
  };


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
            ref={(node) => this.subjects[subject.code]=node}
            key={subject.code + "_bt"}
            subject = {subject}
            opacity = {opacity}
            borderColored={this.props.borderColored}
            coloredBy={this.props.coloredBy}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            />
        )
      });

      return (
        <div
          key={"Semestre "+semId}
          className={"Semestre "+semId}
          style={rowStyle}
        >
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
              if (subject.code in this.subjects) {
                console.log(this.subjects[subject.code].state.notOnHover)
              }
              return (
                <PrerequisiteLine
                  ref={(node) => this.prereq[subject.code + "to" + req]=node}
                  key={subject.code + "to" + req}
                  subject={subject}
                  opacity = {this.subjects[subject.code].props.opacity}
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