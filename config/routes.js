const characters = require('../controllers/characters');
const films = require('../controllers/films');
const languages = require('../controllers/languages');
const genders = require('../controllers/genders');
const planets = require('../controllers/planets');
const designations = require('../controllers/designations');
const classifications = require('../controllers/classifications');
const species = require('../controllers/species');

module.exports = (app) => {
    app.get('/api/characters', characters.get_all_characters);
    app.post('/api/characters', characters.createCharacter);
    app.get('/api/characters/:characterId', characters.getCharacter);
    app.patch('/api/characters/:characterId', characters.updateCharacter);
    app.delete('/api/characters/:characterId', characters.deleteCharacter);

    app.get('/api/films', films.getMovies);
    app.post('/api/films', films.createMovie);
    app.get('/api/films/:filmId', films.getMovie);
    app.patch('/api/films/:filmId', films.updateMovie);
    app.delete('/api/films/:filmId', films.deleteMovie);

    app.get('/api/languages', languages.getLanguages);
    app.post('/api/languages', languages.createLanguage);
    app.get('/api/languages/:languageId', languages.getLanguage);
    app.patch('/api/languages/:languageId', languages.updateLanguage);
    app.delete('/api/languages/:languageId', languages.deleteLanguage);

    app.get('/api/genders', genders.getGenders);
    app.post('/api/genders', genders.createGender);
    app.get('/api/genders/:genderId', genders.getGender);
    app.patch('/api/genders/:genderId', genders.updateGender);
    app.delete('/api/genders/:genderId', genders.deleteGender);

    app.get('/api/planets', planets.getPlanets);
    app.post('/api/planets', planets.createPlanet);
    app.get('/api/planets/:planetId', planets.getPlanet);
    app.patch('/api/planets/:planetId', planets.updatePlanet);
    app.delete('/api/planets/:planetId', planets.deletePlanet);

    app.get('/api/designations', designations.getDesignations);
    app.post('/api/designations', designations.createDesignation);
    app.get('/api/designations/designationId', designations.getDesignation);
    app.patch('/api/designations/:designationId', designations.updateDesignation);
    app.delete('/api/designations/:designationId', designations.deleteDesignation);

    app.get('/api/classifications', classifications.getClassifications);
    app.post('/api/classifications', classifications.createClassification);
    app.get('/api/classifications/:classificationId', classifications.getClassification);
    app.patch('/api/classifications/:classificationId', classifications.updateClassification);
    app.delete('/api/classifications/:classificationId', classifications.deleteClassification);

    app.get('/api/species', species.getAllSpecies);
    app.post('/api/species', species.createSpecies);
    app.get('/api/species/:speciesId', species.getOneSpecies);
    app.patch('/api/species/:speciesId', species.updateSpecies);
    app.delete('/api/species/:speciesId', species.deleteSpecies);
}