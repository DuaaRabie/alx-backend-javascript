export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building cannot be instantiated directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (value < 0) {
      throw new Error('Square feet must be a positive number');
    }
    this._sqft = value;
  }

  static checkEvacuationWarningMessage() {
    if (!Object.prototype.hasOwnProperty.call(this.prototype, 'evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
