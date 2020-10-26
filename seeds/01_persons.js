exports.seed = function(knex) {
  return knex('persons').del()
    .then(function () {
      return knex('persons').insert([
        { id: 1, fullname: 'Brad Pitt' },
        { id: 2, fullname: 'Tom Hanks' },
        { id: 3, fullname: 'Leonardo DiCaprio' }
      ]);
    });
};
