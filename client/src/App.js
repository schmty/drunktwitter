import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import getTweets from './api.js'
import Tweets from './Tweets.js'

import styled from 'styled-components'

const Header = styled.header`
  font-size: 2em;
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
  margin: 0em;

`

const H2 = styled.h2`
  font-weight: 100;
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
        this.setState({
          tweets: tweets.data,
          screenName: screenName
        })

        if (this.state.tweets.length === 0) {
          this.setState({
            tweets: [{full_text: 'No drunk tweets :/'}]
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
            <H2>@<Input value={this.state.screenName} type='text'
              ref='textInput'
              placeholder='Twitter @handle' /></H2>
          </form>
        </Header>

        <Tweets tweets={this.state.tweets} screenName={this.state.screenName} />
      </div>
    )
  }
}

export default App
