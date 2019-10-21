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
    coloredBy: "Random"
  };
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
    const numberOfSemesters = Object.keys(this.state.catalogue.semesters).length;

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
          console.log(requisite)
          subject = {...subject, color: rgbMeanColor(this.getColors(requisite))}
        } else {
          subject = {...subject, color: rgbMeanColor([randomColor(), "#AAAAAA"])}
        }
      } else {
        console.log('newColor')
        console.log(subject.code)
        subject = {...subject, color: rgbMeanColor([randomColor(), "#AAAAAA"])}
      }

      subjectsAsObject[subject.code] = subject
    };
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
           width: "550px"}
        }>
          <SearchInput onChangeHandler = {this.handleSearch}/>
          <button className={"BorderButton"} onClick={this.handleBorderButton}>
            {borderButtonText}
          </button>
          <button className={"BorderButton"} onClick={this.handleRandomColorButton}>
            {randomColorButtonText}
          </button>
        </div>
        <Catalogue
          catalogueBySemester={this.state.catalogue}
          borderColored={this.state.borderColored}
          coloredBy={this.state.coloredBy}
        />
      </div>
    );
  }
}

export default App;
