import React from 'react';
import './App.css';
import Catalogue from './Component/Catalogue/Catalogue';
import SearchInput from "./Component/Catalogue/SearchInput/SearchInput";

import rgbMeanColor from './Functions/Colors/rgbMeanColor';
import * as Constants from "./Component/Catalogue/constants";
import {getCleanCode, getVisualCode} from "./Functions/SubjectCode/SubjectCode";

import catalogueComp from './Component/Catalogue/Catalogues/catalogueComp.js';

var randomColor = require('randomcolor');

class App extends React.Component {
  state = {
    catalogue: catalogueComp,
    cataloguePath: 'catalogueComp',
    borderColored: false,
    shouldChangeColor: true,
    coloredBy: "Random",
    editing: false,
    persistentEditing: false,
    sizedByCredits: false,
    isColored: false
  };
  catalogue = React.createRef();

  componentDidMount() {
    if (this.state.catalogue) {
      const catalogue = this.state.catalogue;
      if (!this.state.isColored) {
        const coloredCatalogue = this.initializeRandomColors(catalogue);
        this.setState({shouldChangeColor: false});
        this.setState({catalogue: {...this.state.catalogue, subjects: coloredCatalogue}})
      }
    }
  }

  initializeNoColors = (catalogueSem) => {
    const borderColored=this.state.borderColored;
    const catalogue = this.state.catalogue.slice();
    const color = borderColored ? '#000000' : '#ffffff';
    const coloredCatalogue = catalogue.map((disc) => {
      const ret = {...disc, color: color};
      return (ret)
    });
    return coloredCatalogue
  };

  initializeRandomColors = (catalogue) => {
    const catalogueSemesters = catalogue.semesters;
    let coloredSubjects =[];
    const semesters = Object.keys(catalogueSemesters);

    for (let i in semesters) {
      const thisSemester = catalogueSemesters[semesters[i]];
      coloredSubjects = this.colorSemester (catalogue, thisSemester);
    }
    return coloredSubjects;
  };

  colorSemester = (catalogue, sem) => {
    let subjectsAsObject = catalogue.subjects;
    const subjectsAsArray = Object.values(subjectsAsObject);
    let subjectsToColor = sem.subjects.map(subjectsId => catalogue.subjects[subjectsId]);

    for (let i in subjectsToColor) {
      let subject = subjectsToColor[i];

      let requisite = null;
      if (subject.requisitos && subject.requisitos.length > 0) {
        const cleanCodes = subject.requisitos.map((req) => {
          return getCleanCode(req);
        });
        requisite = subjectsAsArray.filter((req) => {
          return (cleanCodes.includes(req.code))
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
    let subjectsAsObject = this.state.catalogue.subjects;

    for (let i in subjectsAsObject) {
      let subject = subjectsAsObject[i];
      if (!(getVisualCode(subject.code)).toUpperCase().includes(event.target.value.toUpperCase()) &&
        !subject.name.toUpperCase().includes(event.target.value.toUpperCase()) &&
        !subject.ementa.toUpperCase().includes(event.target.value.toUpperCase())) {
        subject.opacity = Constants.invisibleOpacity;
      } else {
        subject.opacity = 1;
      }
      subjectsAsObject[subject.code] = subject
    }
    this.setState({catalogue: {...this.state.catalogue, subjects: subjectsAsObject}})
  };

  handleSwitchColorButton = () => {
    if (this.state.coloredBy==="Random") {
      this.setState({coloredBy: "Credits"})
    } else {
      this.setState({coloredBy: "Random"})
    }
  };

  handleEdit = () => {
    if (! this.catalogue.current) return;
    const x = this.state.persistentEditing;
    this.setState({persistentEditing: !x});
    this.catalogue.current.setState({onDragging: true});
    this.catalogue.current.forceUpdate()
  };

  handleCreditsButton = () => {
    const isSizedByCredits = this.state.sizedByCredits;
    this.setState({sizedByCredits: !isSizedByCredits})
  };

  onDragStart = () => {
    this.setState({editing: true})
  };

  onDragEnd = (result) => {
    const catalogue = this.state.catalogue;
    const { destination, source, draggableId } = result;

    if (!destination) {
      this.setState({editing: false});
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      this.setState({editing: false});
      return;
    }

    const start = catalogue.semesters[source.droppableId];
    const finish = catalogue.semesters[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.subjects);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

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
      startTaskIds.splice(source.index, 1);

      const newStart = {
        ...start,
        subjects: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.subjects);
      finishTaskIds.splice(destination.index, 0, draggableId);

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

  handleChangeCatalogue = (e) => {
    console.log(e.target.value)
    //console.log(this.state.catalogue)
    const catalogue = (require('./Component/Catalogue/Catalogues/'+e.target.value)).default;
    const catalogueSem = catalogue.semesters;
    const coloredCatalogue = this.initializeRandomColors(catalogue);
    const newCatalogue = {...catalogue, subjects: coloredCatalogue};
    console.log(catalogue)
    console.log(coloredCatalogue)
    console.log(newCatalogue)
    this.setState({catalogue: newCatalogue, cataloguePath: e.target.value})
  };
  handleOmitCatalogue = () => {
    this.setState({catalogue: null, isColored: false})
  }
  render() {

    const catalogue = this.state.catalogue ?
      <Catalogue
        key={this.state.cataloguePath}
        ref={this.catalogue}
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}

        catalogueBySemester={this.state.catalogue}
        coloredBy={this.state.coloredBy}
        editing={this.state.persistentEditing || this.state.editing}
        sizedByCredits={this.state.sizedByCredits}
      /> : null;

    const nextColorButtonText = this.state.coloredBy==="Random" ? "Teoria/Prática" : "Aleatória";
    return (
      <div className="App">
        <div>
          <select onChange={this.handleChangeCatalogue}>
            <option value={'catalogueComp.js'}>AA - Engenharia de Computação</option>
            <option value={'curso1_mod1.js'}>AA - Bacharelado em Matemática</option>
            <option value={'curso1_mod2.js'}>AB - Bacharelado em Matemática</option>
            <option value={'curso4_mod1.js'}>AA - Bacharelado em  Física</option>
            <option value={'curso8_mod1.js'}>Engenharia Agrícola</option>
            <option value={'curso11_mod1.js'}>Engenharia Elétrica</option>
            <option value={'curso20_mod1.js'}>Pedagogia</option>
          </select>
        </div>
        <div
          style={
            {display: "flex",
              margin: "auto",
              alignItems: "center",
              width: "650px"}
          }>
          <SearchInput onChangeHandler = {this.handleSearch}/>
          <button className={"BorderButton"} onClick={this.handleSwitchColorButton}>
            {nextColorButtonText}
          </button>
          <button className={"BorderButton"} onClick={this.handleEdit}>
            {"EDIT"}
          </button>
          <button className={"BorderButton"} onClick={this.handleCreditsButton}>
            {"Por créditos"}
          </button>
        </div>
        {catalogue}
      </div>
    );
  }
}

export default App;
