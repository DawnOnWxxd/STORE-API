const product = require('./model.js')

const getreq = async (req,res) =>{
    res.status(200).send("hello world")
}

module.exports = {getreq};