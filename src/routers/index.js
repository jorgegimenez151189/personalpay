const express = require("express")
const router = express.Router()
const location = require("./location")
const current = require("./current")
const forecast = require('./forecast')

router.use("/", location)
router.use("/", current)
router.use("/", forecast)


module.exports = router