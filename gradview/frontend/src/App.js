import React from 'react';
import './App.css';
import catalogueComp from './Component/Catalogue/catalogoComp.js';
import Catalogue from './Component/Catalogue/Catalogue';

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


  render() {
    this.catalogueSem = this.organizeCatalogueBySemester(this.state.catalogue);

    return (
      <div className="App">
        <Catalogue catalogueBySemester={this.catalogueSem}/>
      </div>
    );
  }
}

export default App;
