const jsonCurrent = async (weather) => {

    //Datos del tiempo
    const descipcion = weather.data.current.weather[0].description
    const temp = weather.data.current.temp
    const termica = weather.data.current.feels_like
    const min = weather.data.daily[0].temp.min
    const max = weather.data.daily[0].temp.max
    const humedad = weather.data.current.humidity
    
    const weatherData = {
        descipcion,
        temp,
        termica,
        min,
        max,
        humedad
    }

    return weatherData
}

module.exports = {
    jsonCurrent,
}