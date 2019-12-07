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
  getCatalogueCourseOptionsByYear,
  getCourseName, findIndexByValue, findIndexByCatalogueLabel
} from "./Component/Catalogue/Catalogues/cataloguesFunctions";

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
    showEletivasChecked: false,
    isRemoverDisable: true,

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
      if (subject.color.length === 0) {
        if (subject.requisitos && subject.requisitos.length > 0) {
          const cleanCodes = subject.requisitos.map((req) => {
            return getCleanCode(req);
          });
          requisite = subjectsAsArray.filter((req) => {
            return (cleanCodes.includes(req.code))
          });
          if (requisite.length > 0) {
            subject = {...subject, color: rgbMeanColor(this.getColors(requisite))}
          }
        }
      }

      subjectsAsObject[subject.code] = subject
    }
    return subjectsAsObject
  };

  getColors = (prereq) => {
    return prereq.map((r) => {return r.color})
  };

  onDragStart = (info) => {
    const catalogue = this.state.catalogue;
    const { source, draggableId } = info;
    const isFromEletivas = source.droppableId.startsWith("elet");

    let isRemoverDisable = true;
    if (!isFromEletivas && !catalogue.subjects[draggableId].obligatory) {
      isRemoverDisable = false;
    }
    this.setState({isEditing: true, isRemoverDisable: isRemoverDisable})
  };

  onDragEnd = (result) => {
    const catalogue = this.state.catalogue;
    const { destination, source, draggableId } = result;

    if (!destination) {
      this.setState({isEditing: false, isRemoverDisable: true});
      return;
    }
    // Nada mudou
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      this.setState({isEditing: false, isRemoverDisable: true});
      return;
    }

    const isFromEletivas = source.droppableId.startsWith("elet");
    const isToEletivas = destination.droppableId.startsWith("elet");
    const isRemove = destination.droppableId ==="remover";

    // Eletiva -> Eletiva
    if (isFromEletivas && isToEletivas) {
      if (destination.droppableId !== source.droppableId) {
        // TODO: POPUP instruindo
        console.log("Não é possível mover disciplinas entre os blocos de eletivas");
      }
      this.setState({ isEditing: false, isRemoverDisable: true });
      return;
    }

    // _ -> Remove
    else if (isRemove) {
      // Eletiva -> Remover
      if (isFromEletivas) {
        // TODO: POPUP instruindo
        console.log("Não é possível remover disciplinas de um bloco de eletivas");
        this.setState({isEditing: false, isRemoverDisable: true});
        return;
      }
      // Semestre Obrigatoria -> Remover
      else if (catalogue.subjects[draggableId].obligatory) {
        // TODO: POPUP instruindo
        console.log("Não é possível remover disciplinas obrigatórias");
        this.setState({isEditing: false, isRemoverDisable: true});
        return
      }
      // Semestre Opcional -> Remover
      else {
        const start = catalogue.semesters[source.droppableId];
        const startTaskIds = Array.from(start.subjects);
        startTaskIds.splice(source.index, 1);

        const newStart = {
          ...start,
          subjects: startTaskIds,
        };

        const newState = {
          ...catalogue,
          semesters: {
            ...catalogue.semesters,
            ["sem-" + newStart.id]: newStart,
          },
          subjects: {
            ...catalogue.subjects,
            [draggableId]: {...catalogue.subjects[draggableId], planned: false}
          }
        };
        this.setState({catalogue: newState, isEditing: false, isRemoverDisable: true});
        return;
      }
    }

    // Semestre -> Semestre
    else if (!isFromEletivas && !isToEletivas) {
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
            ["sem-" + newColumn.id]: newColumn,
          }
        };
        this.setState({catalogue: newState, isEditing: false, isRemoverDisable: true})
      } else {
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
            ["sem-" + newStart.id]: newStart,
            ["sem-" + newFinish.id]: newFinish,
          }
        };
        this.setState({catalogue: newState, isEditing: false, isRemoverDisable: true})
      }
    }

    // Eletiva -> Semestre
    else if (isFromEletivas && !isToEletivas) {
      const start = catalogue.eletivas[source.droppableId];
      const finish = catalogue.semesters[destination.droppableId];

      if (start !== finish) {
        const startTaskIds = Array.from(start.subjects);
        startTaskIds.splice(source.index, 1);

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
            ["sem-" + newFinish.id]: newFinish,
          },
          subjects: {
            ...catalogue.subjects,
            [draggableId]: {...catalogue.subjects[draggableId], planned: true}
          }
        };


        this.setState({catalogue: newState, isEditing: false, isRemoverDisable: true})
      }
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
    // Inicia sempre com o último ano cadastrado
    const initialYearOpt = this.yearsOptions[this.yearsOptions.length-1];
    this.currentYear = initialYearOpt.value;
    const initialCourseOpt = this.cataloguesOptions[this.currentYear][28];
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
    const courseIndex = findIndexByValue(this.cataloguesOptions[this.currentYear], this.currentCourse);
    this.handleChangeCatalogueCourse(this.cataloguesOptions[this.currentYear][courseIndex])
  };


  handleChangeCatalogueCourse = (selectedOption) => {
    this.setState({catalogueCourse: selectedOption});
    this.currentCourse = selectedOption.value;
    const catalogueIndex = findIndexByCatalogueLabel(this.optionsByYearAndCourse[this.currentYear][this.currentCourse], this.currentCatalogueLabel);
    this.handleChangeCatalogue(this.optionsByYearAndCourse[this.currentYear][this.currentCourse][catalogueIndex])
  };

  handleChangeCatalogue = (selectedOption) => {
    this.currentCatalogueLabel = selectedOption.label;
    this.setState({catalogueOpt: selectedOption});
  };

  handleSearchCatalogue = (catalogue) => {
    const selectedCatalogue = catalogue ? catalogue : this.state.catalogueOpt;
    if (! selectedCatalogue) {
      this.setState({catalogue: null})
    } else {
      this.selectedCatalogue = {year: this.currentYear, course: this.currentCourse, catalogue: this.currentCatalogueLabel};

      const newValue = selectedCatalogue.value;
      // Code Spliting
      import('../public/catalogues/' + newValue).then(response => {
        const catalogue = response.default;
        const coloredCatalogue = this.initializeRandomColors(catalogue);
        const newCatalogue = {...catalogue, subjects: coloredCatalogue};

        this.setState({catalogue: newCatalogue, catalogueId: newValue})
      }).catch(error => {
        console.log(error);
        this.setState({error: true})
      });
    }
  };

  handleChangeColor = (check) => {
    this.setState({ isColoredByTPChecked: check });
  };
  handleChangeSize = (check) => {
    this.setState({ isSizedByCreditsChecked: check });
  };
  handleShowEletivas = (check) => {
    this.setState({ showEletivasChecked: check });
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


        <div className={"catalogue-control"}>
          {
            this.selectedCatalogue ?
              <div className={"selected-catalogue"}>
                <p className={"year"}>{this.selectedCatalogue.year}</p>
                <div >
                  <p className={"course"}>{this.selectedCatalogue.course+' - '+getCourseName(this.selectedCatalogue.year, this.selectedCatalogue.course)}</p>
                  <p className={"modality"}>{this.selectedCatalogue.catalogue}</p>
                </div>
              </div>
              : null
          }
          <div className={"control-buttons"}>
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
              text={"Mostrar Eletivas"}
              onChange={this.handleShowEletivas}
              checked={this.state.showEletivasChecked}
            />
          </div>
        </div>
        <div style={{margin: "auto", alignItems: "center"}}>
          <SearchInput onChangeHandler = {this.handleSearch}/>
        </div>
        {this.state.catalogue && ! this.state.error ?
          <Catalogue
            key={"catalogue"+this.state.catalogueId}
            ref={this.catalogue}
            onDragEnd={this.onDragEnd}
            onDragStart={this.onDragStart}
            catalogueBySemester={this.state.catalogue}

            coloredByVector={this.state.isColoredByTPChecked}
            sizedByCredits={this.state.isSizedByCreditsChecked}
            showeletivas={this.state.showEletivasChecked}
            isRemoverDisable={this.state.isRemoverDisable}

            onSearch={this.state.onSearch}
            editing={this.state.isEditing}
          /> : <p>O catálogo especificado não foi encontrado.</p>}
      </div>
    );
  }
}

export default App;
