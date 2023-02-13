const express = require('express');
const readFile = require('./utils/readFile');

const app = express();
app.use(express.json());


app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readFile();
  console.log(movies);
  const movieById = await movies.find((movie) => movie.id === Number(id));
  return res.status(200).json(movieById);
});

app.get('/movies', async (req, res) => {
  const movies = await readFile();
  return res.status(200).json(movies);
});

app.post('/movies', async (req, res) => {
  const newMovie = { ...req.body };
  const movies = await readFile();
  await movies.push(newMovie);

  return res.status(201).json({ movie: newMovie });
});


app.put('/movies/:id', async (req, res) => {
  const readArchive = await readFile();
  const { id } = req.params;
  const { movie, price } = req.body;
  const verifyMovieById = await readArchive.find((movie) => movie.id === Number(id));

  if(!verifyMovieById) {
    res.status(404).json({message: "Error 404, movie not found"});
  };
  verifyMovieById.movie = await movie;
  verifyMovieById.price = await price;
  res.status(200).json(verifyMovieById);
});


app.delete('/movies/:id', async (req, res) => {""
  const readArchive = await readFile();
  const { id } = req.params;
  
  const deleteById = readArchive.findIndex((movie) => movie.id === Number(id));
  await readArchive.splice(deleteById, 1);
  return res.status(200).end();
});



module.exports = app;
