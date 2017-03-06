const http = require('http')
require('dotenv').config()

const oauthHelpers = require('../helpers/oauthHelpers')

var Twitters = {}

Twitters.searchTweets = function (req, res) {
  oauthHelpers.twitterOauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=' + req.params.query,
    process.env.TWITTER_ACCESS_TOKEN, // test user token
    process.env.TWITTER_ACCESS_TOKEN_SECRET, // test user secret
    function (e, data, resOauth) {
      if (e) console.error(e)
      // console.log(require('util').inspect(data))
      res.send(JSON.parse(data))
    })
}

Twitters.statusUpdate = function (req, res) {
  oauthHelpers.twitterOauth.post(
    'https://api.twitter.com/1.1/statuses/update.json?status=' + req.body.status,
    process.env.TWITTER_ACCESS_TOKEN, // test user token
    process.env.TWITTER_ACCESS_TOKEN_SECRET, // test user secret
    req.body.status, 'text',
    function (e, data, resOauth) {
      if (e) console.error(e)
      // console.log(require('util').inspect(data))
      res.send(JSON.parse(data))
    })
}

Twitters.getTimeline = function (req, res) {
  oauthHelpers.twitterOauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.TWITTER_ACCESS_TOKEN, // test user token
    process.env.TWITTER_ACCESS_TOKEN_SECRET, // test user secret
    function (e, data, resOauth) {
      if (e) console.error(e)
      // console.log(require('util').inspect(data))
      res.send(JSON.parse(data))
    })
}
module.exports = Twitters
