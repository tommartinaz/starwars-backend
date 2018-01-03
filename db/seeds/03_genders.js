
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genders').del()
    .then(function () {
      // Inserts seed entries
      return knex('genders').insert([
        {gender: 'male'},
        {gender: 'female'},
        {gender: 'hermaphrodite'},
        {gender: 'n/a'}
      ]);
    });
};
