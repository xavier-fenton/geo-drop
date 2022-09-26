exports.up = function (knex) {
  return knex.schema.alterTable('messages', (table) => {
    table.string('msg_auth0_id').references('users.auth0_id')
    table.date('date_created');
    table.string('image_path');
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('messages', (table) => {
    table.dropColumn('msg_auth0_id');
    table.dropColumn('date_created');
    table.dropColumn('image_path');
  })
}
