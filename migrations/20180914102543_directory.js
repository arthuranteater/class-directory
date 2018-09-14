exports.up = function(knex, Promise) {
  return knex.schema.createTable("class_directory1", mates => {
    mates.increments("id");
    mates.text("first");
    mates.text("last");
    mates.decimal("lat");
    mates.decimal("long");
    mates.string("favAnimal");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("class_directory1");
};
