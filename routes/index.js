const router = require('express').Router()

router.use('/api', require('./user.js'))
router.use('/api', require('./topic.js'))

module.exports = router