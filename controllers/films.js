const knex = require('../db/knex');

module.exports = {
    getMovies(req, res) {
        knex('films')
            .select()
            .then(films => res.json(films));
    },
    getMovie(req, res) {
        knex('films')
            .select()
            .where('id', req.params.filmId)
            .then(films => res.json(films[0]));
    },
    createMovie(req, res) {
        knex('films')
            .insert(req.body, '*')
            .then(films => res.status(201).json(films[0]));
    },
    updateMovie(req, res) {
        knex('films')
            .update(req.body, '*')
            .where('id', req.params.filmId)
            .then(films => res.status(203).json(films[0]));
    },
    deleteMovie(req, res) {
        knex('films')
            .delete()
            .where('id', req.params.filmId)
            .then(res.sendStatus(204));
    }
}