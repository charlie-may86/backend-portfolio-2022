exports.up = async function (knex) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments("user_id");
    // tbl.string("username", 200).notNullable();
    tbl.string("password", 200).notNullable();
    tbl.string("email", 200).notNullable().unique();
    tbl.string("username", 200).notNullable().unique();
    tbl.timestamps(false, true);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
