// eslint-disable-next-line no-unused-vars
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static converPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || !Number.isFinite(amount)) {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number' || !Number.isFinite(conversionRate)) {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}
