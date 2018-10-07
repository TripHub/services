const { knex } = require('../../common/db')

module.exports.migrateLatest = () => {
    return knex.migrate.latest()
}
