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
    tbl.boolean("visitors").defaultTo(false);
    tbl.boolean("office_temp").defaultTo(false);
    tbl.boolean("plant_sched").defaultTo(false);
    tbl.boolean("weather").defaultTo(false);
    tbl.boolean("num_drinks").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
