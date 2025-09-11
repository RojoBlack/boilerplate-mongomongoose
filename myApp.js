require('dotenv').config();  // para local, opcional en Render
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware para body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // si también vas a usar JSON

// Conexión a MongoDB Atlas usando la variable de entorno
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Opcional: un log para confirmar conexión
mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB Atlas');
});

// ---- Definición esquema y modelo Person ----
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

// 👇 Aquí viene lo que freeCodeCamp espera:
exports.PersonModel = Person;

// (el resto de las funciones de CRUD las vas a completar en pasos posteriores)

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  done(null /*, data*/);
};

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
