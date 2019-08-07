const { Router } = require('express')
const Vent = require('./index.js')

const router = new Router()

function readVents (request, response, next) {
  Vent
    .findAll()
    .then(events => response.send(events))
    .catch(next)
}
router.get('/vent', readVents)

function createVent (request, response, next) {
  Vent
    .create(request.body)
    .then(event => response.send(event))
    .catch(next)
}
router.post('/vent', createVent)

module.exports = router
