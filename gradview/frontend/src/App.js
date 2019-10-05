import React from 'react';
import './App.css';
import catalogueComp from './Component/Catalogue/catalogoComp.js';
import Catalogue from './Component/Catalogue/Catalogue';
import SearchInput from "./Component/Catalogue/SearchInput/SearchInput";

import rgbMeanColor from './Functions/Colors/rgbMeanColor';

var randomColor = require('randomcolor');

class App extends React.Component {
  state = {
    catalogue: catalogueComp,
    borderColored: false,
    shouldChangeColor: true
  };
  catalogueSem=[];



  componentWillMount() {
    const catalogueSem = this.organizeCatalogueBySemester(this.state.catalogue);
    if (! this.state.isColored) {
      const coloredCatalogue = this.initializeRandomColors(catalogueSem);
      this.setState({shouldChangeColor: false})
      this.setState({catalogue: coloredCatalogue})
    }
  }

  organizeCatalogueBySemester  = (catalogue) => {
    const numOfSem = 4;
    let catalogueSem = [];
    for (let i = 1; i < numOfSem+1; i++) {
      catalogueSem.push(catalogue.filter(subject => {
        return subject.semestre === i
      }))
    }
    return catalogueSem
  };

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

  initializeRandomColors = (catalogueSem) => {
    let coloredCatalogue =[];
    const numberOfSemesters = catalogueSem.length;

    for (let i =0; i < numberOfSemesters; i++) {
      coloredCatalogue = [...coloredCatalogue , ...(this.coloredSemester (coloredCatalogue, catalogueSem[i]))];
    }
    return coloredCatalogue;
  };

  coloredSemester = (catalogue, sem) => {
    const coloredCatalogue = sem.map((disc, index) => {
      let ret;
      let requisite = null
      if (disc.requisitos && disc.requisitos !== []) {
        requisite = catalogue.filter((req) => {
          return (disc.requisitos.includes(req.code))
        });
        ret = {...disc, color: rgbMeanColor(this.getColors(requisite))}
      } else {
        ret = {...disc, color: rgbMeanColor([randomColor(), "#AAAAAA"])}
      }

      return (ret)
    });
    return coloredCatalogue
  };

  getColors = (prereq) => {
    return prereq.map((r) => {return r.color})
  };


  handleSearch = (event) => {
    const coloredCatalogue = this.state.catalogue.slice();
    /*
    // Computar valor para cada disciplina - searchValue - e com base no máximo e mínimo dar valores de opacidade
    const searched = coloredCatalogue.filter((disciplina) => {
      //TODO Melhorar a busca
      return disciplina.code.includes(event.target.value);
    });
    */
    //console.log(searched);
    const opacityCatalogue = coloredCatalogue.map((subject) => {
      const newSubject = subject;
      if (!subject.code.toUpperCase().includes(event.target.value.toUpperCase())) {
        newSubject.opacity = 0.1;
      } else {
        newSubject.opacity = 1;
      }
      return (
        newSubject
      )
    });
    this.setState({catalogue: opacityCatalogue})
  };

  handleBorderButton = () => {
    console.log("aiosdaijos")
    const isBorderColored = this.state.borderColored;
    this.setState({borderColored: !isBorderColored})
  };

  render() {
    this.catalogueSem = this.organizeCatalogueBySemester(this.state.catalogue);

    const buttonText = this.state.borderColored ? "Cor na Borda" : "Cor Interna"
    return (
      <div className="App">
        <div
        style={
          {display: "flex",
           margin: "auto",
           alignItems: "center",
           width: "450px"}
        }>
          <SearchInput onChangeHandler = {this.handleSearch}/>
          <button className={"BorderButton"} onClick={this.handleBorderButton}>{buttonText}</button>
        </div>
        <Catalogue catalogueBySemester={this.catalogueSem} borderColored={this.state.borderColored}/>
      </div>
    );
  }
}

export default App;
