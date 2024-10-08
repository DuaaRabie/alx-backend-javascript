export default function getStudentIdsSum(array) {
  return array.reduce((acc, obj) => acc + obj.id, 0);
}
