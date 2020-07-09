const request = require("request")

const geocode = (url, callback) => {
    request({url}, (error, response) => {
        if (error) {
            console.log('Unable to connect to location services!')
        } else {
            data = JSON.parse(response.body)
            //console.log("Inside:" + JSON.stringify(data))
            callback(error, data.location.name)
        }
    })
}

module.exports = geocode