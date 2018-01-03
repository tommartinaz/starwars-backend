exports.up = function(knex, Promise) {
    return knex.schema.createTable('m2m_char_film', table => {
        table.increments();
        table.integer('character_id').references('id').inTable('characters');
        table.integer('film_id').references('id').inTable('films');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('m2m_char_film');
};
