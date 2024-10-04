export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (!value || typeof value !== 'string' || value.length !== 3) {
      throw new Error('Invalid airport code. Must be a 3-letter string.');
    }
    this._code = value.toUpperCase();
  }

  toString() {
    return `Airport [${this.code}]`;
  }
}
