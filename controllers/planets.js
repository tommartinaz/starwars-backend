const knex = require('../db/knex');

module.exports = {
    getPlanets: (req, res) => {
        knex('planets')
            .select()
            .then(planets => res.json(planets));
    },
    getPlanet(req, res) {
        knex('planets')
            .select()
            .where('id', req.params.planetId)
            .then(planets => res.json(planets[0]));
    },
    createPlanet(req, res) {
        knex('planets')
            .insert(req.body, '*')
            .then(planets => res.status(201).json(planets[0]));
    },
    updatePlanet(req, res) {
        knex('planets')
            .update(req.body, '*')
            .where('id', req.params.planetId)
            .then(planets => res.status(203).json(planets[0]));
    },
    deletePlanet(req, res) {
        knex('planets')
            .delete()
            .where('id', req.params.planetId)
            .then(res.sendStatus(204));
    }
}