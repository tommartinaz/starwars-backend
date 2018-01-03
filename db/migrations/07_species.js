exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('species', table => {
            table.increments();
            table.string('name');
            table.integer('classification_id').references('id').inTable('classifications');
            table.integer('designation_id').references('id').inTable('designations');
            table.integer('average_height');
            table.string('skin_colors');
            table.string('hair_colors');
            table.string('eye_colors');
            table.integer('average_lifespan');
            table.integer('homeworld_id').references('id').inTable('planets');
            table.integer('language_id').references('id').inTable('languages');
            table.string('url');
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('species');  
};
