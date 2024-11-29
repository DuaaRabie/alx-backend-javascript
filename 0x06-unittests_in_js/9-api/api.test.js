const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API Integration Test', () => {
  // Existing tests...

  describe('Cart Page', () => {
    it('Should receive a successful response for valid cart id', (done) => {
      request.get('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.include('Payment methods for cart 12');
        done();
      });
    });

    it('Should return 404 for invalid cart id', (done) => {
      request.get('http://localhost:7865/cart/hello', (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('Should handle non-numeric cart ids', (done) => {
      request.get('http://localhost:7865/cart/abc', (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('Should handle negative cart ids', (done) => {
      request.get('http://localhost:7865/cart/-12', (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
