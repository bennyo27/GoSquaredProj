exports.up = function(knex, Promise) {
  return knex.schema.createTable("widgets", tbl => {
    tbl.increments().unique();
    tbl
      .string("user_id")
      .references("id")
      .inTable("users")
      .notNullable();
    tbl.boolean("visitors");
    tbl.boolean("office_temp");
    tbl.boolean("plant_sched");
    tbl.boolean("weather");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("widgets");
};
