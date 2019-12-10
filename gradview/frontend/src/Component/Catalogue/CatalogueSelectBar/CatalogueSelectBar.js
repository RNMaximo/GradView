import React from "react";
import Select from "react-select";
import './CatalogueSelectBar.css';
import Button from "@material-ui/core/Button";

import {
  findIndexByCatalogueLabel,
  findIndexByValue, firstCourseToLoad,
  getCatalogueCourseOptionsByYear,
  getCatalogueYearOptions,
  getModalitiesOptionsByYearAndCourse
} from "../../../Functions/Catalogues/cataloguesFunctions";

class CatalogueSelectBar extends React.Component {

  state = {
    catalogueYear: null,
    catalogueCourse: null,
    catalogueOpt: null,
  };

  componentDidMount() {
    this.initializeOptions();
  }

  createOptions = () => {
    this.yearsOptions = getCatalogueYearOptions();
    this.cataloguesOptions = getCatalogueCourseOptionsByYear();
    this.optionsByYearAndCourse = getModalitiesOptionsByYearAndCourse();
  };

  // Inicia com o último ano cadastrado, o curso com número 'firstCourseToLoad' e sua primeira modalidade.
  initializeOptions = () => {
    const initialYearOpt = this.yearsOptions[this.yearsOptions.length-1];
    this.currentYear = initialYearOpt.value;
    const courseIndex = findIndexByValue(this.cataloguesOptions[this.currentYear], firstCourseToLoad);
    const initialCourseOpt = this.cataloguesOptions[this.currentYear][courseIndex];
    this.currentCourse = initialCourseOpt.value;
    const initialCatalogueOpt = this.optionsByYearAndCourse[this.currentYear][this.currentCourse][0];

    this.handleChangeCatalogueYear(initialYearOpt);
    //this.handleChangeCatalogueCourse(initialCourseOpt);
    //this.handleChangeCatalogue(initialCatalogueOpt);
    this.handleConfirmCatalogue(initialCatalogueOpt)
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

  handleConfirmCatalogue = (catalogue) => {
    const selectedCatalogue = catalogue ? catalogue : this.state.catalogueOpt;
    if (! selectedCatalogue) {
      this.props.handleSearchCatalogue(selectedCatalogue, null);
    } else {
      this.selectedCatalogue = {year: this.currentYear, course: this.currentCourse, catalogue: this.currentCatalogueLabel};
      this.props.handleSearchCatalogue(selectedCatalogue, this.selectedCatalogue);
    }
  };

  noOptionsMessage = () => {
    return "Nenhuma opção encontrada"
  };
  render() {

    this.createOptions();

    const currentCataloguesYear = this.state.catalogueYear ? this.state.catalogueYear.value : null;
    const currentCataloguesCourse = this.state.catalogueCourse ? this.state.catalogueCourse.value : null;
    const aux = this.optionsByYearAndCourse[currentCataloguesYear]

    const yearsOptions = this.yearsOptions;
    const coursesOptions = this.cataloguesOptions[currentCataloguesYear];
    const modalitiesOptions = aux ? aux[currentCataloguesCourse] : null;

    return (
      <div
        className={"course-select-bar"}
      >
        <div
          className={"bar-content"}
          style={
            {
              justifyContent: 'space-between',
              display: "inline-flex",
              margin: "auto",
            }
          }>
          <Select
            value={this.state.catalogueYear}
            className={"year-select"}
            onChange={this.handleChangeCatalogueYear}
            options={yearsOptions}
            placeholder={"Ano"}
            isSearchable={true}
            isDisabled={!yearsOptions || yearsOptions.length <= 1}
            noOptionsMessage={this.noOptionsMessage}
          />
          <Select
            value={this.state.catalogueCourse}
            className={"course-select"}
            onChange={this.handleChangeCatalogueCourse}
            options={coursesOptions}
            placeholder={"Curso"}
            isSearchable={true}
            isDisabled={!coursesOptions || coursesOptions.length <= 1}
            noOptionsMessage={this.noOptionsMessage}
          />
          <Select
            value={this.state.catalogueOpt}
            className={"course-select"}
            onChange={this.handleChangeCatalogue}
            options={modalitiesOptions}
            placeholder={"Modalidade"}
            isSearchable={true}
            isDisabled={!modalitiesOptions || modalitiesOptions.length <= 1}
            noOptionsMessage={this.noOptionsMessage}
          />
          <Button
            className={"white-button"}
            variant="contained"
            color="default"
            onClick={() => this.handleConfirmCatalogue()}
          >
            Confirmar
          </Button>
        </div>
      </div>
    );
  }
}

export default CatalogueSelectBar;