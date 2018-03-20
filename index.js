const express = require('express');
const path = require('path');

const app = express();
const port = 7777;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => `Listerning on port ${port}`);
