exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          lat: -36.8682574,
          long: 174.7656955,
          name: 'taylor',
          msg: 'hello from couch',
          added_by_user: 'auth0|61414f84d35ac900717bc280'
        },
        {
          id: 2,
          lat: -36.8682574,
          long: 174.7656955,
          name: 'frey',
          msg: 'Hello from pantry',
          added_by_user: 'auth0|61414f84d35ac900717bc280'
        },
        {
          id: 3,
          lat: -36.8682574,
          long: 174.7656955,
          name: 'xavier',
          msg: 'Hello from yoga',
          added_by_user: 'auth0|61414f84d35ac900717bc280'
        },
        {
          id: 4,
          lat: -36.8682574,
          long: 174.7656955,
          name: 'benson',
          msg: 'Hello from Bensons Home',
          added_by_user: 'auth0|61414f84d35ac900717bc280'
        },
        {
          id: 5,
          lat: 35.689487,
          long: 174.7656955,
          name: 'Somewhere in tokyo',
          msg: 'Hello from TOKYO',
          added_by_user: 'auth0|61414f84d35ac900717bc280'
        },
      ])
    })
}
