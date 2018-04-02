require('dotenv').config()
const express = require('express')
const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TW_CS_KEY,
  consumer_secret: process.env.TW_CS_SECRET,
  bearer_token: process.env.TW_BEARER_TOKEN
})

const app = express()
const port = process.env.PORT || 5000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/', express.static(`${__dirname}/client/build`))

app.get('/api/user_tweets', (req, res) => {
  let tweetList = []
  const query = {
    screen_name: req.query.screen_name,
    tweet_mode: 'extended'
  }
  client.get('statuses/user_timeline', query, (err, tweets, response) => {
    if (err) {
      console.log(err)
    }
    if (!err) {
      tweets.forEach((tweet) => {
        let date = new Date(tweet.created_at)
        if (date.getHours() >= 20 || date.getHours() <= 3) {
          tweetList.push(tweet)
        }
      })
      res.send(tweetList)
    }
  })
})

app.listen(port, () => console.log(`Example app listening on port: ${port}`))
