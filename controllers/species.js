const knex = require('../db/knex');

module.exports = {
    getAllSpecies: (req, res) => {
        knex('species')
            .select()
            .then(species => res.json(species));
    },
    getOneSpecies(req, res) {
        knex('species')
            .select()
            .where('id', req.params.speciesId)
            .then(species => res.json(species[0]));
    },
    createSpecies(req, res) {
        knex('species')
            .insert(req.body, '*')
            .then(species => res.status(201).json(species[0]));
    },
    updateSpecies(req, res) {
        knex('species')
            .update(req.body, '*')
            .where('id', req.params.speciesId)
            .then(species => res.status(203).json(species[0]));
    },
    deleteSpecies(req, res) {
        knex('species')
            .delete()
            .where('id', req.params.speciesId)
            .then(res.sendStatus(204));
    }
}