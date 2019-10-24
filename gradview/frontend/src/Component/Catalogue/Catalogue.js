import React from 'react';
import './Catalogue.css'
import Subject from './Subject/Subject';
import PrerequisiteLine from './PrerequisiteLine/PrerequisiteLine';
import {DragDropContext, Droppable} from "react-beautiful-dnd";

class Catalogue extends React.Component {
  state={
    hasMountSubjects: false,
    catalogueIsOnHover: false,

    onDragging: false,
  };
  subjects={}
  prereq={}

  componentDidMount() {
    this.setState({hasMountSubjects: true})
  }
  handleMouseEnter = (event) => {
    if (this.props.editing) return;
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
    this.setVisibleToAllPrereq(false)
  };

  setVisibleToAllSubjects = (boolean) => {
    const subjects = {...this.subjects}
    for (let key in subjects) {
      this.subjects[key].setState({visible: boolean});
    }
  };
  setVisibleToAllPrereq = (boolean) => {
    const prereq = {...this.prereq};
    if (!prereq) return;

    for (let key in prereq) {
      if (this.prereq[key]) this.prereq[key].setState({onHover: boolean});
    }
  };

  setVisibleToRequisites = (from, to, boolean) => {
    if (to) {
      to.map((r) => {
        if (this.subjects[r]) {
          const req = from + "to" + r
          if (this.prereq[req]) this.prereq[req].setState({onHover: boolean});
          this.subjects[r].setState({visible: boolean});
          const newRequisites = this.subjects[r].props.subject.requisitos;
          this.setVisibleToRequisites(r, newRequisites, boolean)
        }
        return r;
      });
    }
  };

  render() {
    const catalogueProps = this.props.catalogueBySemester;
    const semestersKeys = Object.keys(this.props.catalogueBySemester.semesters);

    const semesters = (
      semestersKeys.map((semestersId) => {
        const semester = catalogueProps.semesters[semestersId];
        const subjects = semester.subjects.map(subjectsId => catalogueProps.subjects[subjectsId]);

        const subjectsBySemester = subjects.map((subject, index) => {
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
              index={index}
            />
          )
        });

        const className = this.props.editing ? " editing " : ""
        return (
          <Droppable
            key={"Semestre "+semester.id}
            droppableId={semestersId}
            direction={"horizontal"}
          >
            {(provided, snapshot) => (
              <div
                key={"Semestre "+semester.id}
                className={"Semestre "+semester.id + className}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {subjectsBySemester}
                {provided.placeholder}
                <br/>
              </div>
            )}
          </Droppable>
        )
      })
    );

    let prereqLines = null;
    if (this.state.hasMountSubjects) {
      prereqLines = semestersKeys.map((semestersId) => {

        const semester = catalogueProps.semesters[semestersId];
        const subjects = semester.subjects.map(subjectsId => catalogueProps.subjects[subjectsId]);

        const reqBySemester = subjects.map((subject) => {
          let reqLinesBySubject = null;
          if (subject.requisitos && subject.requisitos.length > 0) {
            reqLinesBySubject = subject.requisitos.map((req) => {
              // Não achou o div da disciplina
              if (! this.subjects[req] || ! this.subjects) {
                return null
              }
              return (
                <PrerequisiteLine
                  ref={(node) => this.prereq[subject.code + "to" + req]=node}
                  key={subject.code + "to" + req+"PL"}
                  from={subject}
                  to={this.props.catalogueBySemester.subjects[req]}
                  coloredBy={this.props.coloredBy}
                  editing={this.props.editing}
                />
              )
            })
          }
          return reqLinesBySubject;
        });
        return reqBySemester
      });
    }

    return (
      <DragDropContext
        onDragEnd={this.props.onDragEnd}
        onDragStart={this.props.onDragStart}
      >
        <div className="Catalogue">
          {semesters}
          <div className={"PrereqLines"}>
            {prereqLines}
          </div>
        </div>

      </DragDropContext>
    )
  }
}

export default Catalogue;