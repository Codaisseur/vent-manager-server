const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5430/postgres'
const db = new Sequelize(databaseUrl)

function onSync () {
  console.log('Database synced')
}

db
  .sync({ force: false })
  .then(onSync)
  .catch(console.error)

module.exports = db
