const product = require('./model.js')
const connectDB = require('./connectdb')
const jsonproducts = require('./products.json')
require('dotenv').config()

const populate = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        await product.deleteMany()
        await product.create(jsonproducts)
        console.log("success")

    } catch (error) {
        console.log(error)
    }
}

populate()