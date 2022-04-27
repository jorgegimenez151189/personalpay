const express = require('express')
const router = express.Router()
const currentControllers = require('../controllers/current')

router.get(
    '/current',
    currentControllers.getLocationWeather
)

router.get(
    '/current/:city',
    currentControllers.getLocationCity

)
module.exports = router