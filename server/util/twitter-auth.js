/*
THIS IS A PART OF YOUR BUILD PROCESS NOW
 */
// may need to route dotenv here
require('dotenv').config({path: '../../.env'})
const axios = require('axios')
const fs = require('fs')

/*
I have to make sure to get the appropriate bearer token before declaring sties
routes
 */

const encodedKey = encodeURIComponent(process.env.TW_CS_KEY)
const encodedSecret = encodeURIComponent(process.env.TW_CS_SECRET)
const credentialsStr = `${encodedKey}:${encodedSecret}`
const credentials = Buffer.from(credentialsStr).toString('base64')
console.log(credentials)

const authUrl = 'https://api.twitter.com/oauth2/token'
// TODO: this may not be good, seems hacky

const twitterAuth = () => {
  const axiosData = 'grant_type=client_credentials'
  const axiosOpts = {
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },

    withCredentials: true
  }
  axios.post(authUrl, axiosData, axiosOpts)
    .then((response) => {
      console.log(response)
      const fileData = {
        data: 'TW_BEARER_TOKEN=' + response.data.access_token + '\n' +
              'TW_CS_KEY=' + encodedKey + '\n' +
              'TW_CS_SECRET=' + encodedSecret
      }

      fs.writeFile('../../.env', fileData.data, (err) => {
        if (err) {
          throw err
        }

        console.log('.env file up to date')
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

// RUN
twitterAuth()
