const express = require('express');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  return res.status(200).json({message:'Sua primeira api construída.'});
});


// Exemplo de requisição com QUERY STRINGS
app.get('/search?', (req, res) => {
  console.log(req.query.name);
  console.log(req.query.age);
  return res.status(200).send('Ok');
});


// Exemplo de requisição com parâmetros
app.post('/people/:id', (req, res) => {
  console.log(req.params.id);
  return res.status(200).send('People ok');
});

// Exemplo de requisição com corpo ( body ) geralmente post e put
app.post('/tasks', (req, res) => {
  console.log('Got body', req.body);
  res.status(200).send('Tasks ok');
});

module.exports = app;