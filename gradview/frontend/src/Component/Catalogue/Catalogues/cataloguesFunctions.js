import catalogueOptions from './allCatalogues';

export const firstCourseToLoad = '34';

export const getCourseName = (year, courseCode) => {
  return catalogueOptions[year][courseCode].name;
};

export const getCatalogueYearOptions = () => {
  const courseYears = Object.keys(catalogueOptions);
  const yearsOptions = courseYears.map((year) => {
    return {value: year, label: year}
  });
  return yearsOptions;
};

export const getCatalogueCourseOptionsByYear = () => {
  const courseYears = Object.keys(catalogueOptions);
  let cataloguesByYear = {};
  for (let y in courseYears) {
    const year = courseYears[y];
    const catalogueThisYear = catalogueOptions[year];
    const courseIds = Object.keys(catalogueThisYear);
    const courses = courseIds.map((courseId) => {
      const course = catalogueOptions[year][courseId];
      const objCourse = {value: courseId, label: courseId + " - " + course.name};
      return objCourse
    });
    cataloguesByYear = {...cataloguesByYear, [year]: courses}
  }
  return cataloguesByYear
};

export const getModalitiesOptionsByYearAndCourse = () => {
  const courseYears = Object.keys(catalogueOptions);
  let cataloguesByYear = {};
  for (let y in courseYears) {
    const year = courseYears[y];
    const catalogueThisYear = catalogueOptions[year];
    const courseIds = Object.keys(catalogueThisYear);

    let courses = {};
    for (let c in courseIds) {
      const courseId = courseIds[c]
      const modalities = Object.keys(catalogueOptions[year][courseId].modality);

      let modalitiesCourse = [];
      for (let m in modalities) {
        const course = catalogueOptions[year][courseId];
        const objCourse = {
          value: course.modality[m].file,
          label: course.modality[m].name
        };
        modalitiesCourse = [...modalitiesCourse, objCourse];
      }
      courses = {...courses, [courseId]: modalitiesCourse}
    }
    cataloguesByYear = {...cataloguesByYear, [year]: courses}
  }

  return cataloguesByYear
};


// Caso não encontre retorna 0.
export const findIndexByValue = (array, value) => {
  const selectedObj = array.filter(obj => obj.value === value)[0];
  return selectedObj ? array.indexOf(selectedObj) : 0;
};

// Caso não encontre retorna 0.
export const findIndexByCatalogueLabel = (array, label) => {
  if (!label || ! array) return 0;

  let selectedObj = array.filter(obj => obj.label === label);
  if (selectedObj.length === 1) {
    return array.indexOf(selectedObj[0]);
  } else {
    return 0;
  }
};