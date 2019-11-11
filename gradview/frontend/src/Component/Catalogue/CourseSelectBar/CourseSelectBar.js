import React from "react";
import Select from "react-select";
import './CourseSelectBar.css';

class CourseSelectBar extends React.Component {

  render() {
    return (
      <div
        className={"CourseSelectBar"}
      >
        <div
          style={
            {
              display: "inline-flex",
              margin: "auto",
            }
          }>
          <Select
            value={this.props.catalogueYearOpt}
            className={"year-select"}
            onChange={this.props.handleChangeCatalogueYear}
            options={this.props.yearsOptions}
            placeholder={"Selecione o ano do catálogo"}
            isDisable
          />
          <Select
            value={this.props.catalogueOpt}
            className={"course-select"}
            onChange={this.props.handleChangeCatalogue}
            options={this.props.coursesOptions}
            placeholder={"Selecione um catálogo"}
            isSearchable={true}
            //isClearable={true}
          />
          <button onClick={this.props.handleSearchCatalogue}>Buscar</button>
        </div>
      </div>
    )
  }
}

export default CourseSelectBar;