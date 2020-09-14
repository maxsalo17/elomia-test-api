const express = require('express')
const mongoose = require('mongoose')
const bluebird = require('bluebird')
const bodyParser = require('body-parser')
const config = require('./config.json')
const app = express()
const port = process.env.PORT || 3000
const apiRoutes = require('./lib/routes')


const startServer = () => {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use('/api', apiRoutes)
    app.listen(port)
    console.log(`App started on port ${port}`)
}

const connectDb = () => {
    mongoose.Promise = bluebird

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.connect(config.mongodb, options)
    return mongoose.connection
}

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer)
