const express = require('express')
const router = require('./routes.js')
const app = express()
const connectDB = require('./connectdb.js')
require('dotenv').config()

app.use('/',router)

const port = process.env.PORT || 5000
const start = async () =>{
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`Connected to the DB and Server is listening on port ${port}...`))
}

start()