const express = require('express');
const validateId = require('./middlwares/validate');
const existingId = require('./middlwares/existingId');
const teams = require('./middlwares/teams');
const app = express();
require('express-async-errors');
const apiCredentials = require('./middlwares/apiCredentials');

let nextId = 3;



app.use(express.json());
app.use(apiCredentials);

app.get('/teams', (req, res) => {
  res.status(200).json(teams);
});


app.get('/teams/:id', existingId, validateId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));
  if(team) {
    res.status(200).json(team);
  }
  res.sendStatus(404);
});

app.post('/teams', validateId, (req, res) => {
  const requiredProperties = ['nome', 'sigla'];

  if(requiredProperties.every((property) => property in req.body)) {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    return res.status(201).json(team);
  } else {
    return res.sendStatus(404);
  }
});

app.put('/teams/:id', existingId, validateId, (req, res) => {
  const id = Number(req.params.id);
  const requiredProperties = ['nome', 'sigla'];
  const teamToChange = teams.find((t) => t.id === id);
  
  const index = teams.indexOf(teamToChange);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(teams);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});


module.exports = app;