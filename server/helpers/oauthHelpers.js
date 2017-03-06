var oauthHelpers = {}
const oauth = require('oauth')

oauthHelpers.twitterOauth = new oauth.OAuth(
  process.env.TWITTER_REQUEST_TOKEN_URL,
  process.env.TWITTER_ACCESS_TOKEN_URL,
  process.env.TWITTER_CONSUMER_KEY,
  process.env.TWITTER_CONSUMER_SECRET,
  '1.0',
  null,
  'HMAC-SHA1'
)

module.exports = oauthHelpers
