const request = require('request');

const geocode = (address, callback) => {    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiY2M0bGlmZSIsImEiOiJja3BwczlycW8wNmdvMm9sZTJwdzE5d3ZrIn0.3XZupR5f1oWNsUikS6IaCw&limit=1'

    request({ url , json: true }, (error, { body }) => {
        if ( error) {
            callback('Unable to connect to location services.')
        } else if (body.features.length === 0 ) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
            })
       
        }
    })
}

module.exports = geocode