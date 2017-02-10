let express = require('express')
let bodyparser = require('body-parser')
let mongoose = require('mongoose')
let categoryRoutes = require('./server-assets/routes/category-routes')
let commentRoutes = require('./server-assets/routes/comment-routes')
let questionRoutes = require('./server-assets/routes/question-routes')
let userRoutes = require('./server-assets/routes/user-routes')
const PORT = process.env.PORT || 8080
let server = express()

const connectionString = 'mongodb://hojuser:password123@ds050869.mlab.com:50869/hoj'

server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended: true }))

server.use(express.static(__dirname + '/public'))


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























