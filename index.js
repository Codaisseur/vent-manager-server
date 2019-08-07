const express = require('express')
const db = require('./db')
const Vent = require('./vent')

const app = express()

const port = process.env.PORT || 5000
function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port, onListen)
