
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments(); //auto increment ID

        tbl
            .string('username', 25)
            .notNullable()
            .unique()
        tbl
            .string('password', 25)
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
