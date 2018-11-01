const express = require('express');
const fibonacci = require('./fibonacci');
const app = express();

app.get('/fib', (req, res) => {
  const n = Number(req.query.n)
  try {
    res.send(String(fibonacci(n)));
  } catch (e) {
    res.status(500).send(e.message)
  }
})

module.exports = app;