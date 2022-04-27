const express = require('express')
const router = express.Router()
const forecastControllers = require('../controllers/forecast')

router.get(
    '/forecast',
    forecastControllers.getLocationForecast
)

router.get(
    '/forecast/:city',
    forecastControllers.getLocationForecastCity

)
module.exports = router