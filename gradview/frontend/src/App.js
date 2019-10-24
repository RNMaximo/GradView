import React from 'react';
import './App.css';
import catalogueComp from './Component/Catalogue/catalogueComp.js';
import Catalogue from './Component/Catalogue/Catalogue';
import SearchInput from "./Component/Catalogue/SearchInput/SearchInput";

import rgbMeanColor from './Functions/Colors/rgbMeanColor';
import * as Constants from "./Component/Catalogue/constants";

var randomColor = require('randomcolor');

class App extends React.Component {
  state = {
    catalogue: catalogueComp,
    borderColored: false,
    shouldChangeColor: true,
    coloredBy: "Random",
    editing: false,
    persistentEditing: false,
  };
  catalogue = React.createRef();

  componentDidMount() {
    const catalogueSem = this.state.catalogue;
    if (! this.state.isColored) {
      const coloredCatalogue = this.initializeRandomColors(catalogueSem);
      this.setState({shouldChangeColor: false})
      this.setState({catalogue: {semesters: catalogueSem.semesters, subjects: coloredCatalogue}})
    }
  }

  initializeNoColors = (catalogueSem) => {
    const borderColored=this.state.borderColored
    const catalogue = this.state.catalogue.slice();
    const color = borderColored ? '#000000' : '#ffffff';
    const coloredCatalogue = catalogue.map((disc) => {
      const ret = {...disc, color: color};
      return (ret)
    });
    return coloredCatalogue
  };

  initializeRandomColors = () => {
    let coloredSubjects =[];
    const semesters = Object.keys(this.state.catalogue.semesters)

    for (let i in semesters) {
      const thisSemester = this.state.catalogue.semesters[semesters[i]];
      coloredSubjects = this.colorSemester (coloredSubjects, thisSemester);
    }
    return coloredSubjects;
  };

  colorSemester = (catalogue, sem) => {
    let subjectsAsObject = this.state.catalogue.subjects;
    const subjectsAsArray = Object.values(subjectsAsObject)
    let subjectsToColor = sem.subjects.map(subjectsId => this.state.catalogue.subjects[subjectsId]);

    for (let i in subjectsToColor) {
      let subject = subjectsToColor[i];

      let requisite = null;
      if (subject.requisitos && subject.requisitos !== []) {
        requisite = subjectsAsArray.filter((req) => {
          return (subject.requisitos.includes(req.code))
        });
        if (requisite.length > 0) {
          subject = {...subject, color: rgbMeanColor(this.getColors(requisite))}
        } else {
          subject = {...subject, color: rgbMeanColor([randomColor(), "#AAAAAA"])}
        }
      } else {
        subject = {...subject, color: rgbMeanColor([randomColor(), "#AAAAAA"])}
      }

      subjectsAsObject[subject.code] = subject
    }
    return subjectsAsObject
  };

  getColors = (prereq) => {
    return prereq.map((r) => {return r.color})
  };

  handleSearch = (event) => {
    const semesters = this.state.catalogue.semesters
    let subjectsAsObject = this.state.catalogue.subjects;

    for (let i in subjectsAsObject) {
      let subject = subjectsAsObject[i];

      if (!subject.code.toUpperCase().includes(event.target.value.toUpperCase()) &&
        !subject.name.toUpperCase().includes(event.target.value.toUpperCase()) &&
        !subject.ementa.toUpperCase().includes(event.target.value.toUpperCase())) {
        subject.opacity = Constants.invisibleOpacity;
      } else {
        subject.opacity = 1;
      }
      subjectsAsObject[subject.code] = subject
    }
    this.setState({catalogue: {semesters: semesters, subjects: subjectsAsObject}})
  };

  handleBorderButton = () => {
    const isBorderColored = this.state.borderColored;
    this.setState({borderColored: !isBorderColored})
  };
  handleRandomColorButton = () => {
    if (this.state.coloredBy==="Random") {
      this.setState({coloredBy: ""})
    } else {
      this.setState({coloredBy: "Random"})
    }
  };

  handleEdit = () => {
    if (! this.catalogue.current) return;
    const x = this.state.persistentEditing;
    this.setState({persistentEditing: !x})
    this.catalogue.current.setState({onDragging: true})
    this.catalogue.current.forceUpdate()
  };

  onDragStart = () => {
    this.setState({editing: true})
  };

  onDragEnd = (result) => {
    const catalogue = this.state.catalogue
    const { destination, source, draggableId } = result;

    if (!destination) {
      this.setState({editing: false})
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      this.setState({editing: false})
      return;
    }

    const start = catalogue.semesters[source.droppableId];
    const finish = catalogue.semesters[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.subjects);
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        subjects: newTaskIds,
      };

      const newState = {
        ...catalogue,
        semesters: {
          ...catalogue.semesters,
          ["sem-"+newColumn.id]: newColumn,
        }
      };
      this.setState({catalogue: newState, editing: false})
    }
    else {
      const startTaskIds = Array.from(start.subjects);
      startTaskIds.splice(source.index, 1)

      const newStart = {
        ...start,
        subjects: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.subjects);
      finishTaskIds.splice(destination.index, 0, draggableId)

      const newFinish = {
        ...finish,
        subjects: finishTaskIds,
      };

      const newState = {
        ...catalogue,
        semesters: {
          ...catalogue.semesters,
          ["sem-"+newStart.id]: newStart,
          ["sem-"+newFinish.id]: newFinish,
        }
      };
      this.setState({catalogue: newState, editing: false})
    }
    this.forceUpdate()
  };

  render() {
    const borderButtonText = this.state.borderColored ? "Cor Interna" : "Cor na Borda"
    const randomColorButtonText = this.state.coloredBy==="Random" ? "Sem cor" : "Aleatória"
    return (
      <div className="App">
        <div
        style={
          {display: "flex",
           margin: "auto",
           alignItems: "center",
           width: "750px"}
        }>
          <SearchInput onChangeHandler = {this.handleSearch}/>
          <button className={"BorderButton"} onClick={this.handleBorderButton}>
            {borderButtonText}
          </button>
          <button className={"BorderButton"} onClick={this.handleRandomColorButton}>
            {randomColorButtonText}
          </button>
          <button className={"BorderButton"} onClick={this.handleEdit}>
            {"EDIT"}
          </button>
        </div>
        <Catalogue
          ref={this.catalogue}
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
          catalogueBySemester={this.state.catalogue}
          borderColored={this.state.borderColored}
          coloredBy={this.state.coloredBy}
          editing={this.state.persistentEditing || this.state.editing}
        />
      </div>
    );
  }
}

export default App;
