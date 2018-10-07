module.exports.ping = async (event, context) => {
    require('./common/db').connect()
    return {
        statusCode: 200,
        body: JSON.stringify({ status: 0 })
    }
}

module.exports.migrate = async (event, context) => {
    return await require('./functions/db-manager/migrate').migrateLatest()
        .then(() => ({
            statusCode: 200
        }))
        .catch(error => ({
            statusCode: 500,
            body: JSON.stringify({ error })
        }))
}
