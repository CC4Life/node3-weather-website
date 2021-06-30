const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d465c956fc5dc6aefcfe852b694adcdc&query='+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude) +'&units=m'

    request({ url , json: true }, (error, { body }) => {
        const weather = body.current
        if ( error ){
            callback('Unable to connect to weather service'. undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, weather.weather_descriptions[0] + '. It is currently ' + weather.temperature + ' degrees out. But it feels like ' + weather.feelslike + ' degrees.') 
       }
    })
}

module.exports = forecast