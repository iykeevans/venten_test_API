// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes');
const port = process.env.PORT || 8080;

// start up express
const app = express();

// Use bodyparser
app.use(bodyParser.json());

// Use CORS
app.use(cors());

// Use routes
app.use(routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

module.exports = app;