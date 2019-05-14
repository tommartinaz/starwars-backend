const knex = require('../db/knex');

module.exports = {
    getLanguages(req, res) {
        knex('languages')
            .select()
            .then(languages => res.json(languages));
    },
    getLanguage(req, res) {
        knex('languages')
            .select()
            .where('id', req.params.languageId)
            .then(languages => res.json(languages[0]));
    },
    createLanguage(req, res) {
        knex('languages')
            .insert(req.body, '*')
            .then(languages => res.status(201).json(languages[0]));
    },
    updateLanguage(req, res) {
        knex('languages')
            .update(req.body, '*')
            .where('id', req.params.languageId)
            .then(languages => res.status(203).json(languages[0]));
    },
    deleteLanguage(req, res) {
        knex('languages')
            .delete()
            .where('id', req.params.languageId)
            .then(res.sendStatus(204));
    }
}