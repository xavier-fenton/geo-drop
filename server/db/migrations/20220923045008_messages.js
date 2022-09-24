exports.up = function (knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id').primary()
    table.integer('lat')
    table.integer('long')
    table.string('name')
    table.string('msg')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('messages')
}
