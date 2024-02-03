const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM', () => {
    // Arrange
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Clean up
    calculateNumberSpy.restore();
  });
});