const characters = require('../controllers/characters');
const films = require('../controllers/films');

module.exports = (app) => {
    app.get('/api/characters', characters.get_all_characters);
    app.get('/api/films/:id', films.get_one_film);
}