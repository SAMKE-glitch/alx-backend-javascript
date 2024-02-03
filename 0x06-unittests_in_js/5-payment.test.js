const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message with total 120', () => {
    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message with total 20', () => {
    // Act
    sendPaymentRequestToApi(10, 10);

    // Assert
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});