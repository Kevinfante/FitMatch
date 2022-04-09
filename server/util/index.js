const axios = require('axios');
const keys = require('../db/keys.js');

var getWeather = function(callback) {
  // console.log('controller get all')
  let reqString = `http://api.openweathermap.org/data/2.5/weather?q=91342&APPID=${keys.weatherkey}&units=imperial`;
  console.log(reqString)

  let options = {
    method: 'get',
    url: reqString,
  };

  axios(options)
    .then((res)=>{
      callback(null, res)
    })
    .catch((err)=>{
      callback('error in the get weather: ', err)
    })
}

module.exports = { getWeather }