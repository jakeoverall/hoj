let express = require('express')
let bodyparser = require('body-parser')
let mongoose = require('mongoose')
let session = require('./server-assets/sessions/sessions')
let categoryRoutes = require('./server-assets/routes/category-routes')
let commentRoutes = require('./server-assets/routes/comment-routes')
let questionRoutes = require('./server-assets/routes/question-routes')
let userRoutes = require('./server-assets/routes/user-routes')
const PORT = process.env.PORT || 8080
let server = express()

let Auth = require('./server-assets/routes/user-routes')

function Validate(req, res, next) {
    if (req.session.uid) {
        return next()
    }
    return res.send({ error: 'Please Login or Register to continue' })
}

server.use(session)

const connectionString = 'mongodb://hojuser:password123@ds050869.mlab.com:50869/hoj'

const PORT = process.env.PORT || 8080
server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))


server.use(Auth)
server.post('/', Validate)
server.put('/', Validate)
server.delete('/', Validate)

server.use(categoryRoutes)
server.use(commentRoutes)
server.use(questionRoutes)

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























