exports.up = function(knex, Promise) {
  return knex.schema.createTable("persons", table => {
    table.increments().primary();
    table.string("fullname");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("persons");
};
