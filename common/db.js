const Knex = require('knex')(require('../knexfile'))
const { Model } = require('objection')

module.exports.connect = () => {
    Model.knex(Knex)
}

module.exports.knex = Knex
