import React from 'react';
import './App.css';
import Catalogue from './Component/Catalogue/Catalogue';
import SearchInput from "./Component/Catalogue/SearchInput/SearchInput";

import rgbMeanColor from './Functions/Colors/rgbMeanColor';
import * as Constants from "./Component/Catalogue/constants";
import {getCleanCode, getVisualCode} from "./Functions/SubjectCode/SubjectCode";

import Switch from "./UI/SwitchButton/SwitchButton";
import CourseSelectBar from "./Component/Catalogue/CourseSelectBar/CourseSelectBar";
import {
  getModalitiesOptionsByYearAndCourse,
  getCatalogueYearOptions,
  getCatalogueCourseOptionsByYear
} from "./Component/Catalogue/Catalogues/cataloguesFunctions";

var randomColor = require('randomcolor');

class App extends React.Component {
  state = {
    catalogueYear: null,
    catalogueCourse: null,
    catalogueOpt: null,
    catalogueId: "",
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
    this.initializeOptions();
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

  createOptions = () => {
    this.yearsOptions = getCatalogueYearOptions();
    this.cataloguesOptions = getCatalogueCourseOptionsByYear();
    this.optionsByYearAndCourse = getModalitiesOptionsByYearAndCourse();
  };

  initializeOptions = () => {
    const initialYearOpt = this.yearsOptions[0];
    this.currentYear = initialYearOpt.value;
    const initialCourseOpt = this.cataloguesOptions[this.currentYear][0];
    this.currentCourse = initialCourseOpt.value;
    const initialCatalogueOpt = this.optionsByYearAndCourse[this.currentYear][this.currentCourse][0];

    this.handleChangeCatalogueYear(initialYearOpt);
    //this.handleChangeCatalogueCourse(initialCourseOpt);
    //this.handleChangeCatalogue(initialCatalogueOpt);
    this.handleSearchCatalogue(initialCatalogueOpt)
  };

  handleChangeCatalogueYear = (catalogueYear) => {
    this.setState({catalogueYear: catalogueYear});
    this.currentYear = catalogueYear.value;
    this.handleChangeCatalogueCourse(this.cataloguesOptions[this.currentYear][0])
  };

  handleChangeCatalogueCourse = (selectedOption) => {
    this.setState({catalogueCourse: selectedOption});
    this.currentCourse = selectedOption.value;
    this.handleChangeCatalogue(this.optionsByYearAndCourse[this.currentYear][this.currentCourse][0])
  };

  handleChangeCatalogue = (selectedOption) => {
    this.currentCatalogue = selectedOption.label;
    this.setState({catalogueOpt: selectedOption});
  };

  handleSearchCatalogue = (catalogue) => {
    const selectedCatalogue = catalogue ? catalogue : this.state.catalogueOpt;
    if (! selectedCatalogue) {
      this.setState({catalogue: null})
    } else {
      this.selectedCatalogue = {year: this.currentYear, course: this.currentCourse, catalogue: this.currentCatalogue};

      const newValue = selectedCatalogue.value;
      const catalogue = (require('./Component/Catalogue/Catalogues/' + newValue)).default;
      const coloredCatalogue = this.initializeRandomColors(catalogue);
      const newCatalogue = {...catalogue, subjects: coloredCatalogue};

      this.setState({catalogue: newCatalogue, catalogueId: newValue})
    }
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


  render() {
    this.createOptions();

    const currentCataloguesYear = this.state.catalogueYear ? this.state.catalogueYear.value : null;
    const currentCataloguesCourse = this.state.catalogueCourse ? this.state.catalogueCourse.value : null;
    const aux = this.optionsByYearAndCourse[currentCataloguesYear]
    const modalitiesOpt = aux ? aux[currentCataloguesCourse] : null;

    return (
      <div className="App">
        <CourseSelectBar
          yearOpt={this.state.catalogueYear}
          yearsOptions={this.yearsOptions}
          courseOpt={this.state.catalogueCourse}
          coursesOptions={this.cataloguesOptions[currentCataloguesYear]}
          modalityOpt={this.state.catalogueOpt}
          modalitiesOptions={modalitiesOpt}

          handleChangeCatalogueYear={this.handleChangeCatalogueYear}
          handleChangeCatalogueCourse={this.handleChangeCatalogueCourse}
          handleChangeCatalogue={this.handleChangeCatalogue}
          handleSearchCatalogue={() => this.handleSearchCatalogue()}
        />
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
        {this.state.catalogue ?
          <Catalogue
            key={"catalogue"+this.state.catalogueId}
            ref={this.catalogue}
            onDragEnd={this.onDragEnd}
            onDragStart={this.onDragStart}
            catalogueBySemester={this.state.catalogue}

            coloredByVector={this.state.isColoredByTPChecked}
            sizedByCredits={this.state.isSizedByCreditsChecked}

            onSearch={this.state.onSearch}
            editing={this.state.isPersistentEditing || this.state.isEditing}
          /> : null}
      </div>
    );
  }
}

export default App;
