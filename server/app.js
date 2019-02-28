// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

// start up express
const app = express();

// Use bodyparser
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome To THE API' });
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

module.exports = app;