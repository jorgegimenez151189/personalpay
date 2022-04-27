<p align="center">
  <a href="" rel="noopener">
</p>

<h3 align="center">Desafío personal pay</h3>

---

<p align="center"> Proyecto que toma los datos de la localización por medio de la api ip-api.co y los datos del clima por medio de la api https://openweathermap.org/, los enviroment se encuentran en .env.example donde podrán encontrar la api key de ip-api.co y openweathermap
    <br> 
</p>

## 📝 PUERTO

3001

## 📝 NODE MODULE

instalar modulos "npm install"

## 📝 ENDPOINTS

- [GET /v1](#ruta)
- [GET /v1/location](#location)
- [GET /v1/current](#current)
- [GET /v1/current/city](#currentCity)
- [GET /v1/forecast](#forecast)
- [Authors](#deployment)

## 🔧 GET /v1 <a name = "v1"></a>

Ruta principal


## 🔧 GET /v1/location <a name = "location"></a>

Endpoint que devuelve los datos del a ubicación segun la api ip-api.co

```
    {
      "ip": "201.139.80.33",
      "version": "IPv4",
      "city": "Posadas",
      "region": "Misiones",
      "region_code": "N",
      "country": "AR",
      "country_name": "Argentina",
      "country_code": "AR",
      "country_code_iso3": "ARG",
      "country_capital": "Buenos Aires",
      "country_tld": ".ar",
      "continent_code": "SA",
      "in_eu": false,
      "postal": "3300",
      "latitude": -27.3833,
      "longitude": -55.8833,
      "timezone": "America/Argentina/Cordoba",
      "utc_offset": "-0300",
      "country_calling_code": "+54",
      "currency": "ARS",
      "currency_name": "Peso",
      "languages": "es-AR,en,it,de,fr,gn",
      "country_area": 2766890,
      "country_population": 44494502,
      "asn": "AS61449",
      "org": "RESEARCH SRL"
    }
```
## 🔧 GET /v1/current <a name = "current"></a>

Endpoint que devuelve los datos de la ubicación actual según ip-api.co y el estado del tiempo actual.
```
  {
    "ip": "201.139.80.33",
    "version": "IPv4",
    "city": "Posadas",
    "region": "Misiones",
    "region_code": "N",
    "country": "AR",
    "country_name": "Argentina",
    "country_code": "AR",
    "country_code_iso3": "ARG",
    "country_capital": "Buenos Aires",
    "country_tld": ".ar",
    "continent_code": "SA",
    "in_eu": false,
    "postal": "3300",
    "latitude": -27.3833,
    "longitude": -55.8833,
    "timezone": "America/Argentina/Cordoba",
    "utc_offset": "-0300",
    "country_calling_code": "+54",
    "currency": "ARS",
    "currency_name": "Peso",
    "languages": "es-AR,en,it,de,fr,gn",
    "country_area": 2766890,
    "country_population": 44494502,
    "asn": "AS61449",
    "org": "RESEARCH SRL",
    "descipcion": "cielo claro",
    "temp": 31.27,
    "termica": 35.96,
    "min": 25.48,
    "max": 31.56,
    "humedad": 62
  } 
```
## 🔧 GET /v1/current/city <a name = "currentCity"></a>

City es un parámetro opcional. Endpoint devuelve los datos de ubicación city y el estado del tiempo actual.

## 🔧 GET /v1/forecast <a name = "forecast"></a>

Endpoint que devuelve los datos de la ubicación actual según ip-api.co y el estado del tiempo a 5 días.
```
  {
    "ip": "201.139.80.33",
    "version": "IPv4",
    "city": "Posadas",
    "region": "Misiones",
    "region_code": "N",
    "country": "AR",
    "country_name": "Argentina",
    "country_code": "AR",
    "country_code_iso3": "ARG",
    "country_capital": "Buenos Aires",
    "country_tld": ".ar",
    "continent_code": "SA",
    "in_eu": false,
    "postal": "3300",
    "latitude": -27.3833,
    "longitude": -55.8833,
    "timezone": "America/Argentina/Cordoba",
    "utc_offset": "-0300",
    "country_calling_code": "+54",
    "currency": "ARS",
    "currency_name": "Peso",
    "languages": "es-AR,en,it,de,fr,gn",
    "country_area": 2766890,
    "country_population": 44494502,
    "asn": "AS61449",
    "org": "RESEARCH SRL",
    "clima": [
        {
            "dias": "miércoles",
            "descripcion": "cielo claro",
            "temp": 31.15,
            "termica": 35.43,
            "min": 25.48,
            "max": 31.56,
            "humedad": 61
        },
        {
            "dias": "jueves",
            "descripcion": "lluvia ligera",
            "temp": 25.6,
            "termica": 26.15,
            "min": 21.27,
            "max": 28.03,
            "humedad": 74
        },
        {
            "dias": "viernes",
            "descripcion": "lluvia ligera",
            "temp": 19.19,
            "termica": 19.7,
            "min": 18.13,
            "max": 20.87,
            "humedad": 97
        },
        {
            "dias": "sábado",
            "descripcion": "lluvia ligera",
            "temp": 22.36,
            "termica": 22.92,
            "min": 15.98,
            "max": 22.71,
            "humedad": 87
        },
        {
            "dias": "domingo",
            "descripcion": "lluvia ligera",
            "temp": 19.17,
            "termica": 19.57,
            "min": 17.4,
            "max": 19.46,
            "humedad": 93
        },
        {
            "dias": "lunes",
            "descripcion": "lluvia de gran intensidad",
            "temp": 19.04,
            "termica": 19.58,
            "min": 16.57,
            "max": 19.04,
            "humedad": 99
        }
    ]
  }
```

## 🔧 GET /v1/forecast/city <a name = "forecastCity"></a>

City es un parámetro opcional. Endpoint devuelve los datos de ubicación city y el estado del tiempo a 5 días.

## ✍️ Authors <a name = "authors"></a>

- [Gimenez Jorge Manuel](https://github.com/jorgegimenez151189/personalpay/tree/master) - 

