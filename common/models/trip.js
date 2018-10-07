const { Model } = require('objection')

class TripModel extends Model {
    static get tableName () {
        return 'trip'
    }
}

module.exports = TripModel
