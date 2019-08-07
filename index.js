const express = require('express')
const ventRouter = require('./vent/router')
const bodyParser = require('body-parser')

const app = express()

const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(ventRouter)

const port = process.env.PORT || 5000
function onListen () {
  console.log(`Listening on :${port}`)
}

app.listen(port, onListen)
