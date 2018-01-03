exports.up = function(knex, Promise) {
    return knex.schema.createTable('planets', table => {
        table.increments();
        table.string('name');
        table.integer('rotation_period');
        table.integer('orbital_period');
        table.integer('diameter');
        table.string('climate');
        table.string('gravity');
        table.string('terrain');
        table.string('surface_water');
        table.bigInteger('population');
        table.string('url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('planets');
};