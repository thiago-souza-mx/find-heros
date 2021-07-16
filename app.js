const express = require('express');
const controller = require("./src/controllers");
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('API de super-heróis')
})

app.get('/search', controller.search );

app.get('/hero/:slug', controller.hero );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})