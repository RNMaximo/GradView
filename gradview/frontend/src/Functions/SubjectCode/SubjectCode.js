export const getCleanCode = (subjectCode) => {
  if (subjectCode.length == 6) {
    return subjectCode.substring(1, 6);
  }
  return subjectCode;
};

export const isPartialRequisite = (requisite) => {
  return requisite[0] === '*';
};

export const getVisualCode = (subjectCode) => {
  return subjectCode.replace("_", " ");
};