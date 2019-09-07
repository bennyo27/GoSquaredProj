exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments().unique();
    // id from auth0
    tbl
      .string("username")
      .notNullable()
      .unique();
    tbl
      .string("password")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
