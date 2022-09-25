exports.up = function (knex) {
  return knex.schema.alterTable('messages', (table) => {
    table.string('msg_auth0_id');
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('messages', (table) => {
    table.dropColum('msg_auth0_id');
  })
}
