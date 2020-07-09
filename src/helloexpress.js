const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send("This is the root directory")
})

app.get('/weather', (req, res) => {
    res.send("This is the weather directory")
})

app.listen(8082, () => {
    console.log("web server is up")
})