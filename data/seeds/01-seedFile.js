const users = [
  {
    password: "$2a$08$WfkFkg6EPrEm/iXPBv8wl.QN7gCH1BBjY7LgpkH5JxG/K3voyQs4W",
    email: "john@email.com",
    username: "spacecowboy",
  },
  {
    password: "password",
    email: "bar@email.com",
    username: "ridgerhino",
  },
];

exports.seed = async function (knex) {
  await knex("users").insert(users);
};
