exports.up = function (knex) {
  return knex.schema.createTable("fruits", (tbl) => {
    tbl.increments(); // leave blank and automatically makes auto inc PK
    tbl.text("fruit_name", 256).unique().notNullable();
    tbl.float("avg_weight").notNullable();
    tbl.boolean("is_delicious").default(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("fruits");
};
