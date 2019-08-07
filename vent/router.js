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

function updateVent (request, response, next) {
  // Vent
  //   .findByPk(request.params.id)
  //   .then(vent => vent.update(request.body))
  //   .then(vent => response.send(vent))
  //   .catch(next)

  Vent
    .update(
      request.body,
      {
        where: {
          id: request.params.id
        }
      }
    )
    .then(number => response.send({ number }))
    .catch(next)
}
router.put('/vent/:id', updateVent)

function deleteVent (request, response, next) {
  // Vent
  //   .findByPk(request.params.id)
  //   .then(vent => vent.destroy(request.body))
  //   .then(vent => response.send(vent))
  //   .catch(next)

  Vent
    .destroy(
      {
        where: {
          id: request.params.id
        }
      }
    )
    .then(number => response.send({ number }))
    .catch(next)
}
router.delete('/vent/:id', deleteVent)

module.exports = router
