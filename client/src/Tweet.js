import React, { Component } from 'react'

class Tweet extends Component {
  render () {
    return (
      <div className='container'>
        {this.props.tweet.full_text}
      </div>
    )
  }
}

export default Tweet