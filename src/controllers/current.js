const { default: axios } = require('axios')
const {jsonCurrent} = require('../helpers/jsonCurrent')
require("dotenv").config();

const getLocationWeather = async (req, res) => {
    try {
        
        //Pedido a la API Localización
        const location = await axios.get(process.env.LOCATION)
        const latitude = location.data.latitude
        const longitude = location.data.longitude
        
        //Pedido a API del tiempo
        const weather = await axios.get(`${process.env.OPENWEATHER}lat=${latitude}&lon=${longitude}&exclude=${process.env.EXCLUDE}&appid=${process.env.APIKEY}&${process.env.IDIOMA}&${process.env.UNIDAD}`)
        
        const resultData = await jsonCurrent(weather)

        const result = {
            ...location.data,
            ...resultData
        }

        res
            .status(200)
            .json(result)
            
    } catch (error) {
        console.log(error.message)
        res
            .status(500)
            .json({ message: 'Internal server error' })
    }
}

const getLocationCity = async (req, res) => {
    try {
        const ciudades = {
            montreal: "24.48.0.1",
            madrid: "195.12.50.155",
            paris: "51.158.22.211",
            varsovia: "46.248.187.100",
            londres: "5.152.197.179"
        }
        const {city} = req.params
        const locationip = ciudades[city]

        if (locationip) {
            //Pedido a API Localización
            const location = await axios.get(`${process.env.LOCATIONIP}${locationip}/json/`)
            const latitude = location.data.latitude
            const longitude = location.data.longitude
            
            //Pedido a API del tiempo
            const weather = await axios.get(`${process.env.OPENWEATHER}lat=${latitude}&lon=${longitude}&exclude=${process.env.EXCLUDE}&appid=${process.env.APIKEY}&${process.env.IDIOMA}&${process.env.UNIDAD}`)
            
            const resultData = await jsonCurrent(weather)

            const result = {
                ...location.data,
                ...resultData
            }

            res
                .status(200)
                .json(result)
        }else{
            res
                .status(400)
                .send('Ciudad no disponible')
        }
    
    } catch (error) {
        res
            .status(500)
            .json({ message: 'Internal server error' })
    }
}
module.exports = {
    getLocationWeather,
    getLocationCity,
}