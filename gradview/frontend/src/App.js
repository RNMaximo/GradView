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
  };
  catalogueSem=[];


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

  componentDidMount() {
    const coloredCatalogue = this.initializeRandomColors();
    this.setState({catalogue: coloredCatalogue})
  }

  initializeRandomColors = () => {
    let catalogueSem = this.organizeCatalogueBySemester(this.state.catalogue);
    let coloredCatalogue =[];
    const numberOfSemesters = catalogueSem.length;

    for (let i =0; i < numberOfSemesters; i++) {
      coloredCatalogue = [...coloredCatalogue , ...(this.iColor (coloredCatalogue, catalogueSem[i]))];
    }
    return coloredCatalogue;
  };

  iColor = (catalogue, sem) => {
    const coloredCatalogue = sem.map((disc, index) => {
      let ret;
      let requisite = null
      if (disc.requisitos && disc.requisitos !== []) {
        requisite = catalogue.filter((req) => {
          return (disc.requisitos.includes(req.name))
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
    //console.log("Search");
    //console.log(event.target.value)

    const coloredCatalogue = this.state.catalogue.slice();
    /*
    // Computar valor para cada disciplina - searchValue - e com base no máximo e mínimo dar valores de opacidade
    const searched = coloredCatalogue.filter((disciplina) => {
      //TODO Melhorar a busca
      return disciplina.name.includes(event.target.value);
    });
    */
    //console.log(searched);
    const opacityCatalogue = coloredCatalogue.map((subject) => {
      const newSubject = subject;
      if (!subject.name.toUpperCase().includes(event.target.value.toUpperCase())) {
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

  render() {
    this.catalogueSem = this.organizeCatalogueBySemester(this.state.catalogue);

    return (
      <div className="App">
        <SearchInput onChangeHandler = {this.handleSearch}/>
        <Catalogue catalogueBySemester={this.catalogueSem}/>
      </div>
    );
  }
}

export default App;
