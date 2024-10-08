export default function getListStudentIds(array) {
  if (!array || typeof array !== 'object' || array.length === undefined) {
    return [];
  }
  return array.map((obj) => obj.id);
}
