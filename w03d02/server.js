const express = require('express');
const morgan = require('morgan');
const pets = require('./data/pets');

const app = express();
const port = 1399;

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev')); // logger
app.use(express.urlencoded({ extended: false })); // creates and populates req.body

// READ GET /pets
app.get('/pets', (req, res) => {
  // res.json(pets) // send data to the browser as raw JSON
  const templateVars = {
    pets: pets,
  };

  res.render('pets', templateVars);
});

// CREATE
// serve up the form
app.get('/pets/new', (req, res) => {
  res.render('new-pet-form');
});

// listen for the post request
app.post('/pets', (req, res) => {
  // pull the info off of the body
  const name = req.body.name;
  const breed = req.body.breed;
  const age = req.body.age;
  const type = req.body.type;

  // create a new pet object
  const newPet = {
    name: name,
    type: type,
    age: age,
    breed: breed,
  };

  // generate a random id for the new pet
  const newId = Math.random().toString(36).slice(2); // randomly generated string

  // update the pets object
  pets[newId] = newPet;
  console.log(pets);

  // respond to the user in some way
  res.redirect('/pets');
});

// DELETE
// /pets/pet3/delete
app.post('/pets/:petId/delete', (req, res) => {
  // access the url parameters
  const petId = req.params.petId; // pet3

  // delete the specified key from the pets object
  delete pets[petId];

  // redirect the user somewhere
  res.redirect('/pets');
});

// UPDATE

// serve up the edit form
app.get('/pets/:petId', (req, res) => {
  // grab the petId from the url parameter
  const petId = req.params.petId;

  // look up the pet information
  const pet = pets[petId];

  const templateVars = {
    pet: pet,
    petId: petId,
  };

  res.render('edit-pet-form', templateVars);
});

// listen for the POST request of the form
app.post('/pets/:petId/edit', (req, res) => {
  // grab the url parameter
  const petId = req.params.petId;

  // pull the info off of the body
  const name = req.body.name;
  const breed = req.body.breed;
  const age = req.body.age;
  const type = req.body.type;

  // retrieve the existing pet
  const pet = pets[petId];

  // update the existing pet
  pet.name = name;
  pet.breed = breed;
  pet.type = type;
  pet.age = age;

  // redirect the user somewhere
  res.redirect('/pets');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
