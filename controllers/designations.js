const knex = require('../db/knex');

module.exports = {
    getDesignations: (req, res) => {
        knex('designations')
            .select()
            .then(designations => res.json(designations));
    },
    getDesignation(req, res) {
        knex('designations')
            .select()
            .where('id', req.params.designationId)
            .then(designations => res.json(designations[0]));
    },
    createDesignation(req, res) {
        knex('designations')
            .insert(req.body, '*')
            .then(designations => res.status(201).json(designations[0]));
    },
    updateDesignation(req, res) {
        knex('designations')
            .update(req.body, '*')
            .where('id', req.params.designationId)
            .then(designations => res.status(203).json(designations[0]));
    },
    deleteDesignation(req, res) {
        knex('designations')
            .delete()
            .where('id', req.params.designationId)
            .then(res.sendStatus(204));
    }
}