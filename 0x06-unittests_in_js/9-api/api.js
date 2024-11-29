const express = require('express');
const app = express();

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  if (!isNaN(id)) {
    res.status(200).send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Cart not found');
  }
});

// Add this line to ensure no other middleware is interfering
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});
