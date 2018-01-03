exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classifications')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('classifications').insert([
        {
          "classification": "gastropod"
        }, {
          "classification": "mammal"
        }, {
          "classification": "reptilian"
        }, {
          "classification": "amphibian"
        }, {
          "classification": "unknown"
        }, {
          "classification": "mammals"
        }, {
          "classification": "insectoid"
        }, {
          "classification": "artificial"
        }
      ]);
    });
};
