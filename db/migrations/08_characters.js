exports.up = function(knex, Promise) {
    return knex.schema.createTable('characters', table => {
        table.increments();
        table.string('name');
        table.integer('height');
        table.float('mass');
        table.string('hair_color');
        table.string('skin_color');
        table.string('eye_color');
        table.string('birth_year');
        table.integer('gender_id').references('id').inTable('genders');
        table.integer('homeworld_id').references('id').inTable('planets');
        table.integer('species_id').references('id').inTable('species');
        table.string('url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('characters');
};
