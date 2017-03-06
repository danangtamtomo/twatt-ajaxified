var express = require('express')
var router = express.Router()
var twitters = require('../controllers/twitters')

/* GET users listing. */
router.get('/search/:query', twitters.searchTweets)
router.get('/timeline', twitters.getTimeline)
router.post('/timeline', twitters.statusUpdate)

module.exports = router
