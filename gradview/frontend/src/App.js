import React from 'react';
import './App.css';
import catalogueComp from './Component/Catalogue/catalogoComp.js';
import Catalogue from './Component/Catalogue/Catalogue';

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
