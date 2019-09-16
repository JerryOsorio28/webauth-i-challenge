
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments(); //auto increment ID
    })
};

exports.down = function(knex) {
  
};
