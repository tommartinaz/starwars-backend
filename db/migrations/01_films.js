exports.up = function(knex, Promise) {
    return knex.schema.createTable('films', table=> {
        table.increments();
        table.string('title');
        table.integer('episode_id');
        table.text('opening_crawl');
        table.string('director');
        table.string('producer');
        table.date('release_date');
        table.string('url');
    })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('films');
};
