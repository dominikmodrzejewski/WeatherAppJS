const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'api.openweathermap.org/data/2.5/weather?q='

const API_KEY = '&appid=37f94956ea562a1a69007481d5f8689a'
const API_UNITS = '&units=metric'