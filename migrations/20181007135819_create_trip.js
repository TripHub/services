const TABLE_NAME = 'trip'

exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.increments('id')
        table.timestamps()

        table.string('name').notNullable()
        table.text('description')
        table.string('created_by').notNullable()
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(TABLE_NAME)
}
