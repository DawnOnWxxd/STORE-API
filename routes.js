const express = require('express')
const router = express.Router()
const {getreq} = require('./controller.js')

router.route('/').get(getreq)

module.exports = router;