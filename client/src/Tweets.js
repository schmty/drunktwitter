import React, { Component } from 'react'
import Tweet from './Tweet.js'

class Tweets extends Component {
  render () {
    const tweets = this.props.tweets
    // DEPRECATE? moving api layer to do something if no tweets are provided
    return (
      <div className='frame'>
        {tweets.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet} screenName={this.props.screenName} />
        })}
      </div>
    )
  }
}

export default Tweets
