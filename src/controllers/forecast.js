const { default: axios } = require('axios')
const {jsonClima } = require('../helpers/jsonForecast')
require("dotenv").config();

const getLocationForecast = async (req, res) => {
    try {
        
        //Solicitud API localización
        const location = await axios.get(process.env.LOCATION)
        const latitude = location.data.latitude
        const longitude = location.data.longitude
        
        //Pedido a API del tiempo
        const weather = await axios.get(`${process.env.OPENWEATHER}lat=${latitude}&lon=${longitude}&exclude=${process.env.EXCLUDE}&appid=${process.env.APIKEY}&${process.env.IDIOMA}&${process.env.UNIDAD}`)
        
        const clima = await jsonClima(weather)
        
        const result = {
            ...location.data,
            clima
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

const getLocationForecastCity = async (req, res) => {
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
            
            const clima = await jsonClima(weather)
            
            const result = {
                ...location.data,
                clima
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
    getLocationForecast,
    getLocationForecastCity,
}