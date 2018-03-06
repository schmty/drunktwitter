import axios from 'axios'

function getTweets (screenName) {
  return new Promise((resolve, reject) => {
    const url = 'http://localhost:3001/api/user_tweets?screen_name=' + screenName

    axios.get(url)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default getTweets
