const mongoose = require('mongoose')

const connectDB = async (URI) => {
    return mongoose
    .set('strictQuery',true)
    .connect(URI)
}

module.exports = connectDB;