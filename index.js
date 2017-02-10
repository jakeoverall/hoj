let express = require('express')
let bodyparser = require('body-parser')
let mongoose = require('mongoose')
const PORT = process.env.PORT || 8080
let session = require('./server-assets/sessions/sessions')
let server = express()

let Auth = require('./server-assets/routes/user-routes')

server.use(session)


const connectionString = 'mongodb://hojuser:password123@ds050869.mlab.com:50869/hoj'

server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended: true }))

server.use(express.static(__dirname + '/public'))

server.use(Auth)


let connection = mongoose.connection;

mongoose.connect(connectionString, {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', (err) => {
    console.log('there was a connection problem', err)
});

connection.once('open', () => {
    console.log('now connected to db')
    server.listen(8080, function () {
        console.log('server working', 'http://localhost' + PORT)
    })
})























