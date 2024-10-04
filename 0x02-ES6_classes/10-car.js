class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    const privateStateSymbol = Symbol('privateState');
    this[privateStateSymbol] = {
      brand,
      motor,
      color,
    };
  }

  static get privateStateSymbol() {
    return Symbol('privateState');
  }

  cloneCar() {
    const privateState = this[this.constructor.privateStateSymbol];

    if (!privateState) {
      return new this.constructor();
    }

    return new this.constructor(
      privateState.brand,
      privateState.motor,
      privateState.color,
    );
  }
}

export default Car;
