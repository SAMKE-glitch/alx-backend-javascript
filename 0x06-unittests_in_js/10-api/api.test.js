const request = require('request');
const { expect } = require('chai');
const server = require('./api');

describe('Index page', () => {
  before(function (done) {
    const port = 7865;
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
      done();
    });
  });

  it('Correct status code?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  after(function (done) {
    server.close(done);
  });
});

describe('Cart page', () => {
  it('Correct status code when :id is a number?', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('Correct result for POST /login?', (done) => {
    const postData = {
      userName: 'Betty'
    };

    request.post(
      {
        url: 'http://localhost:7865/login',
        json: postData
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});

describe('Available payments endpoint', () => {
  it('Correct result for GET /available_payments?', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedBody = '{"payment_methods":{"credit_cards":true,"paypal":false}}';
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(expectedBody);
      done();
    });
  });
});