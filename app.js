const express = require('express');
const ls = require('ls');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const all_files = ls('/*')
  res.send(JSON.stringify(all_files))
});

app.listen(port);
console.log(`App running on http://localhost:${port}`);
