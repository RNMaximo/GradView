import React from "react";
import Select from "react-select";
import './CourseSelectBar.css';
import Button from "@material-ui/core/Button";

class CourseSelectBar extends React.Component {

  noOptionsMessage = () => {
    return "Nenhuma opção encontrada"
  };
  render() {
    return (
      <div
        className={"course-select-bar content"}
      >
        <div
          style={
            {
              justifyContent: 'space-between',
              display: "inline-flex",
              margin: "auto",
            }
          }>
          <Select
            value={this.props.yearOpt}
            className={"year-select"}
            onChange={this.props.handleChangeCatalogueYear}
            options={this.props.yearsOptions}
            placeholder={"Ano"}
            isSearchable={true}
            isDisabled={! this.props.yearsOptions || this.props.yearsOptions.length <= 1}
            noOptionsMessage={this.noOptionsMessage}
          />
          <Select
            value={this.props.courseOpt}
            className={"course-select"}
            onChange={this.props.handleChangeCatalogueCourse}
            options={this.props.coursesOptions}
            placeholder={"Curso"}
            isSearchable={true}
            isDisabled={! this.props.coursesOptions || this.props.coursesOptions.length <= 1}
            noOptionsMessage={this.noOptionsMessage}
            //isClearable={true}
          />
          <Select
            value={this.props.modalityOpt}
            className={"course-select"}
            onChange={this.props.handleChangeCatalogue}
            options={this.props.modalitiesOptions}
            placeholder={"Modalidade"}
            isSearchable={true}
            isDisabled={! this.props.modalitiesOptions || this.props.modalitiesOptions.length <= 1}
            noOptionsMessage={this.noOptionsMessage}
            //isClearable={true}
          />
          <Button
            className={"white-button"}
            variant="contained"
            color="default"
            onClick={this.props.handleSearchCatalogue}
          >
            Confirmar
          </Button>
        </div>
      </div>
    )
  }
}

export default CourseSelectBar;