const express = require('express')
require("dotenv").config();
const cors = require('cors')
const ApiRoutes = require('./routers')
const app = express()

//Cors
app.use(cors())

//Lectura y parseo del body
app.use( express.json() )

//Ruta
app.use('/v1', ApiRoutes)

//Escuchar peticiones

app.get('/', (req, res) => {
    res.status(200).json({message: "Ir a la ruta /v1"})
})

//Ruta Base
app.get('/v1', (req, res) => {
    res.status(200).json({message: "Personal Pay"})
})


module.exports = app;