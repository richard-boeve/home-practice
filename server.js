const express = require('express')
const server = express()
const routes = require('./routes')
const hbs = require('express-handlebars')

//Middleware
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))


//Routes
server.use('/', routes)
server.use('/blog', routes)


module.exports = server