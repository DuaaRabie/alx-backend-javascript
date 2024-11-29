const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API Integration Test', () => {
  // Existing tests...

  describe('Login Endpoint', () => {
    it('Should return welcome message with valid username', (done) => {
      request.post('http://localhost:7865/login')
        .set('Content-Type', 'application/json')
        .send({ userName: 'Betty' })
        .end((error, response, body) => {
          expect(response.statusCode).to.equal(200);
          expect(body).to.include('Welcome Betty');
          done();
        });
    });

    it('Should return error when no username is provided', (done) => {
      request.post('http://localhost:7865/login')
        .set('Content-Type', 'application/json')
        .send({})
        .end((error, response) => {
          expect(response.statusCode).to.equal(400);
          done();
        });
    });
  });

  describe('Available Payments Endpoint', () => {
    it('Should return correct payment methods', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });
});
