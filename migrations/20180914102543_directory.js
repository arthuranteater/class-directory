exports.up = function(knex, Promise) {
  return knex.schema.createTable("class_directory1", mates => {
    mates.increments("id");
  });
};

exports.down = function(knex, Promise) {};
