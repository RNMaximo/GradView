export const getCleanCode = (subjectCode) => {
  return subjectCode.substring(0, 5);
};

export const isPartialRequisite = (requisite) => {
  return requisite[5] === '*';
};