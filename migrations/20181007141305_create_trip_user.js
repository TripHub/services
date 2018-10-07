const TABLE_NAME = 'trip_user'

exports.up = function(knex, Promise) {
    return knex.schema.createTable(TABLE_NAME, table => {
        table.timestamps()

        table.integer('trip_id').unsigned().notNullable().references('trip.id')
        table.string('user_id').notNullable()
        table.enu('role', ['member', 'admin'])

        table.primary(['trip_id', 'user_id'])
        table.index(['trip_id', 'user_id'])
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable(TABLE_NAME)
}
