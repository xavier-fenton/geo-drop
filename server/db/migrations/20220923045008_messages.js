exports.up = function (knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id').primary()
    table.string('added_by_user').references('users.auth0_id')
    table.integer('lat')
    table.integer('long')
    table.string('name')
    table.string('msg')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('messages')
}
