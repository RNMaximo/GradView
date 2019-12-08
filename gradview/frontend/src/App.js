import React from 'react';
import './App.css';
import Catalogue from './Component/Catalogue/Catalogue';
import SearchInput from "./Component/Catalogue/SearchInput/SearchInput";

import * as Constants from "./Component/Catalogue/constants";
import {getVisualCode} from "./Functions/SubjectCode/SubjectCode";

import Switch from "./UI/SwitchButton/SwitchButton";
import CatalogueSelectBar from "./Component/Catalogue/CatalogueSelectBar/CatalogueSelectBar";
import { getCourseName } from "./Functions/Catalogues/cataloguesFunctions";

class App extends React.Component {
  state = {
    catalogueId: "",
    catalogue: null,

    borderColored: false,

    isColoredByTPChecked: false,
    isSizedByCreditsChecked: false,
    showEletivasChecked: false,
    isRemoverDisable: true,

    isEditing: false,
    onSearch: false,
    searchedValue: "",
    sizedByCredits: false,
    isColored: false,
  };
  catalogue = React.createRef();

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

  handleOnChange = (event) => {
    const searchedStr = event.target.value
    this.setState({searchedValue: searchedStr})
    this.handleSearch(searchedStr);
  };
  handleSearch = (searchedStr) => {
    if (!this.state.catalogue) return;
    let subjectsAsObject = this.state.catalogue.subjects;
    searchedStr = searchedStr.trim();
    const normalizedStr = searchedStr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    for (let i in subjectsAsObject) {
      let subject = subjectsAsObject[i];

      // Ignora acentuação, ç e maiúsculas/minúsculas
      const normalizedCode = (getVisualCode(subject.code)).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const normalizedName = subject.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const normalizedEmenta = subject.ementa.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

      if (!normalizedCode.includes(normalizedStr) &&
        !normalizedName.includes(normalizedStr) &&
        !normalizedEmenta.includes(normalizedStr)) {
        subject.opacity = Constants.invisibleOpacity;
      } else {
        subject.opacity = 1;
      }
      subjectsAsObject[subject.code] = subject
    }
    const onSearch = searchedStr !== "";

    this.setState({catalogue: {...this.state.catalogue, subjects: subjectsAsObject}, onSearch: onSearch})
  };
  clearSearch = () => {
    const searchedStr = "";
    this.setState({searchedValue: searchedStr});
    this.handleSearch(searchedStr);
  };

  handleSearchCatalogue = (selectedCatalogue, selectedCatalogueInfo) => {
    if (! selectedCatalogue) {
      this.setState({catalogue: null, catalogueId: 'noCatalogue'})
    } else {
      this.selectedCatalogue = {...selectedCatalogueInfo};

      const newValue = selectedCatalogue.value;

      // Code Spliting
      import('../public/catalogues/' + newValue).then(response => {
        const catalogue = response.default;
        this.setState({catalogue: catalogue, catalogueId: newValue})
      }).catch(error => {
        console.log(error);
        this.setState({error: true})
      }).then(response => {
        const searchedStr = this.state.searchedValue;
        this.handleSearch(searchedStr);
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
    const selectedYear = this.selectedCatalogue ? this.selectedCatalogue.year : "Carregando..."
    const selectedCourse = this.selectedCatalogue ? this.selectedCatalogue.course+' - '+getCourseName(this.selectedCatalogue.year, this.selectedCatalogue.course) : ""
    const selectedCatalogue = this.selectedCatalogue ? this.selectedCatalogue.catalogue : ""
    return (
      <div className="App">
        <div className={"app-navbar"}>
          <CatalogueSelectBar
            handleSearchCatalogue={this.handleSearchCatalogue}
          />
          <div className={"catalogue-control"}>

            <div className={"selected-catalogue"}>
              <p className={"year"}>{selectedYear}</p>
              <div>
                <p className={"course"}>{selectedCourse}</p>
                <p className={"modality"}>{selectedCatalogue}</p>
              </div>
            </div>

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
        </div>

        <div className={"content-page"}>
          <div style={{margin: "auto", alignItems: "center"}}>
            <SearchInput value={this.state.searchedValue} onChangeHandler={this.handleOnChange}
                         clear={this.clearSearch}/>
          </div>
          {this.state.catalogue ?
            <Catalogue
              key={"catalogue" + this.state.catalogueId}
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
            /> : null}
          {this.state.error ? <p>O catálogo especificado não foi encontrado.</p> : null}
        </div>
      </div>
    );
  }
}

export default App;
