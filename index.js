const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hey, sup? How do you do? More words here');
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});