export default function createIteratorObject(report) {
  return report.allEmployees[Symbol.iterator]();
}
