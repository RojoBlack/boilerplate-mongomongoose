require('dotenv').config();
const mongoose = require('mongoose');

// Conexión a MongoDB Atlas usando variable de entorno
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ---- Definición del esquema y modelo Person ----
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model('Person', personSchema);

// 👇 Exportar el modelo para los tests de FCC
exports.PersonModel = Person;

// ---- Funciones que FCC va probando ----

// Reto actual: crear y guardar un registro de un modelo
const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'John Doe',
    age: 25,
    favoriteFoods: ['pizza', 'pasta'],
  });

  person.save(function (err, data) {
    if (err) return done(err);
    return done(null, data);
  });
};

// (el resto de las funciones se completan en los siguientes retos)
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return done(err);
    return done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if (err) return done(err);

    // Añadir la comida al array
    person.favoriteFoods.push(foodToAdd);

    // Guardar el documento modificado
    person.save((err, updatedPerson) => {
      if (err) return done(err);
      return done(null, updatedPerson);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate(
    { name: personName },        // criterio de búsqueda
    { age: ageToSet },           // actualización
    { new: true },               // para devolver el documento actualizado
    (err, updatedPerson) => {
      if (err) return done(err);
      return done(null, updatedPerson);
    }
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return done(err);
    return done(null, removedPerson);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  Person.remove({ name: nameToRemove }, (err, result) => {
    if (err) return done(err);
    return done(null, result);
  });
};


const queryChain = (done) => {
  const foodToSearch = 'burrito';
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
