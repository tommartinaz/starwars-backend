exports.up = function(knex, Promise) {
    return knex.schema.createTable('designations', table=> {
        table.increments();
        table.string('designation')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('designations');  
};