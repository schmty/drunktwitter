import React, { Component } from 'react'

import styled from 'styled-components'

const TweetContain = styled.div`
  background: #fff;
  margin: 2% auto;
  max-width: 600px;
  border: 2px solid #333;
  min-height: 100px;
`

const ProfilePic = styled.div`
  float: left;
  display: block;
  min-height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const TweetHeader = styled.h3`
  font-size: 1.05em;
  font-weight: 300;
`

const TweetBody = styled.div`
  margin-left: 10%;
  max-width: 500px;
  min-width: 200px;
`

class Tweet extends Component {
  render () {
    const screenName = this.props.screenName ? this.props.screenName : 'no user'
    const imgUrl = this.props.tweet.user.profile_image_url ? this.props.tweet.user.profile_image_url : '#'
    return (
      <TweetContain className='bit-75'>
        <TweetHeader>@{screenName}</TweetHeader>
        <ProfilePic>
          <Image src={imgUrl} />
        </ProfilePic>
        <TweetBody>
          {this.props.tweet.full_text}
        </TweetBody>
      </TweetContain>
    )
  }
}

export default Tweet
