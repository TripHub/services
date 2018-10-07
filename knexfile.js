console.log('env', process.env)
console.log('DB_NAME', process.env.DB_NAME)
console.log('DB_USER', process.env.DB_USER)
console.log('DB_PASSWORD', process.env.DB_PASSWORD)
console.log('DB_HOST', process.env.DB_HOST)

module.exports = {
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    pool: {
        min: 2,
        max: 10
    }
}
