exports.up = function(knex, Promise) {
  return knex.schema.createTable("animals", table => {
    table.increments().primary();
    table.integer("ownerId").unsigned().references("persons.id")
    table.string("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("animals");
};
