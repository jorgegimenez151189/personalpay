const { default: axios } = require('axios')
require("dotenv").config();



const getLocation = async (req, res) => {
    try {
        const location = await axios.get(process.env.LOCATION)
        res
            .status(200)
            .json(location.data)
            
    } catch (error) {
        console.log(error.message)
        res
            .status(500)
            .json({ message: 'Internal server error' })
    }
}

module.exports = {
    getLocation,
}