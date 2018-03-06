import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
    font-size: 14px;
    background: papayawhip;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
