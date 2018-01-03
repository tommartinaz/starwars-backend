exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('classifications', table => {
            table.increments();
            table.string('classification')
    })    
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('classifications');  
};