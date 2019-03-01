// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const port = process.env.PORT || 8080;

// start up express
const app = express();

// Use bodyparser
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

module.exports = app;