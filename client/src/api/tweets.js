const getTweets = async (screenName) => {
  const url = '/api/user_tweets?screen_name=' + screenName
  const response = await fetch(url)
  const body = await response.json()

  if (response.status !== 200) throw Error(body.message)

  return body
}

export default getTweets
