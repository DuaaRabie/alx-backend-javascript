export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateName(name);
    this._validateLength(length);
    this._validateStudents(students);
    this._name = name;
    this._lenght = length;
    this._students = students;
  }

  _validateName(name) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new TypeError('Name must be a string');
    }
  }

  _validateLength(length) {
    if (typeof length !== 'number' || length <= 0) {
      throw new TypeError('Length must be a number');
    }
  }

  _validateStudents(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._validateName(value);
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._validateLength(value);
    this._length = value;
  }

  get students() {
    return [...this._students];
  }

  set students(value) {
    this._validateStudents(value);
    this._students = [...value];
  }
}
