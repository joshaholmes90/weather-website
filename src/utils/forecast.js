const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3e4c8c6e55e4a619014b28cf5e9402d7/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request( {url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find forecast. Try another search.', undefined)
        } else {
            callback(undefined, body.currently.summary)
        }
    })
}

module.exports = forecast