import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import getTweets from './api/tweets.js'
import Tweet from './Tweet.js'

import styled from 'styled-components'

const Header = styled.div`
  font-size: 2em;
  margin: 0 auto;
`

// TODO: find out how to unstyle the little clear button
const Input = styled.input`
  position: relative;
  margin-top: 10px;
  height: 100px;
  max-width: 600px;
  outline: none;
  min-width: 550px;
  font-size: 1.5em;
  text-align: left;
  border: none;
  opacity: 1;
  font-weight: 100;
  background-color: papayawhip;
  display: inline-block;
  --webkit-appearance: textfield;
  --webkit-rtl-ordering: logical;
  cursor: text;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  margin: 0 auto;
`

const H3 = styled.h3`
  font-weight: 10;
  text-align: center;
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tweets: []
    }
  }

  loadTweets (event) {
    event.preventDefault()

    const screenName = ReactDOM.findDOMNode(this.refs.textInput).value.trim()

    getTweets(screenName)
      .then((tweets) => {
        if (tweets.length === 0) {
          this.setState({
            tweets: null,
            screenName: screenName
          })
          // TODO: do i need to have screen name even here?
        } else {
          this.setState({
            tweets: tweets,
            screenName: screenName
          })
        }
      })
      .catch(error => console.log(error))
  }

  render () {
    const tweets = this.state.tweets
    const screenName = this.state.screenName
    return (
      <div className='frame'>
        <Header>
          <form action='submit' className='screenName'
            onSubmit={this.loadTweets.bind(this)}>
            <H3>@<Input type='text'
              ref='textInput'
              placeholder='Twitter @handle' /></H3>
          </form>
        </Header>

        <div className='frame'>
          {tweets ? (tweets.map((tweet) => {
            return <Tweet key={tweet.id} tweet={tweet} screenName={this.state.screenName} />
          }))
            : <div>{screenName} has no drunk tweets </div>
          }
        </div>
      </div>
    )
  }
}

export default App
