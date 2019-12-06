import React from 'react';
import './Catalogue.css'
import Subject from './Subject/Subject';
import PrerequisiteLine from './PrerequisiteLine/PrerequisiteLine';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {getCleanCode, isPartialRequisite} from "../../Functions/SubjectCode/SubjectCode";
import VectorLegend from "./VectorLegend/VectorLegend";


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
    if (this.props.editing || this.props.onSearch) return;
    this.setVisibleToAllSubjects(false);
    this.setVisibleToAllPrereq(false);
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
    const subjects = {...this.subjects};
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
        r = getCleanCode(r);
        if (this.subjects[r]) {
          const req = from + "to" + r;
          if (this.prereq[req]) this.prereq[req].setState({onHover: boolean});
          this.subjects[r].setState({visible: boolean});
          const newRequisites = this.subjects[r].props.subject.requisitos;
          this.setVisibleToRequisites(r, newRequisites, boolean)
        }
        return r;
      });
    }
  };

  // Retorna Objeto {areCompleted: bool, reasons: [strings]}
  arePrerequisitesCompleted = (semesters, subjects, semesterId) => {
    let areCompleted = true;
    let reasons = [];

    for (let i in subjects) {
      const isComplete = this.isPrerequisitesCompleted(semesters, subjects[i], semesterId);
      areCompleted = areCompleted && isComplete;

      if (! isComplete) {
        reasons = [...reasons, subjects[i]]
      }
    }
    return {areCompleted: areCompleted, reasons: reasons}
  };

  isPrerequisitesCompleted = (semesters, subject, semesterId) => {
    subject = getCleanCode(subject);
    if (subject === "AA200") {
      return true
    }

    if (subject.substring(0, 3) === "AA4") {
      const cpNeeded = subject.substring(3,5);
      const currentCP = this.getCurrentCP(semesters, semesterId);
      return (currentCP >= cpNeeded/100);
    }

    for (let i in semesters) {
      if (parseInt(semesters[i].id,10) >= parseInt(semesterId,10)) {
        return false;
      }
      if (semesters[i].subjects.includes(subject)) {
        return true;
      }
    }
    return false;
  };

  getCurrentCP = (semesters, semesterId) => {
    let totalCredits = 0;
    for (let i in semesters) {
      if (parseInt(semesters[i].id,10) >= parseInt(semesterId,10)) {
        const currentCP = totalCredits / this.props.catalogueBySemester.totalCredits;
        return currentCP;
      }

      const subjects = semesters[i].subjects;
      for (let i in subjects) {
        const subject = subjects[i];
        const vector = this.props.catalogueBySemester.subjects[subject].vector;
        totalCredits += vector.C
      }
    }

    const currentCP = totalCredits / this.props.catalogueBySemester.totalCredits;
    return currentCP;
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
          const prereqInfo = this.arePrerequisitesCompleted(catalogueProps.semesters, subject.requisitos, semester.id);

          return (
            <Subject
              ref={(node) => this.subjects[subject.code]=node}
              key={subject.code + "_bt"}

              subject = {subject}
              opacity = {opacity}
              borderColored={this.props.borderColored}

              coloredByVector={this.props.coloredByVector}
              sizedByCredits={this.props.sizedByCredits}
              alert={! prereqInfo.areCompleted}
              reason={prereqInfo.reasons}

              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              index={index}
            />
          )
        });

        const className = this.props.editing ? " editing " : "";
        return (
          <div
            key={"semester "+ semester.id}
            className={"semester"}
          >
            <p className={"info"}><strong>{semester.id}º</strong> sem.</p>
            <Droppable
              key={"Semestre "+semester.id}
              droppableId={semestersId}
              direction={"horizontal"}
            >
              {(provided, snapshot) => (
                <div
                  key={"Semestre "+semester.id}
                  className={"subjects "+semester.id + className}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {subjectsBySemester}
                  {provided.placeholder}
                  <br/>
                </div>
              )}
            </Droppable>
          </div>
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
              const partial = isPartialRequisite(req);
              req = getCleanCode(req);

              // Não achou o div da disciplina
              if (! this.subjects[req] || ! this.subjects) {
                return null
              }

              return (
                <PrerequisiteLine
                  ref={(node) => this.prereq[subject.code + "to" + req]=node}
                  key={subject.code + "to" + req +"PL"}
                  from={subject}
                  to={this.props.catalogueBySemester.subjects[req]}
                  coloredByVector={this.props.coloredByVector}
                  editing={this.props.editing}
                  partial={partial}
                />
              )
            })
          }
          return reqLinesBySubject;
        });
        return reqBySemester
      });
    }

    const eletivasKeys = Object.keys(this.props.catalogueBySemester.eletivas);
    const eletivasData = this.props.catalogueBySemester.eletivas;
    const eletivas = (
      eletivasKeys.map((eletivaId) => {
        const subjects = eletivasData[eletivaId].subjects.map(subjectsId => catalogueProps.subjects[subjectsId]);
        if (! eletivasData[eletivaId].hasRestrictions) {
          return (
            <div
              key={"eletivas "+ eletivaId}
              className={"eletivas"}
            >
              <p className={"info"}><strong>{eletivasData[eletivaId].credits}</strong> créditos dentre:</p>
              <p className={"subjects"}>Qualquer disciplina da UNICAMP</p>
            </div>
          )
        }


        let creditsCounter = 0;
        const subjectsOptions = subjects.map((subject, index) => {
          let opacity = 1;
          if (subject.opacity) {
            opacity = subject.opacity;
          }
          if (subject.planned) {
            creditsCounter = creditsCounter + subject.vector.C;
          }
          return (
            <Subject
              ref={(node) => this.subjects[subject.code] = node}
              key={subject.code + "_bt"}

              subject={subject}
              opacity={opacity}
              borderColored={this.props.borderColored}
              isNotDraggable={subject.planned}

              coloredByVector={this.props.coloredByVector}
              sizedByCredits={false}
              alert={false}
              reason={[]}

              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}

              index={index}
            />
          )
        });
        return (
          <div
            key={"eletivas "+ eletivaId}
            className={"eletivas"}
          >
            <p className={"info"}><strong>{creditsCounter}/{eletivasData[eletivaId].credits}</strong> créditos dentre:</p>
            <Droppable
              key={"Eletivas "+eletivaId}
              droppableId={eletivaId}
              direction={"horizontal"}
              isDropDisabled
              renderClone
            >
              {(provided, snapshot) => (
                <div
                  key={"Eletivas "+eletivaId}
                  className={"subjects editing"}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {subjectsOptions}
                  {provided.placeholder}
                  <br/>
                </div>
              )}
            </Droppable>
          </div>
        );
      })
    );
    const removerClass = this.props.isRemoverDisable ? " disable " : "";
    const eletivasRemover = (
      <div className={"eletivas eletivas-remover " + removerClass}>
        <p><strong>REMOVER</strong></p>
        <Droppable
          key={"droppableRemover"}
          droppableId={"remover"}
          direction={"horizontal"}
          isDropDisabled={this.props.isRemoverDisable}
        >
          {(provided, snapshot) => (
            <div
              key={"eletivasRemover"}
              className={"droppable"}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
              <br/>
            </div>
          )}
        </Droppable>
      </div>
    );

    return (
      <React.Fragment>
        <div style={{height: '40px'}}>
          {this.props.coloredByVector ? <VectorLegend/> : null}
        </div>
        <DragDropContext
          onDragEnd={this.props.onDragEnd}
          onDragStart={this.props.onDragStart}
        >
          {this.props.showeletivas ?
            <div>
              <strong>Eletivas:</strong>
              {eletivas}
              {eletivasRemover}
            </div>
            :
            <div style={{display: 'none'}}>
              <strong>Eletivas:</strong>
              {eletivas}
            </div>}
          <div className="Catalogue">
            {semesters}
            <div className={"PrereqLines"}>
              {prereqLines}
            </div>
          </div>

        </DragDropContext>
      </React.Fragment>
    )
  }
}

export default Catalogue;