const express = require('express')
const { dirname } = require('path')
const app = express()
const path = require('path')
    //require('dotenv').config()
const port = process.env.PORT || 5000

// !important! 
// you need to install the following libraries |express|ejs|[dotenv > if required]
// or run this command >> npm i express ejs dotenv 

//app.set('view engine', 'engine')

app.use(express.static('public'))

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/imagenes', express.static(__dirname + 'public/imagenes'))

app.get('/', (req, res) => {

    res.send('hello from simple server :)')

})

app.get('/login', (req, res) => {

    res.status(201).sendFile(path.join(__dirname, '../html/login.html'))

})

app.get('/Consulta', (req, res) => {

    res.status(201).sendFile(path.join(__dirname, '../html/Consulta_paciente.html'))

})

app.get('/registrar', (req, res) => {

    res.status(201).sendFile(path.join(__dirname, '../html/registrar.html'))

})

app.get('/registrar-cliente', (req, res) => {

    res.status(201).sendFile(path.join(__dirname, '../html/registroCliente.html'))

})
app.listen(port, () => console.log('> Server is up and running on port : ' + port))