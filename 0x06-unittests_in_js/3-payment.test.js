const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with correct arguments', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
