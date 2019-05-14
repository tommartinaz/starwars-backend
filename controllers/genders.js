const knex = require('../db/knex');

module.exports = {
    getGenders: (req, res) => {
        knex('genders')
            .select()
            .then(genders => res.json(genders));
    },
    getGender(req, res) {
        knex('genders')
            .select()
            .where('id', req.params.genderId)
            .then(genders => res.json(genders[0]));
    },
    createGender(req, res) {
        knex('genders')
            .insert(req.body, '*')
            .then(genders => res.status(201).json(genders[0]));
    },
    updateGender(req, res) {
        knex('genders')
            .update(req.body, '*')
            .where('id', req.params.genderId)
            .then(genders => res.status(203).json(genders[0]));
    },
    deleteGender(req, res) {
        knex('genders')
            .delete()
            .where('id', req.params.genderId)
            .then(res.sendStatus(204));
    }
}