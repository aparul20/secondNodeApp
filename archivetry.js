//This code is for converting JSON to string 
const book = {"title": "You can win", "author": "Shiv Khera"}
const bookString = JSON.stringify(book)
console.log(book.title)

//Learn callback and how readFile is called asynchronously
fs = require('fs')
fs.readFile("test.txt", function(err, data){
    if (err){
        console.log("There was an error")
    }
    else{
        //console.log("Data of " + __filename +  " file is:" + data.toString())
        console.log("File contents: " + data.toString())
    }
})

//Learn how you can write your own javascript files and import them
const checkUtils = require('./src/utils.js')
console.log(checkUtils())

//Learn how you can write your own javascript files and import them
const mathsUtils = require('./src/mathsUtils.js')
console.log(mathsUtils(3, 4))

//Learn how Argv is used
console.log("Arguments list is: " + (process.argv[1]))

//Arrow functions do not bind this.  
const event = {
    name: 'Birthday Party',
    guestList: ['prisha', 'saanvi', 'shreya'],
    printGuestList() {
        console.log("Now printing Guest List : " + this.guestList)
        this.guestList.forEach((guest) => {
            console.log ("Guest: " + guest + " is attending the:" + this.name)
        })
    }
}
event.printGuestList()

//Learning callbacks:
const request = require('request')
myURL = "http://api.weatherstack.com/current?access_key=735999daa42df26aa5f502409a63ef73&query=18.5,73.85"
/*request({ url: myURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else {
        const latitude = response.body.location.name
        console.log(latitude)
    }
})
*/
/*
const myRequest = (url, callback) => {
    console.log(url)
    request(url, (error, response) => {
        //console.log(response.body)
        const data = response.body
        callback(data)
    })
    
}

myRequest(myURL, function (data) {
    console.log("Firstcall: " + data)
})

console.log("After 1st call")

myRequest(myURL, function (data) {
    console.log("Secondcall: " + data)
})

console.log("After 2nd call")
*/

console.log("starting")

setTimeout(() => {
    console.log("1 sec have finished")
}, 1000);

setTimeout(() => {
    console.log("8 secs have finished")
}, 8000);



console.log("ending")

//Learn how to call callback functions
const geocode = require('./src/geocode.js')
myURL = "http://api.weatherstack.com/current?access_key=735999daa42df26aa5f502409a63ef73&query=18.5,73.85"
geocode(myURL, (error1, data) => {
    console.log(data)
})