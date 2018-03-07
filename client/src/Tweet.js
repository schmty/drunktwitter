import React, { Component } from 'react'

import styled from 'styled-components'

const TweetContain = styled.div`
  background: #fff;
  margin: 2% auto;
  // change these values?
  max-width: 700px;
  min-width: 600px;
  -wbkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;

  // box shadow stuff;
  -webkit-box-shadow: #bdc3c7 0 5px 5px;
  -moz-box-shadow: #bdc3c7 0 5px 5px;
  box-shadow: #bdc3c7 0 5px 5px;
`

const ProfilePic = styled.div`
  float: left;
  display: block;
  padding: 1%;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const TweetHeader = styled.h3`
  font-size: 1.05em;
  font-weight: 300;
  padding-top: 1%;
`

const TweetBody = styled.div`
  margin-left: 10%;
  max-width: 100%;
  min-width: 50%;
`

class Tweet extends Component {
  render () {
    return (
      <TweetContain className='bit-75'>
        <ProfilePic>
          <Image src={this.props.tweet.user.profile_image_url} />
        </ProfilePic>
        <TweetHeader>@{this.props.screenName}</TweetHeader>
        <TweetBody>
          {this.props.tweet.full_text}
        </TweetBody>
      </TweetContain>
    )
  }
}

export default Tweet
