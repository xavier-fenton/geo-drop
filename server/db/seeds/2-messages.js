exports.seed = function (knex) {
  return knex('messages')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {
          id: 1,
          lat: -36.8682574,
          long: 174.7656955,
          name: 'placeholder',
          msg: 'Hello from couch',
          msg_auth0_id: 'auth0|632fb6a4b8b1424ca462bdb4',
          date_created: new Date(Date.now()),
          image_path: '/',
        },
        {
          id: 2,
          lat: -36.8682574,
          long: 174.7656955,
          name: 'placeholder',
          msg: 'Hello from pantry',
          msg_auth0_id: 'auth0|632fb6a4b8b1424ca462bdb4',
          date_created: new Date(Date.now()),
          image_path: '/',
        },
        {
          id: 3,
          lat: -36.8682574,
          long: 174.7656955,
          name: 'placeholder',
          msg: 'Hello from yoga',
          msg_auth0_id: 'auth0|61414f84d35ac900717bc280',
          date_created: new Date(Date.now()),
          image_path: '/',
        },
        {
          id: 4,
          lat: -36.8682574,
          long: 174.7656955,
          name: 'placeholder',
          msg: 'Hello from Bensons Home',
          msg_auth0_id: 'auth0|61414f84d35ac900717bc280',
          date_created: new Date(Date.now()),
          image_path: '/',
        },
        {
          id: 5,
          lat: 35.689487,
          long: 174.7656955,
          name: 'placeholder',
          msg: 'Hello from TOKYO',
          msg_auth0_id: 'auth0|61414f84d35ac900717bc280',
          date_created: new Date(Date.now()),
          image_path: '/',
        },
        {
          id: 6,
          lat: -37.1982336,
          long: 174.8893696,
          name: 'Hello From XAVIERS',
          msg: 'testing testing 123',
        },
      ])
    })
}
