
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('designations').del()
    .then(function () {
      // Inserts seed entries
      return knex('designations').insert([
        {designation: 'sentient'},
        {designation: 'reptilian'}
      ]);
    });
};
