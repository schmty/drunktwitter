import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import getTweets from './api.js'
import Tweets from './Tweets.js'

import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
`

const Header = styled.header`
  font-size: 2em;
`

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
      })
      .catch(error => console.log(error))

    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

  handleChange (event) {
    this.setState({screenName: event.target.value})
  }

  render () {
    return (
      <Container className='frame'>
        <Header>
          <form action='submit' className='screenName'
            onSubmit={this.loadTweets.bind(this)}>
            <H2>@<Input onChange={this.handleChange.bind(this)} value={this.state.screenName} 
              type='search'
              ref='textInput'
              placeholder='Twitter @handle' /></H2>
            <button type='submit' action='submit'>Submit</button>
          </form>
        </Header>

        <Tweets tweets={this.state.tweets} screenName={this.state.screenName} />
      </Container>
    )
  }
}

export default App
