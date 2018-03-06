import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import getTweets from './api.js'
import Tweets from './Tweets.js'

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
  width: 500px;
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
  font-weight: 100;
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
        if (tweets.data.length === 0) {
          console.log('No tweets')
          console.log(tweets)
          this.setState({
            tweets: [{ user: {profile_image_url: 'http://www.iconninja.com/files/957/859/584/beverage-drink-mug-beer-icon.png'}, full_text: 'No drunk tweets :/'}]
          })
        } else {
          this.setState({
            tweets: tweets.data
          })
        }
      })
      .catch(error => console.log(error))
  }

  render () {
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

        <Tweets tweets={this.state.tweets} screenName={this.state.screenName} />
      </div>
    )
  }
}

export default App
