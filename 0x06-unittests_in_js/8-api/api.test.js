const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Index page', () => {
  before(function (done) {
    this.timeout(5000);
    server;
    done();
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system\n');
      done();
    });
  });

  after(function (done) {
    if (server && server.close) {
      server.close(done);
    } else {
      done();
    }
  });
});