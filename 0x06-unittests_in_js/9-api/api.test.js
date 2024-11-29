const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const app = require('./api.js'); // Import the Express app

let server;

describe('Index page', function () {
  // "before all" hook to start the server before tests run
  before(function (done) {
    // Start the server only once before tests
    server = app.listen(7865, () => {
      console.log('API available on localhost port 7865');
      done(); // Notify Mocha that the server has started
    });
  });

  // "after all" hook to stop the server after tests complete
  after(function (done) {
    if (server) {
      server.close(done); // Close the server if it exists
    } else {
      done(); // If the server is not running, just call done to proceed
    }
  });

  // Test to check if the correct content type is returned
  it('should have the correct content type', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);  // Check the status code is 200
      expect(response.headers['content-type']).to.include('text/html');  // Check content type
      done(); // Mark the test as completed
    });
  });

  // Test to check if the correct message is returned in the response body
  it('should return correct message', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.include('Welcome to the payment system');  // Check response body
      done(); // Mark the test as completed
    });
  });
});
