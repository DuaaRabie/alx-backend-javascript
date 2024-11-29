const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API Integration Test', () => {
  it('Should receive a successful response from the API', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include('Welcome to the payment system');
      done();
    });
  });

  it('Should receive a correct status code', (done) => {
    request.get('http://localhost:7865/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Should receive the expected result', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.include('Welcome to the payment system');
      done();
    });
  });

  it('Should have a running server', (done) => {
    request.get('http://localhost:7865/', (error, response) => {
      if (error) {
        throw new Error('Server is not running');
      }
      done();
    });
  });
});
