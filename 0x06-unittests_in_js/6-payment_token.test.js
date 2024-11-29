// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function() {
  it('should return a successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Check the response from the promise
        expect(response).to.have.property('data').equal('Successful response from the API');
        done(); // Call done to signal that the test is complete
      })
      .catch(done); // If there is an error, pass it to the done callback
  });
});
