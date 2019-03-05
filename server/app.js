// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const port = process.env.PORT || 8080;

// start up express
const app = express();

// Use bodyparser
app.use(bodyParser.json());

// Use CORS
app.use(cors());

// Get static files from react app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Use routes
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

module.exports = app;
