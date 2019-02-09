import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components';

import globals from 'ui/theme/globals'
import { Users } from './Graph'


const GlobalStyle = createGlobalStyle`
  ${globals}
`

export default class App extends Component {
  render() {
    return (
      <div>
        React
        <GlobalStyle />
        <Users />
      </div>
    )
  }
}
