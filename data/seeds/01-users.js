
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Banjo', password: 1234},
        {username: 'Kazooie', password: 1234},
      ]);
    });
};
