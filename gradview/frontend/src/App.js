import React from 'react';
import './App.css';
import catalogueComp from './Component/Catalogue/catalogoComp.js';
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
    const numOfSem = 10;
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
        if (requisite.length > 0) {
          ret = {...disc, color: rgbMeanColor(this.getColors(requisite))}
        } else {
          ret = {...disc, color: rgbMeanColor([randomColor(), "#AAAAAA"])}
        }
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
      if (!subject.code.toUpperCase().includes(event.target.value.toUpperCase()) &&
        !subject.name.toUpperCase().includes(event.target.value.toUpperCase()) &&
        !subject.ementa.toUpperCase().includes(event.target.value.toUpperCase())) {
        newSubject.opacity = Constants.invisibleOpacity;
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
    this.catalogueSem = this.organizeCatalogueBySemester(this.state.catalogue);

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
          catalogueBySemester={this.catalogueSem}
          borderColored={this.state.borderColored}
          coloredBy={this.state.coloredBy}
        />
      </div>
    );
  }
}

export default App;
