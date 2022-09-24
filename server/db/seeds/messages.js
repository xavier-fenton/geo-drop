exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          lat: -36.8645,
          long: 174.7766,
          name: 'taylor',
          msg: 'hello from couch',
        },
        {
          id: 2,
          lat: -36.8647,
          long: 174.77652,
          name: 'frey',
          msg: 'Hello from pantry',
        },
        {
          id: 3,
          lat: -36.8645,
          long: 174.7765,
          name: 'xavier',
          msg: 'Hello from yoga',
        },
        {
          id: 4,
          lat: -36.88272252836678,
          long: 174.7613017129278,
          name: 'benson',
          msg: 'Hello from Bensons Home',
        },
      ])
    })
}
