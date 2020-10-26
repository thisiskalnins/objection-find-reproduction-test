exports.seed = function(knex) {
  return knex('animals').del()
    .then(function () {
      return knex('animals').insert([
        { id: 1, ownerId: 1, name: 'Rodger' },
        { id: 2, ownerId: 1, name: 'Alfie' },
        { id: 3, ownerId: 2, name: 'Tylor' },
        { id: 4, ownerId: 3, name: 'Biscuit' }
      ]);
    });
};
