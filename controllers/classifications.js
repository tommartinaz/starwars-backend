const knex = require('../db/knex');

module.exports = {
    getClassifications: (req, res) => {
        knex('classifications')
            .select()
            .then(classifications => res.json(classifications));
    },
    getClassification(req, res) {
        knex('classifications')
            .select()
            .where('id', req.params.classificationId)
            .then(classifications => res.json(classifications[0]));
    },
    createClassification(req, res) {
        knex('classifications')
            .insert(req.body, '*')
            .then(classifications => res.status(201).json(classifications[0]));
    },
    updateClassification(req, res) {
        knex('classifications')
            .update(req.body, '*')
            .where('id', req.params.classificationId)
            .then(classifications => res.status(203).json(classifications[0]));
    },
    deleteClassification(req, res) {
        knex('classifications')
            .delete()
            .where('id', req.params.classificationId)
            .then(res.sendStatus(204));
    }
}