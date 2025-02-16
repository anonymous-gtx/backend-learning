require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/github', (req, res) =>{
    res.send('anonymous-gtx')
})

app.get('/login', (req, res) =>{
    res.send('<h1>Login bruh!</h1>')
})

app.get('/youtube.com', (req, res) =>{
    res.send(
        '<h2>anonymous-gtx</h2>'
    )
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})