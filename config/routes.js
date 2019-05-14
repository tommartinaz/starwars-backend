const characters = require('../controllers/characters');
const films = require('../controllers/films');

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
}