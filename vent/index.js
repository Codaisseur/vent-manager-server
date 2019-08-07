const Sequelize = require('sequelize')
const db = require('../db')

const Vent = db.define(
  'vent',
  {
    location: Sequelize.TEXT,
    open: Sequelize.BOOLEAN
  }
)

module.exports = Vent
