exports.up = async function (knex) {
  await knex.schema.createTable("users", (tbl) => {
    tbl.increments("user_id");
    // tbl.string("username", 200).notNullable();
    tbl.string("password", 200).notNullable();
    tbl.string("email", 200).notNullable().unique();
    tbl.string("username", 200).notNullable().unique();
    tbl.timestamps(false, true);
  });

  await knex.schema.createTable("picks", (tbl) => {
    tbl.increments("pick_id");
    tbl.string("username", 200).notNullable();
    tbl.string("winner", 200).notNullable();
    tbl.string("spread", 200).notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users").dropTableIfExists("picks");
};
