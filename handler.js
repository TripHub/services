module.exports.ping = async (event, context) => {
    require('./common/db').connect()
    return {
        statusCode: 200,
        body: JSON.stringify({ status: 0 })
    }
}
