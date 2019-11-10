import React from 'react';
import './App.css';
import Catalogue from './Component/Catalogue/Catalogue';
import SearchInput from "./Component/Catalogue/SearchInput/SearchInput";

import rgbMeanColor from './Functions/Colors/rgbMeanColor';
import * as Constants from "./Component/Catalogue/constants";
import {getCleanCode, getVisualCode} from "./Functions/SubjectCode/SubjectCode";

import Switch from "./UI/SwitchButton/SwitchButton";
import Select from 'react-select'

var randomColor = require('randomcolor');

class App extends React.Component {
  state = {
    catalogueOpt: null,
    catalogue: null,

    borderColored: false,
    shouldChangeColor: true,

    isColoredByTPChecked: false,
    isSizedByCreditsChecked: false,
    isPersistentEditing: false,

    isEditing: false,
    onSearch: false,
    sizedByCredits: false,
    isColored: false,
  };
  catalogue = React.createRef();

  componentDidMount() {
    this.handleChangeCatalogue(this.coursesOptions[0]);
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

  onDragStart = () => {
    this.setState({isEditing: true})
  };

  onDragEnd = (result) => {
    const catalogue = this.state.catalogue;
    const { destination, source, draggableId } = result;

    if (!destination) {
      this.setState({isEditing: false});
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      this.setState({isEditing: false});
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
      this.setState({catalogue: newState, isEditing: false})
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
      this.setState({catalogue: newState, isEditing: false})
    }
    this.forceUpdate()
  };

  handleSearch = (event) => {
    let subjectsAsObject = this.state.catalogue.subjects;
    const searchedStr = event.target.value.trim();

    for (let i in subjectsAsObject) {
      let subject = subjectsAsObject[i];
      if (!(getVisualCode(subject.code)).toUpperCase().includes(searchedStr.toUpperCase()) &&
        !subject.name.toUpperCase().includes(searchedStr.toUpperCase()) &&
        !subject.ementa.toUpperCase().includes(searchedStr.toUpperCase())) {
        subject.opacity = Constants.invisibleOpacity;
      } else {
        subject.opacity = 1;
      }
      subjectsAsObject[subject.code] = subject
    }
    const onSearch = searchedStr !== "";

    this.setState({catalogue: {...this.state.catalogue, subjects: subjectsAsObject}, onSearch: onSearch})
  };

  handleChangeCatalogue = (selectedOption) => {
    if (selectedOption === null) {
      this.setState({catalogue: null, catalogueOpt: selectedOption})
    } else {
      const newValue = selectedOption.value;
      const catalogue = (require('./Component/Catalogue/Catalogues/' + newValue)).default;
      const coloredCatalogue = this.initializeRandomColors(catalogue);
      const newCatalogue = {...catalogue, subjects: coloredCatalogue};

      this.setState({catalogue: newCatalogue, catalogueOpt: selectedOption})
    }
  };

  handleOmitCatalogue = () => {
    this.setState({catalogue: null, isColored: false})
  };

  handleChangeColor = (check) => {
    this.setState({ isColoredByTPChecked: check });
  };
  handleChangeSize = (check) => {
    this.setState({ isSizedByCreditsChecked: check });
  };
  handleChangeEditing = (check) => {
    if (! this.catalogue.current) return;
    this.setState({isPersistentEditing: check});
    this.catalogue.current.setState({onDragging: true});
    this.catalogue.current.forceUpdate();
  };

  coursesOptions = [
    {value: "catalogueComp.js", label: "AA - Engenharia de Computação"},
    {value: "curso1_mod1.js", label: "AA - Bacharelado em Matemática"},
    {value: "curso1_mod2.js", label: "AB - Bacharelado em Matemática"},
    {value: "curso4_mod1.js", label: "AA - Bacharelado em  Física"},
    {value: "curso8_mod1.js", label: "Engenharia Agrícola"},
    {value: "curso11_mod1.js", label: "Engenharia Elétrica"},
    {value: "curso102_mod1.js", label: "Engenharia de Produção"},
    {value: "curso20_mod1.js", label: "Pedagogia"},
    //{value: ".js", label: ""},
  ];

  render() {
    const selectOpt = this.state.catalogueOpt ? this.state.catalogueOpt : null;

    const catalogue = this.state.catalogue ?
      <Catalogue
        key={selectOpt.value}
        ref={this.catalogue}
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        catalogueBySemester={this.state.catalogue}

        coloredByVector={this.state.isColoredByTPChecked}
        sizedByCredits={this.state.isSizedByCreditsChecked}

        onSearch={this.state.onSearch}
        editing={this.state.isPersistentEditing || this.state.isEditing}
      /> : null;

    return (
      <div className="App">
        <br/>
        <div
          style={
            {display: "inline-flex",
              margin: "auto",
              alignItems: "center",
            }
          }>
          <Select
            value={selectOpt}
            className={"course-select"}
            onChange={this.handleChangeCatalogue}
            options={this.coursesOptions}
            placeholder={"Selecione um catálogo"}
            isSearchable={true}
            isClearable={true}
          />
        </div>
        <br/>
        <div
          style={
            {display: "inline-flex",
              margin: "auto",
              alignItems: "center"}
          }>
          <SearchInput onChangeHandler = {this.handleSearch}/>

          <Switch
            text={"Teoria / Prática"}
            onChange={this.handleChangeColor}
            checked={this.state.isColoredByTPChecked}
          />

          <Switch
            text={"Tamanho por créditos"}
            onChange={this.handleChangeSize}
            checked={this.state.isSizedByCreditsChecked}
          />

          <Switch
            text={"Modo de Edição"}
            onChange={this.handleChangeEditing}
            checked={this.state.isPersistentEditing}
          />

        </div>
        {catalogue}
      </div>
    );
  }
}

export default App;
