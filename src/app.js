const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const {
  add,
} = require('./lib/numbers');

const app = express();

app.get('/strings/hello/:word', (req, res) => {
  const param = req.params.word;
  res.status(200).json({ result: sayHello(param) });
});

app.get('/strings/upper/:word', (req, res) => {
  const param = req.params.word;
  res.status(200).json({ result: uppercase(param) });
});

app.get('/strings/lower/:word', (req, res) => {
  const param = req.params.word;
  res.status(200).json({ result: lowercase(param) });
});

app.get('/strings/first-characters/:word', (req, res) => {
  if (req.query.length) {
    const result = { result: firstCharacters(req.params.word, req.query.length) };
    res.status(200).json(result);
  } else {
    res.status(200).json({ result: firstCharacter(req.params.word) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const isNumeric = (string) => { return !Number.isNaN(parseInt(string)); };

  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

module.exports = app;
