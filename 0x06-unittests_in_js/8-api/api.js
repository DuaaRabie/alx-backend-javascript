const express = require('express');
const app = express();

// Define a route for the index page
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Start the server and listen on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app; // Export the app to be used in tests
