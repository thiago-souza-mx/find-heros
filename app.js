const express = require('express');
const controller = require("./src/controllers");
const app = express();
const port = process.env.PORT || 3000;

app.use('/',express.static("public"))

app.get('/search', controller.search );

app.get('/hero/:slug', controller.hero );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})