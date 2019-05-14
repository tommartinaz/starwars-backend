const characters = require('../controllers/characters');
const films = require('../controllers/films');
const languages = require('../controllers/languages');
const genders = require('../controllers/genders');

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
}