require('dotenv').config()

const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send("twitter page")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get("/other", (req, res) => {
    res.send("<h2>nice<h2/>")
})

app.listen(process.env.PORT, () => {
    console.log('App is listening on port ' + process.env.PORT)
})
