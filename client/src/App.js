import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import getTweets from './api.js'
import Tweets from './Tweets.js'

import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
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
      })
      .catch(error => console.log(error))

    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }
  render () {
    return (
      <Container>
        <header>
          <form action='submit' className='screenName'
            onSubmit={this.loadTweets.bind(this)}>
            <input type='text' ref='textInput' placeholder='Twitter @handle'/>
            <button type='submit' action='submit'>Submit</button>
          </form>
        </header>

        <Tweets tweets={this.state.tweets} screenName={this.state.screenName} />
      </Container>
    )
  }
}

export default App
