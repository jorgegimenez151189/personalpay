const express = require('express')
const router = express.Router()
const locationControllers = require('../controllers/location')

router.get(
    '/location',
    locationControllers.getLocation
)

module.exports = router