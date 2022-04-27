
const jsonClima = async (weather) => {

    //Días
    const dias = [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ];

    const dia = weather.data.daily.map(e => ({
        dia: new Date(e.dt*1000)
    }))

    const dianumber = dia.map(e => ({
        dianumber: e.dia.getDay()
    }))

    const clima = weather.data.daily

    let result = []
    for (let i = 0; i < 6; i++) {
        result.push({
            dias: dias[dianumber[i].dianumber],
            descripcion: clima[i].weather[0].description,
            temp: clima[i].temp.day,
            termica: clima[i].feels_like.day,
            min: clima[i].temp.min,
            max: clima[i].temp.max,
            humedad: clima[i].humidity
        })    
    }

    return result
  
}




module.exports = {
  jsonClima,
}
