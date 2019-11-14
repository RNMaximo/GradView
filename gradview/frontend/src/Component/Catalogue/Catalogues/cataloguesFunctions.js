import catalogueOptions from './allCatalogues';


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