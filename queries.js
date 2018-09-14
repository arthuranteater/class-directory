const connection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(connection);

module.exports = {
  listAll() {
    return knex("class_directory1");
  },
  getById(id) {
    return knex
      .select()
      .from("class_directory1")
      .where("id", id);
  },
  createMate(mate) {
    return knex("class_directory1").insert(mate, ["first", "last"]);
  },
  updateMate(id, body) {
    return knex
      .select()
      .from("class_directory1")
      .where("id", id)
      .update(body)
      .returning("*");
  },
  deleteMate(id) {
    return knex
      .select()
      .from("class_directory1")
      .where("id", id)
      .del()
      .returning("*");
  }
};
