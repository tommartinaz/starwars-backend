exports.up = function(knex, Promise) {
    return knex.schema.createTable('languages', table => {
        table.increments();
        table.string('language');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('languages');
};
