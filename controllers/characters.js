const knex = require('../db/knex');

module.exports = {
    get_all_characters: (req, res) => {
        knex('characters')
            .select()
            .then(characters => res.json(characters));
    },
    getCharacter(req, res) {
        knex('characters')
            .select()
            .where('id', req.params.characterId)
            .then(characters => res.json(characters[0]));
    },
    createCharacter(req, res) {
        knex('characters')
            .insert(req.body, '*')
            .then(characters => res.status(201).json(characters[0]));
    },
    updateCharacter(req, res) {
        knex('characters')
            .update(req.body, '*')
            .where('id', req.params.characterId)
            .then(characters => res.status(203).json(characters[0]));
    },
    deleteCharacter(req, res) {
        knex('characters')
            .delete()
            .where('id', req.params.characterId)
            .then(res.sendStatus(204));
    }
}